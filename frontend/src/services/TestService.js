
export async function getHello() {
    try {
        const response = await fetch('/auth/user');
        return await response.json();
    } catch (e) {
        console.log(e);
    }
}