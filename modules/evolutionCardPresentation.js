// Презентационные поля карточек (img, model3d, matchLog),
// которых нет в API, но они нужны фронту для отрисовки.
// Ключ — id карточки.
const evolutionCardPresentation = {
    1: { img: "assets/cards_images/1.png", matchLog: "11011101",   model3d: "assets/models/mouse.glb"      },
    2: { img: "assets/cards_images/7.png", matchLog: "1111100",    model3d: "assets/models/Dinosaur.glb"   },
    3: { img: "assets/cards_images/3.png", matchLog: "10101011",   model3d: "assets/models/black-bear.glb" },
    4: { img: "assets/cards_images/2.png", matchLog: "001110",     model3d: "assets/models/worm.glb"       },
    5: { img: "assets/cards_images/9.png", matchLog: "110110",     model3d: "assets/models/Ant.glb"        },
    6: { img: "assets/cards_images/6.png", matchLog: "11111011",   model3d: "assets/models/salamander.glb" },
    7: { img: "assets/cards_images/4.png", matchLog: "0110110",    model3d: "assets/models/salamander.glb" },
    8: { img: "assets/cards_images/8.png", matchLog: "1001110",    model3d: "assets/models/Wolf.glb"       },
    9: { img: "assets/cards_images/5.png", matchLog: "111000111",  model3d: "assets/models/Crocodile.glb"  },
};

const defaultPresentation = {
    img: "assets/cards_images/1.png",
    matchLog: "",
    model3d: "",
};

export function decorateEvolutionCard(card) {
    const extra = evolutionCardPresentation[card.id] || defaultPresentation;
    return { ...card, ...extra };
}
