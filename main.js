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

alert("Web này anh chỉ tổng hợp được sương sương hoi ó, tại nhiều mốc anh không có nhớ với cũng không có ảnh :( À anh sắp xếp theo thời gian từ gần nhất đến xa nhất á, nên bé muốn xem từ ngày đầu thì kéo xuống dưới nhó:33 iu bé")


