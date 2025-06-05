export const myTutorialsPromise = (email) => {
    return fetch(`https://tutor-nexus.vercel.app/tutorials?email=${email}`)
    .then(res => res.json());
}