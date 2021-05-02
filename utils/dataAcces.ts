export const getData = async (endpoint: string) => {
    return await fetch(endpoint)
        .then((r) => { return r.json() })
        .catch((err) => console.error("Something went wrong: ", err));
}