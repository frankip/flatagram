// write your code here
const baseUrl = "http://localhost:3000";
const imageCard = document.querySelector('.image-card')

const init = () => {
    console.log("we are");

    fetchDogData().catch((e) => console.log(e));
}

async function fetchDogData(){
    const imageResponse = await fetch(`${baseUrl}/images/1`);
    const commentsResponse = await fetch(`${baseUrl}/comments`)
    const data = await imageResponse.json();
    const comments = await commentsResponse.json();

    handleUpdateCard(data)
    handleComments(comments);

}

const handleUpdateCard = (data) => {
    imageCard.querySelector('#card-title').textContent = data.title
    imageCard.querySelector('#card-image').src = data.image
    imageCard.querySelector("#like-count").textContent = data.likes;


    
}

const handleComments = (data)=> {
    const comments = imageCard.querySelector("#comments-list");
    comments.innerHTML = '';

    data.forEach(comment => {
        let listElement = document.createElement('li');
        listElement.textContent= comment.content
        
        // console.log(comment.content);
        comments.appendChild(listElement)
    })
}

document.addEventListener('DOMContentLoaded', init)