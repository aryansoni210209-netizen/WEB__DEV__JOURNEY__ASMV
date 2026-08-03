let mode = document.querySelector("button");
let body = document.querySelector("body");

let currMode = "light";

// mode.addEventListener("click" , () =>{
//     if(currMode === "light"){
//         body.style.backgroundColor = "black";
//         currMode = "dark";
//     }
//     else{
//         body.style.backgroundColor = "white"
//         currMode = "light";
//     }
// })

mode.addEventListener("click" , () =>{
    if(currMode === "light"){
        body.classList.add("dark");
        body.classList.remove("light");
        currMode = "dark";
    }
    else {
        body.classList.add("light");
        body.classList.remove("dark");
        currMode = "light";
    }
})