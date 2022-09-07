// write your code here
const baseUrl = "http://localhost:3000";
// const imageCard = document.querySelector('.image-card')

const init = () => {
    console.log("we are");

    fetchDogData().catch((e) => console.log(e));
}

async function fetchDogData(){
    const imageResponse = await fetch(`${baseUrl}/images/1`);
    const data = await response.json()

    handleUpdateCard(data)
    // handleComments(data)

    // console.log(imageCard);

}

const handleUpdateCard = (data) => {
    imageCard.querySelector('#card-title').textContent = data.title
    imageCard.querySelector('#card-image').src = data.image
    imageCard.querySelector("#like-count").textContent = data.likes;


    
}

// const handleComments = (data)=> {
//     const comments = imageCard.querySelector("#comments-list");

//     console.log(data);
// }

document.addEventListener('DOMContentLoaded', init)