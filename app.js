const inputBox = document.getElementById("inputbox");
const listcont = document.getElementById("listcont");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ' ';
    save();
}

listcont.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();
    }
}, false);


function save(){
    localStorage.setItem("data" , listcont.innerHTML);
}

function show(){
    listcont.innerHTML = localStorage.getItem('data');
}
show();