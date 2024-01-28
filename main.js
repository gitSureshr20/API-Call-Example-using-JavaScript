
const listContainer = document.querySelector(".list-container");

function fetchUsingXHR(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/posts");
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload=()=>{
        if(xhr.status===200){
            displayResults(xhr.response);
            // console.log(xhr.response)
        }
        else{
            console.log('Some Error occured');
        }
    }
}

function fetchUsingFetchMethod(){
            const fetchRequest = fetch(
              "https://jsonplaceholder.typicode.com/posts",
              {
                method: "GET",
              }
            );
            fetchRequest
              .then((response) => response.json())
              .then((result) => displayResults(result))
              .catch((e) => console.log(e));
            // const fetchRequest = fetch(
            //   "https://jsonplaceholder.typicode.com/posts",
            //   {
            //     method: "GET",
            //   }
            // );

            // fetchRequest
            //   .then((response) => response.json())
            //   .then((result) => displayResults(result))
            //   .catch((e) => console.log(e));
            
}

function displayResults(posts){
    listContainer.innerHTML= posts.map(
        item=>(
            `<div class="postItem">
            <h3>${item.title}</h3>
            <p>${item.body}</p>
            </div>`
        )
       
    ).join(" ")
}

// fetchUsingXHR()
fetchUsingFetchMethod()