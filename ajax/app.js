

// function showText(){
//     // 1. Create an XMLHttpRequest object
//     let xhr = new XMLHttpRequest();
//     // console.log('Ready state is at ', xhr.readyState);
//     // 2. Define a callback function
//     xhr.open('GET', 'sample.txt', true);
//     // console.log('Ready state is at ', xhr.readyState);
//     // 3. Open the XMLHttpRequest object
//     xhr.onload = function (){
//         // console.log('Ready state is at ', xhr.readyState);
//         if(this.status === 200){
//             console.log(this.responseText);
//         }else{
//             error = new Error('Something went wrong!');
//             console.log(error);
//         }
//     }

//     //alternative
//     // xhr.onreadystatechange = function(){
//     //     console.log('Ready state is at ', xhr.readyState);
//     //     if(xhr.readyState === 4 && this.status === 200){
//     //         console.log(this.responseText);
//     //     } 
//     // }

//     // //optional
//     // xhr.onprogress = function(){
//     //     console.log('Ready state is at ', xhr.readyState);
//     //     console.log('Waiting for the response');
//     //     if(this.status === 200){
//     //         console.log(this.responseText);
//     //     }
//     // }

//     //optional
//     xhr.onerror = function(){
//         console.log('something went wrong!');
//     }
//     //4. Send a Request to a server
//     xhr.send();

// }

// function getPosts(){
//     let xhr = new XMLHttpRequest();

//     xhr.open('GET', posts);

//     xhr.onload = function(){
//         console.log(posts);
//     }

//     xhr.send();

// }

// function addPost(post){

//     let xhr = new XMLHttpRequest();

//     xhr.open('POST', posts);

//     posts.push(post)
   
//     xhr.send();

// }

// addPost({title: 'Post Three', body: 'This is post three.'})
// getPosts();

// let posts = [
//    {title: 'Post One', body: 'This is post one.'},
//    {title: 'Post Two', body: 'This is post two.'},
// ];

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         for (let post of posts) {
//             output += `${post.title}, `
//         }
//         console.log(output);
//     }, 1000);
// }

// // getPosts();

// function createPost(post, callback){
//     setTimeout(function(){
//         posts.push(post);
//         callback();
//     }, 1000);
// }

// //promises, wait async

// createPost({title: 'Post Three', body: 'This is post three.'}, getPosts);

let button = document.getElementById('button');


//get request all
const req = new XMLHttpRequest();

req.open('GET', 'https://api.openweathermap.org/data/3.0/onecall?appid=4f72ed53f28b888335f96054960dc6b3');

button.addEventListener('click', function(){
    if(req.status === 200 && req.readyState === 4){
        const res = JSON.parse(req.responseText);
        console.log(res);
    }else{
        throw new Error("Something went wrong!");
        // console.log("Something went wrong!");
    }
});

req.send();

//get request one
// const req = new XMLHttpRequest();

// req.open('GET', 'https://reqres.in/api/users/6');

// button.addEventListener('click', function(){
//     if(req.status === 200 && req.readyState === 4){
//         const res = JSON.parse(req.responseText);
//         console.log(res);
//     }else{
//         throw new Error("Something went wrong!");
//         // console.log("Something went wrong!");
//     }
// });

// req.send();


//POST request 
// const req = new XMLHttpRequest();

// req.open('POST', 'https://reqres.in/api/users/');

// req.setRequestHeader('Content-Type', 'application/json');

// button.addEventListener('click', function(){
//     if(req.status === 201 && req.readyState === 4){
//         const res = JSON.parse(req.responseText);
//         console.log(res);
//     }else{
//         throw new Error("Something went wrong!");
//         // console.log("Something went wrong!");
//     }
// });

// const newUser = {
//     "name": "morpheus",
//     "job": "leader"
// }

// req.send(JSON.stringify(newUser));

//PUT REQUEST
// const req = new XMLHttpRequest();

// req.open('PUT', 'https://reqres.in/api/users/2');

// req.setRequestHeader('Content-Type', 'application/json');

// button.addEventListener('click', function(){
//     if(req.status === 200 && req.readyState === 4){
//         const res = JSON.parse(req.responseText);
//         console.log(res);
//     }else{
//         throw new Error("Something went wrong!");
//         // console.log("Something went wrong!");
//     }
// });

// const newUser = {
//     "name": "morpheus",
//     "job": "zion resident"
// }

// req.send(JSON.stringify(newUser));

//DELETE REQUEST
// const req = new XMLHttpRequest();

// req.open('DELETE', 'https://reqres.in/api/users/2');

// button.addEventListener('click', function(){
//     console.log(req.status);
//     if(req.status === 204 && req.readyState === 4){
        
//         // const res = JSON.parse(req.responseText);
//         console.log('Data has been deleted!');
//     }else{
//         throw new Error("Something went wrong!");
//         // console.log("Something went wrong!");
//     }
// });

// req.send();






