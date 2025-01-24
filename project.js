const firstBasket = document.querySelector(".basket-1 span");
const secondBasket = document.querySelector(".basket-2 span");
const leftarrow = document.querySelector(".left-arrow");
const rightarrow = document.querySelector(".right-arrow");

let totalApples = 10
let secondBasketApplecount = 0
let firstBasketApplecount = totalApples - secondBasketApplecount;




rightarrow.addEventListener("click", () => {
    if (firstBasketApplecount > 0) {
        firstBasketApplecount--;
        firstBasket.innerText = firstBasketApplecount;
        secondBasketApplecount++;
        secondBasket.innerText = secondBasketApplecount;
    }

});

leftarrow.addEventListener("click", () => {
    if (secondBasketApplecount > 0) {
        firstBasketApplecount++;
        firstBasket.innerText = firstBasketApplecount;
        secondBasketApplecount--;
        secondBasket.innerText = secondBasketApplecount;
    }

});