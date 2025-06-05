export const myTutorsPromise = (email) => {
    return fetch(`https://tutor-nexus.vercel.app/bookings?email=${email}`)
    .then(res => res.json());
}