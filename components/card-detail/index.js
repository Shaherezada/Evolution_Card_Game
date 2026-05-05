import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class CardDetailComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        const foodBadge = data.foodCost > 0
            ? `<span class="badge bg-danger ms-2">+${data.foodCost} к еде</span>`
            : '';

        const modelSection = data.model3d ? `
            <hr>
            <p class="text-muted mb-1" style="font-size:0.85em;">3D модель животного</p>
            <canvas id="model-viewer-canvas" class="model-viewer-canvas"></canvas>
            <p class="text-muted mt-1 text-center" style="font-size:0.72em;">
                Перетащите для вращения · прокрутите для масштаба
            </p>
        ` : '';

        return `
            <div class="card mx-auto" style="max-width: 480px;">
                <img src="${data.img}"
                     class="detail-img"
                     alt="${data.name}">
                <div class="card-body">
                    <h4 class="card-title">
                        ${data.name} ${foodBadge}
                    </h4>
                    <p class="text-muted mb-1" style="font-size: 0.9em;">
                        ${data.nameEn} &nbsp;·&nbsp; ${data.type}
                    </p>
                    <hr>
                    <p class="card-text">${data.effect}</p>
                    ${modelSection}
                </div>
            </div>
        `;
    }

    initViewer(data) {
        if (!data.model3d) return;

        const canvas = document.getElementById('model-viewer-canvas');
        if (!canvas) return;

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.setClearColor(0xf5d7ba, 1);
        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            50,
            canvas.clientWidth / canvas.clientHeight,
            0.1,
            1000
        );
        camera.position.set(0, 1.5, 4);

        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;
        controls.target.set(0, 0.8, 0);
        controls.update();

        scene.add(new THREE.AmbientLight(0xffffff, 1.2));
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(3, 8, 5);
        scene.add(dirLight);

        const loader = new GLTFLoader();
        loader.load(data.model3d, (gltf) => {
            const model = gltf.scene;

            // Нормализация: масштаб и центрирование
            const box = new THREE.Box3().setFromObject(model);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            if (maxDim > 0) model.scale.multiplyScalar(2.5 / maxDim);

            const box2 = new THREE.Box3().setFromObject(model);
            const center = box2.getCenter(new THREE.Vector3());
            model.position.x -= center.x;
            model.position.z -= center.z;
            model.position.y -= box2.min.y;

            scene.add(model);
        });

        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        }
        animate();
    }

    render(data) {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML(data));
        this.initViewer(data);
    }
}
