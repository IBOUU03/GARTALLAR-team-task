// let indicator = document.querySelector(".indicator").children;
let ul = document.querySelector(".items")
let indicator = document.querySelectorAll(".indicator>li");

let items = document.querySelectorAll(".items .item");

items.forEach((item) => {
    const name = item.querySelector("strong")
    const context = name.textContent
    item.setAttribute("data-category", context)
    if(item.classList === "add-new-item"){
        item.style.display = "none"
    }
})

indicator.forEach((el) => {
    el.addEventListener("click", function() {
        indicator.forEach((el) => {
            el.classList.remove("active")
        })
        this.classList.add("active")
        const displayItems = this.getAttribute("data-filter");

        items.forEach((el) => {
            el.style.transform = "scale(0)";
            setTimeout(() => {
                el.style.display = "none";
            }, 500)
            
            if(el.getAttribute("data-category") == displayItems || displayItems == "all"){
                el.style.transform = "scale(1)";
                setTimeout(() => {
                    el.style.display = "block";
                }, 500)
            }
        })
    })
})

const costEl = document.querySelectorAll(".cost-text")
const selectbox = document.querySelector("#select")
console.log(items);
console.log(items[0].childNodes[5].textContent)
console.log(ul.children)
selectbox.addEventListener("change", (e) => {
  if(selectbox.value === "LowToHigh") {
    Array.prototype.slice.call(ul.children)
            .map(function (x) { 
                console.log(x.classList)
                return ul.removeChild(x); 
            })
            .filter((el) => el.classList.length != 2)
            .sort(function (x, y) { 
                
                console.count(x.childNodes[5].textContent.split("$")[1])
                console.count(y.childNodes[5].textContent.split("$")[1]);
                return +x.childNodes[5].textContent.split("$")[1] -  +y.childNodes[5].textContent.split("$")[1]
               
            })
            .forEach(function (x) { ul.appendChild(x); });
  }
  if (selectbox.value === "HighToLow") {
    Array.prototype.slice.call(ul.children)
            .map(function (x) { 
                console.log(x.classList)
                return ul.removeChild(x); 
            })
            .filter((el) => el.classList.length != 2)
            .sort(function (x, y) { 
                
                console.count(x.childNodes[5].textContent.split("$")[1])
                console.count(y.childNodes[5].textContent.split("$")[1]);
                return +y.childNodes[5].textContent.split("$")[1] -  +x.childNodes[5].textContent.split("$")[1]
                
            })
            .forEach(function (x) { ul.appendChild(x); });
  } 
})



// 

// let items = document.querySelectorAll(".items .item");

deleteItem()

function deleteItem(){
    const deleteBtn = document.querySelectorAll(".delete-btn")
    deleteBtn.forEach(function(btn){
        btn.addEventListener("click",function(){
            const item =btn.parentNode ;
            const grandparent = item.parentNode
            const grandgrandparent = grandparent.parentNode
            grandgrandparent.classList.add("d-none")
        })

    })

}



