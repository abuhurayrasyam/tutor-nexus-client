export const getTutorialsByLanguage = (language) => {
    return fetch(`https://tutor-nexus.vercel.app/tutorials?language=${language}`)
    .then(res => res.json());
}