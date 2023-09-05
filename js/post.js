function posts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data));
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container');
    for (const post of posts) {

        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h4>Users-${post.userId}</h4>
            <h5>Post:${post.titel}</h5>
            <p>Post Description: ${post.body}</p>
            `;
        postsContainer.appendChild(postDiv);
    }
}

posts();