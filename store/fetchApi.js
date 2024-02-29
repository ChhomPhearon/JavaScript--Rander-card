const BASE_URL = "http://127.0.0.1:5500/data/";
export async function getData(endPoint) {
    try {
        const response = await fetch(BASE_URL + endPoint + ".json" ,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}