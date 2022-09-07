// write your code here
const baseUrl = "http://localhost:3000";
const init = () => {
    console.log("we are");

    fetchDog().catch(e => console.log(e))
}

async function fetchDog(){
    const response = await fetch(`${baseUrl}/images/1`);
    const data = await response.json()

    console.log(data);
    
}

document.addEventListener('DOMContentLoaded', init)