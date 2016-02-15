let preguntes = [
    {
        id: 1,
        pregunta: "2 + 2",
        resposta_1: "2",
        resposta_2: "3",
        resposta_3: "4",
        resposta_4: "4",
        correcte: 4
    },
    {
        id: 2,
        pregunta: "Pregunta 2",
        resposta_1: "2",
        resposta_2: "3",
        resposta_3: "3333",
        resposta_4: "4",
        correcte: 4
    },
    {
        id: 3,
        pregunta: "Pregunta 3",
        resposta_1: "2",
        resposta_2: "3",
        resposta_3: "4444",
        resposta_4: "4",
        correcte: 4
    }
];

// Simulating async calls for plug-and-play replacement with REST services
export let findAll = () => new Promise((resolve, reject) => {
    resolve(preguntes);
});
