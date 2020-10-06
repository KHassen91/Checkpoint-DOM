let arr = ["./res/3 red.png", "./res/3 white.png", "./res/3 black.png"];
change = (x) => {
    document.getElementById('img').src = arr[x];
}

let btnAdd = document.getElementsByClassName("plus");
let btnSubstract = document.getElementsByClassName("minus");
let input = document.getElementsByClassName("qt");
let price = document.getElementsByClassName("price");
for (let i = 0; i < btnAdd.length; i++) {
    btnAdd[i].addEventListener("click", () => {
        input[i].value = parseInt(input[i].value) + 1;
        price[i].innerHTML = Number(price[i].innerHTML) + 38990;
        document.getElementById('tot').innerHTML = + document.getElementById('tot').innerHTML + 38990
    });


    btnSubstract[i].addEventListener("click", () => {
        input[i].value = parseInt(input[i].value) - 1;
        price[i].innerHTML = Number(price[i].innerHTML) - 38990
        document.getElementById('tot').innerHTML = + document.getElementById('tot').innerHTML - 38990


    });
}

let arr1 = ["./res/s red.png", "./res/s white.png", "./res/s black.png"];
changes = (x) => {
    document.getElementById('imgs').src = arr1[x];
}

let btnAdds = document.getElementsByClassName("pluss");
let btnSubstracts = document.getElementsByClassName("minuss");
let inputs = document.getElementsByClassName("qts");
let prices = document.getElementsByClassName("prices");
for (let i = 0; i < btnAdds.length; i++) {
    btnAdds[i].addEventListener("click", () => {
        inputs[i].value = parseInt(inputs[i].value) + 1;
        prices[i].innerHTML = Number(prices[i].innerHTML) + 74990
        document.getElementById('tot').innerHTML = + document.getElementById('tot').innerHTML + 74990

    });


    btnSubstracts[i].addEventListener("click", () => {
        inputs[i].value = parseInt(inputs[i].value) - 1;
        prices[i].innerHTML = Number(prices[i].innerHTML) - 74990
        document.getElementById('tot').innerHTML = + document.getElementById('tot').innerHTML - 74990

    });
}

let arr2 = ["./res/x red.png", "./res/x white.png", "./res/x black.png"];
changex = (x) => {
    document.getElementById('imgx').src = arr2[x];
}

let btnAddx = document.getElementsByClassName("plusx");
let btnSubstractx = document.getElementsByClassName("minusx");
let inputx = document.getElementsByClassName("qtx");
let pricex = document.getElementsByClassName("pricex");

for (let i = 0; i < btnAdds.length; i++) {
    btnAddx[i].addEventListener("click", () => {
        inputx[i].value = parseInt(inputx[i].value) + 1;
        pricex[i].innerHTML = Number(pricex[i].innerHTML) + 79990
        document.getElementById('tot').innerHTML = + document.getElementById('tot').innerHTML + 79990

    });


    btnSubstractx[i].addEventListener("click", () => {
        inputx[i].value = parseInt(inputx[i].value) - 1;
        pricex[i].innerHTML = Number(pricex[i].innerHTML) - 79990
        document.getElementById('tot').innerHTML = + document.getElementById('tot').innerHTML - 79990

    });
}

var heart = document.getElementsByClassName("fas");
let colors = ["#c74343", "white"];
let j=0;

for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener("click", function () {
        if (j >= colors.length ){j=0;}
        heart[i].style.color = colors[j];
        j++ ;
    })
}



