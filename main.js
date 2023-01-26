let leftItems = document.querySelectorAll(".left .items")
let rigthItems = document.querySelectorAll(".rigth .items")


document.addEventListener('readystatechange', event => { 
for (let i = 0; i < leftItems.length; ++i) {
    if (leftItems[i].childNodes.length === 0) {
        leftItems[i].style.height = rigthItems[i].offsetHeight+"px"
    }
}

for (let i = 0; i < rigthItems.length; ++i) {
    if (rigthItems[i].childNodes.length === 0) {
        rigthItems[i].style.height = leftItems[i].offsetHeight+"px"
    }
}

let ps = rigthItems.length - 3
document.getElementById("big").style.top = rigthItems[ps].offsetTop+"px"
});

