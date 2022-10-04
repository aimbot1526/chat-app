
export async function getHello() {

    try {
        const response = await fetch('/hello');
        return await response.json();
    } catch (e) {
        console.log(e);
    }
}