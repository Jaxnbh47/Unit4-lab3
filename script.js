document.querySelector("form").addEventListener("submit",   function (event){
    event.preventDefault(); 

    let data = new FormData(document.querySelector("form"))
    let n = data.get("howmany")
    let coins = data.get("cointype")
    for (let i = 0; i < n; i++)  {
        document.querySelector("section").innerHTML += `<div class = "coinmaker ${coins}"></div>`;
    }
})


const box = document.querySelector("div");

box.addEventListener('click', function handleClick(event) {
  box.remove();
});