"use strict"

//ChangeWeb

let typeWeb = prompt(`Какой сайт вы хотите?\n\n1 - Визитка\n2 - Промо-сайты\n3 - Интернет - витрины\n\nВвод цифры от 1-3`, 0);

if (typeWeb > 3) alert("Значение не подходит")
if (typeWeb < 0) alert("Значение не подходит")

let designWeb = prompt(`Дизайн сайта?\n\n1 - Уникальный\n2 - Шаблонный\n3 - Ретро \n\nВвод цифры от 1-3`, 0);

if (designWeb > 3) alert("Значение не подходит")
if (designWeb < 0) alert("Значение не подходит")

let creatWeb = prompt(`Какая будет верстка?\n\n1 - Адаптивная\n2 - Резиновая\n3 - Фиксированная\n\nВвод цифры от 1-3`, 0);

if (creatWeb > 3) alert("Значение не подходит")
if (creatWeb < 0) alert("Значение не подходит")


//PriceWeb

let priceTypeOne = 0;
let priceTypeTwo = 0;
let priceTypeThree = 0;

let priceDesignOne = 0;
let priceDesignTwo = 0;
let priceDesignThree = 0;

let priceCreatOne = 0;
let priceCreatTwo = 0;
let priceCreatThree = 0;


if (typeWeb == 1) priceTypeOne = 50;
if (typeWeb == 2) priceTypeTwo = 60;
if (typeWeb == 3) priceTypeThree = 70;

if (designWeb == 1) priceDesignOne = 10;
if (designWeb == 2) priceDesignTwo = 20;
if (designWeb == 3) priceDesignThree = 30;

if (creatWeb == 1) priceCreatOne = 80;
if (creatWeb == 2) priceCreatTwo = 90;
if (creatWeb == 3) priceCreatThree = 100;

//CalculatorWeb

let collectionWeb = [
    [priceTypeOne, priceTypeTwo, priceTypeThree],
    [priceDesignOne, priceDesignTwo, priceDesignThree],
    [priceCreatOne, priceCreatTwo, priceCreatThree]
];

function takeResultType(Array = []) {

    for (let k = 0; k < collectionWeb["0"].length; k++) {

        let resultType = 0 + collectionWeb["0"][k];
        if (resultType > 0) return resultType;
    }
}

function takeResultDesign(Array = []) {

    for (let j = 0; j < collectionWeb["1"].length; j++) {

        let resultDesign = 0 + collectionWeb["1"][j];
        if (resultDesign > 0) return resultDesign;
    }
}

function takeResultCreat(Array = []) {
    for (let p = 0; p < collectionWeb["2"].length; p++) {

        let resultCreat = 0 + collectionWeb["2"][p];
        if (resultCreat > 0) return resultCreat;
    }
}

let takeOnePrice = takeResultType(collectionWeb);
let takeTwoPrice = takeResultDesign(collectionWeb);
let takeThreePrice = takeResultCreat(collectionWeb);

let result = takeOnePrice + takeTwoPrice + takeThreePrice;

alert("Цена сайта вам обойдется в: " + result + "руб");
