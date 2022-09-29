
const dataFromDB = [
    {
        name: "Kayak1",
        idCategory:1,
        description: "Muy bueno",
        picture: "http2.mlstatic.com/D_NQ_NP_2X_938262-MLA45797105819_052021-F.webp",
        stock:12,
        id:1,
        price:1000
    },
    {
        name: "Kayak2",
        idCategory:1,
        description: "Muy bueno",
        picture: "../img/Kayak1",
        stock:5,
        id:2,
        price:1000
    },
    {
        name: "Kayak3",
        idCategory:1,
        description: "Muy bueno",
        picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JDnT7I5B4V1Tr3hFA6NauQHaFj%26pid%3DApi&f=1",
        stock:"4",
        id:3,
        price:1000,
    },
    {
        name: "Kayak4",
        idCategory:1,
        description: "Muy bueno",
        picture: "data:image/jpeg;base64,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",
        stock:5,
        id:4,
        price:1500
    },
    {
        name: "casco",
        idCategory:2,
        description: "Muy bueno",
        picture: "../img/kayak1",
        stock:5,
        id:5,
        price:50
    },
    {
        name: "remo",
        idCategory:2,
        description: "Muy bueno",
        picture: "../img/kayak1",
        stock:5,
        id:6,
        price:100
    }

];

export default dataFromDB;