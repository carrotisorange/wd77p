// promise = resolve, reject

// function printSomething(callback){
//     let result = 1 + 1;
//     if(result !== 2){
//         callback();
//     }else{
//         console.log('not equal');
//     }
// }

// printSomething(function(){
//     console.log('equal');
// });


// let promise = new Promise((resolve, reject) => {
//     let result = 1 + 1;

//     if(result === 2){
//        resolve('success');
//     }else{
//        reject('fail');
//     }
// });

// promise.then((message) => {
//     console.log(message);
// }).catch(message=>{
//     console.log(message);
// }).finally(message=>{
//     console.log(message);
// }); 

// function sendRequest(method, url, data){
//     let button = document.getElementById('getData');

    // let req = new XMLHttpRequest();

//     req.open(method, url);

//     button.addEventListener('click', function(){
//         let promise = new Promise((resolve, reject)=>{
//              if(req.status === 200 && req.readyState === 4){
//                 const res = JSON.parse(req.responseText);
//                 resolve(res);
//                 // console.log(res);
//             }else{
//                 reject('Something went wrong');
//             }
//         });

//         promise.then((message)=>{
//             console.log(message);
//         })
//         .catch((message)=>{
//             console.log(message);
//         });
//     });

//     req.send();
// }


function sendRequest(method, url){
    let button = document.getElementById('getData');

    let req = new XMLHttpRequest();

    req.open(method, url);

    button.addEventListener('click', function(){
        let promise = new Promise((resolve, reject)=>{
             if(req.status === 200 && req.readyState === 4){
                const res = JSON.parse(req.responseText);
                resolve(res);
                // console.log(res);
            }else{
                reject('Something went wrong');
            }
        });

        promise.then((message)=>{
            console.log(message);
        })
        .catch((message)=>{
            console.log(message);
        });
    });

    req.send();
}

// sendRequest('GET', 'https://reqres.in/api/users');

//get request
// axios.get('https://reqres.in/api/users')
//   .then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     // handle error
//     console.log(error);
// })
// .finally(function () {
//     // always executed
// });

//post request
let button = document.getElementById('postData');

button.addEventListener('click', function(){
    axios.post('https://reqres.in/api/users',{
        "name": "morpheus",
        "job": "leader"
        },{
            'content-type': 'application/json'
        }
        )
        .then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
});

