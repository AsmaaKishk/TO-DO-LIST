
// if press on inpuss will add new task above
const input = document.querySelector("input")
const button = document.querySelector("button")
const container = document.getElementById("container")
const form = document.querySelector("form")

// container.style.border = "2px solid white"

// to add new tasks
form.addEventListener("submit", (eo) => {
eo.preventDefault()
const task = `
<div class="task">
<span class="icon-star-o icon" ></span>
<p class="task-text">${input.value} </p>
<div>
<span class="icon-trash-o icon"></span>

<span class="icon-angry icon"></span>
</div>
</div>

`;
container.innerHTML += task;

input.value = " "

})

// add icons to the container

container.addEventListener("click", (eo) => {
    if (eo.target.className == "icon-trash-o icon") {
        
eo.target.parentElement.parentElement.remove();
      
    } else if(eo.target.className == "icon-angry icon") {
eo.target.classList.add("dn")

const heart = ` <span class="icon-heart"></span>`

eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.add("finish");


// in case there are more than eo.target, the last one should be the one is resposible for (adding and changing) in HTML.
// add heart then hide it and replace it eith angry react
eo.target.parentElement.innerHTML += heart;}

else if(eo.target.className == "icon-heart") {
    eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.remove("finish");
    eo.target.classList.add("dn")

    const angryReact = `
    <span class="icon-angry icon"></span>
    `;

    eo.target.parentElement.innerHTML += angryReact;
}
// star
    else if (eo.target.className == "icon-star-o icon") {
        eo.target.classList.add("orange")
container.prepend(eo.target.parentElement)
      
    }

    else if (eo.target.className == "icon-star-o icon orange") {
    
        eo.target.classList.remove("orange")

    }
})



// the best way to do it is with switch/ case

switch (key) {
    case value:
        
        break;

    default:
        break;
}