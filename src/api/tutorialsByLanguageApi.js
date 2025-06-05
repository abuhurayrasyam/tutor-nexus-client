export const getTutorialsByLanguage = (language) => {
    return fetch(`http://localhost:3000/tutorials?language=${language}`)
    .then(res => res.json());
}