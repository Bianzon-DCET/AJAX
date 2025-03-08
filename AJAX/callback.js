const posts = [
   {title: 'Hello', body: 'This is Post One'},
   {title: 'Who Are You?', body: 'This is Post Two'}
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) =>{
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output
    }, 4000)

}
function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 5500)
}

getPosts()
createPost({title: 'Jenz?', body: 'This is Post Three'}, getPosts);

getPosts()
createPost({title: 'U stupid', body: 'This is Post Three'}, getPosts);