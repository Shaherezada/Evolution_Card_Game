import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Маппинг: id карточки → 3D модель существа
const EVOLUTION_CARD_CREATURES = {
    1: 'threejs/models/Mouse.glb',       // Норное
    2: 'threejs/models/Giraffe.glb',     // Большой
    3: 'threejs/models/Black bear.glb',  // Спячка
    4: 'threejs/models/Worm.glb',        // Паразит
};
const CARD_DEFAULT_CREATURE = 'threejs/models/Salamander.glb';

export class CardDetailComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(cardData) {
        const foodBadge = cardData.foodCost > 0
            ? `<span class="badge bg-danger ms-2">+${cardData.foodCost} к еде</span>`
            : '';
        return `
            <div class="card mx-auto" style="max-width: 820px;">
                <div style="display:flex; flex-wrap:wrap;">
                    <img src="${cardData.img}"
                         class="detail-img"
                         alt="${cardData.name}"
                         style="width:50%; min-width:240px;">
                    <canvas id="creature-canvas"
                            style="width:50%; min-width:240px; height:360px; display:block; background:#deecd4;"></canvas>
                </div>
                <div class="card-body">
                    <h4 class="card-title" style="font-family: 'Noto Serif', serif; color: #931417;">
                        ${cardData.name} ${foodBadge}
                    </h4>
                    <p class="text-muted mb-1" style="font-size: 0.9em;">
                        ${cardData.nameEn} &nbsp;·&nbsp; ${cardData.type}
                    </p>
                    <hr>
                    <p class="card-text">${cardData.effect}</p>
                </div>
            </div>
        `;
    }

    _initCreatureViewer(cardId) {
        const creatureCanvas = document.getElementById('creature-canvas');
        if (!creatureCanvas) return;

        const cardCreaturePath = EVOLUTION_CARD_CREATURES[cardId] ?? CARD_DEFAULT_CREATURE;

        const creatureCanvasW = creatureCanvas.clientWidth  || 400;
        const creatureCanvasH = creatureCanvas.clientHeight || 360;

        const cardScene = new THREE.Scene();
        cardScene.background = new THREE.Color(0xdeecd4);

        const cardCamera = new THREE.PerspectiveCamera(60, creatureCanvasW / creatureCanvasH, 0.1, 1000);
        cardCamera.position.set(0, 1.5, 4);

        const evolutionRenderer = new THREE.WebGLRenderer({ canvas: creatureCanvas, antialias: true });
        evolutionRenderer.setSize(creatureCanvasW, creatureCanvasH, false);

        const cardOrbitControls = new OrbitControls(cardCamera, evolutionRenderer.domElement);
        cardOrbitControls.enableDamping = true;
        cardOrbitControls.target.set(0, 0.8, 0);
        cardOrbitControls.update();

        cardScene.add(new THREE.AmbientLight(0xffffff, 0.8));
        const cardSunLight = new THREE.DirectionalLight(0xffffff, 0.8);
        cardSunLight.position.set(4, 10, 8);
        cardScene.add(cardSunLight);

        const creatureLoader = new GLTFLoader();
        creatureLoader.load(cardCreaturePath, (gltf) => {
            const creatureMesh = gltf.scene;

            const creatureBBox = new THREE.Box3().setFromObject(creatureMesh);
            const creatureDims = creatureBBox.getSize(new THREE.Vector3());
            const creatureMaxSide = Math.max(creatureDims.x, creatureDims.y, creatureDims.z);
            if (creatureMaxSide > 0) creatureMesh.scale.multiplyScalar(2 / creatureMaxSide);

            const creatureBBoxScaled = new THREE.Box3().setFromObject(creatureMesh);
            const creatureCenterPos = creatureBBoxScaled.getCenter(new THREE.Vector3());
            creatureMesh.position.x -= creatureCenterPos.x;
            creatureMesh.position.z -= creatureCenterPos.z;
            creatureMesh.position.y -= creatureBBoxScaled.min.y;

            cardScene.add(creatureMesh);
        });

        function animateCardScene() {
            requestAnimationFrame(animateCardScene);
            cardOrbitControls.update();
            evolutionRenderer.render(cardScene, cardCamera);
        }
        animateCardScene();

        window.addEventListener('resize', () => {
            const updatedCardW = creatureCanvas.clientWidth;
            const updatedCardH = creatureCanvas.clientHeight;
            evolutionRenderer.setSize(updatedCardW, updatedCardH, false);
            cardCamera.aspect = updatedCardW / updatedCardH;
            cardCamera.updateProjectionMatrix();
        });
    }

    render(cardData) {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML(cardData));
        this._initCreatureViewer(cardData.id);
    }
}
