// .........Background Image Slider.............

let leftSlideBtn = document.getElementById('left-slide-btn');
let rightSlideBtn = document.getElementById('right-slide-btn');
let imageList = document.querySelectorAll('.bg-image');

let starter = 0;
let stopper = (imageList.length - 1) * 100;

//left button slide
leftSlideBtn.addEventListener("click", () => {
    if (starter < 0) {

        starter = starter + 100;
    }
    else {
        starter = starter - 100;
    }

    imageList.forEach(image => {
        image.style.transform = `translateX(${starter}%)`;
    })
})

//right button slide
rightSlideBtn.addEventListener("click", handleRightbtn);

function handleRightbtn() {
    if (starter > -stopper) {

        starter = starter - 100;
    }

    imageList.forEach(image => {
        image.style.transform = `translateX(${starter}%)`;
    })
}

// Automatic background image slide
function slideAutomatic() {

    if (starter > -stopper) {
        handleRightbtn();
    }
    else {
        starter = 100;
    }
}

setInterval(slideAutomatic, 4000);


/* .............Creating sidebar menu folder................. */

let sideMenuBtn = document.getElementById("side-menu-btn");
let menuSideContainer = document.getElementById("menu-side-container");

sideMenuBtn.addEventListener("click", () => {
    menuSideContainer.classList.add("show-menu-sidebar")
})

// menu cross button 
let menuCrossBtn = document.getElementById("menu-cross-btn");

menuCrossBtn.addEventListener("click", () => {
    menuSideContainer.classList.remove("show-menu-sidebar")
})


// .............Products Array of items slider first--Bikes..............

let productItemPrevBtn = document.getElementById("product-item-prev-btn");
let productItemNextBtn = document.getElementById("product-item-next-btn");
let itemListFirst = document.querySelector(".item-list-first");
let itemFirst = document.getElementsByClassName("item-first");

console.log(itemFirst.length);

let startitem = 0;
let stopItemFirst = itemFirst.length;


//common Previous Slide Function
function prevBtnItemSlide(x) {

    if (x == stopItemFirst) {
        if (startitem < 0) {
            startitem += 100;
        }

        itemListFirst.style.transform = `translate(${startitem}%)`;
    }

    else if (x == stopItemSecond) {
        if (startitem < 0) {
            startitem += 100;
        }

        itemListSecond.style.transform = `translate(${startitem}%)`;
    }

}

//Common Next Slide Function
let nextBtnItemSlide = (x) => {
    if (x == stopItemFirst) {

        if (startitem > -(x) * 21) {
            startitem -= 100;
        }

        itemListFirst.style.transform = `translate(${startitem}%)`;
    }

    else if (x == stopItemSecond) {

        if (startitem > -(x)*14) {
            startitem -= 100;
        }
        itemListSecond.style.transform = `translate(${startitem}%)`;
    }
}


productItemPrevBtn.addEventListener("click", ()=>{
    prevBtnItemSlide(stopItemFirst);
})

productItemNextBtn.addEventListener("click", () => {
    nextBtnItemSlide(stopItemFirst);
})


//   ............Products Array of items slider Second--HandCraft............

let producthandCraftPrevBtn = document.getElementById("product-handcraft-item-prev-btn");
let producthandCraftNextBtn = document.getElementById("product-handcraftitem-next-btn");
let itemListSecond = document.querySelector(".item-list-second");
let itemSecond = document.getElementsByClassName("item-second");

console.log(itemSecond.length);

let stopItemSecond = itemSecond.length;
startitem = 0;

producthandCraftPrevBtn.addEventListener("click", ()=>{
    prevBtnItemSlide(stopItemSecond);
});
producthandCraftNextBtn.addEventListener("click", () => {
    nextBtnItemSlide(stopItemSecond);
});


