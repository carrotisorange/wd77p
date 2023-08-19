let button = document.getElementById('button');

button.addEventListener('click', showText);

function showText(){
    // 1. Create an XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    console.log('Ready state is at ', xhr.readyState);
    // 2. Define a callback function
    xhr.open('GET', 'sample.txt', true);
    console.log('Ready state is at ', xhr.readyState);
    //3. Open the XMLHttpRequest object
    // xhr.onload = function (){
    //     console.log('Ready state is at ', xhr.readyState);
    //     if(this.status === 200){
    //         console.log(this.responseText);
    //     }
    // }

    //alternative
    // xhr.onreadystatechange = function(){
    //     console.log('Ready state is at ', xhr.readyState);
    //     if(xhr.readyState === 4 && this.status === 200){
    //         console.log(this.responseText);
    //     } 
    // }

    //optional
    // xhr.onprogress = function(){
    //     console.log('Ready state is at ', xhr.readyState);
    //     console.log('Waiting for the response');
    //     if(this.status === 200){
    //         console.log(this.responseText);
    //     }
    // }
    //4. Send a Request to a server
    xhr.send();

}

