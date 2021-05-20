const tabItems = document.querySelectorAll('.tab-item');
const tabContent = document.querySelectorAll('.tab-content');
const togglers = document.querySelectorAll('.toggler');

function selectItem(e)
{
    let currentID = document.getElementById(`${this.id}-content`);
    let currentToggler = document.getElementById(`${this.id}-toggler`);
    if(currentID.classList.length == 1){
        removeShow(currentToggler);
        currentToggler.innerHTML = "x";
        currentID.classList.add("show");
    }
    else{
        currentToggler.innerHTML = "+";
        currentID.classList.remove("show")
    }
}

function removeShow(c)
{
    togglers.forEach(item => item.innerHTML = "+")
    tabContent.forEach(item => item.classList.remove("show"))
}

tabItems.forEach(item => item.addEventListener('click', selectItem));
