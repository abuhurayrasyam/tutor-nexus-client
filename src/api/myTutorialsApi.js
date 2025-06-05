export const myTutorialsPromise = (email) => {
    return fetch(`http://localhost:3000/tutorials?email=${email}`)
    .then(res => res.json());
}