// write your code here
const baseUrl = "http://localhost:3000";
const imageCard = document.querySelector('.image-card')
const comments = imageCard.querySelector("#comments-list");

const init = () => {
    console.log("we are");
    
    fetchDogData().catch((e) => console.log(e));

    const commentForm = document.querySelector('form')
    commentForm.addEventListener('submit', (event)=>{
        event.preventDefault()

        let newComment = event.target.children[0].value
        let newCommentList = document.createElement('li')
        newCommentList.textContent = newComment
        comments.appendChild(newCommentList);
        event.target.children[0].value = ''
    })
}

document.addEventListener('DOMContentLoaded', init)


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
    
    // clear child nodes
    comments.innerHTML = '';

    data.forEach(comment => {
        let listElement = document.createElement('li');
        listElement.textContent= comment.content
        comments.appendChild(listElement)
    })
}
i = 0;
const handleLikes = () => {
    let likes = imageCard.querySelector("#like-count").textContent;
    let counter = parseInt(likes)+1
    imageCard.querySelector("#like-count").textContent = counter;
  
}

const handleAddComments = (event) => {
    event.preventDefault()

    let newComment = 
    console.log('abc', newComment);
}

