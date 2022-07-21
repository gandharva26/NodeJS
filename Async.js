const posts = [{title:'post1', body:'This is post1'}, {title:'post2',body:'this is post2'}]

function getPosts(){

    setTimeout(() => {
        posts.forEach((post) => console.log(post.title, post.body ))
    }, 1000)
    
}

// function createPost(post){
//     setTimeout((post)=>{
// posts.push(post)
//     }, 2000)
// }

// getPosts();
// createPost({title:'post3', body:'This is post3'})

//---------
// function createPost(post, callback){
//     setTimeout(()=>{ // set time out doesnt have a parameter
// posts.push(post)
// console.log(posts)
// callback(); // JS has to wait to call getPost() until post.push occurs 
//     }, 2000)
   
// }

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post)
           
            const error = false
            if(!error){
                resolve()
            }
            else{
                reject()
            }
            
                }, 2000)
    })
    
   
}

// createPost({title:'post3', body:'This is post3'}).then(getPosts) // Handling promises using then and catch dont make a call in .then


// Async await
async function init(){
    await createPost({title:'post3', body:'This is post3'}).then(getPosts) // dont make a call in .then

}
init()