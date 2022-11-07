
document.querySelector("form").addEventListener("submit",   function (event){
    event.preventDefault(); 

    let data = new FormData(document.querySelector("form"))
    let n = data.get("howmany")//by name 
    let coins = data.get("cointype") //by name
    for (let i = 0; i < n; i++)  {
        document.querySelector("container").innerHTML += `<div class = "coinplus ${coins}"></div>`;
    }
})

document.querySelector("#deletecoin").addEventListener('click', function coins(event) {
        event.target.remove();
      });
