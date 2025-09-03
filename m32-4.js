

const loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(r => r.json())
        .then(d => {
            //console.log(d);
            displayPost(d);
        });
};


const displayPost = (posts) => {
    // get post container from HTML  
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = "";

    posts.forEach(element => {
        // create post or create element
        const divPostCard = document.createElement('div');
        divPostCard.innerHTML = `
        <div class="post-card">
            <h2>${element.title}</h2>
            <p>${element.body}</p>
            <h5>${element.id}</h5>
        </div>        
        `;
        //console.log(element.id);        
        // display post in post container or append element in parent
        postContainer.appendChild(divPostCard);
    });
};
