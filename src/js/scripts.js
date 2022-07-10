"use strict"

//Calc in block find cost
//PriceWeb & Terms

let priceType = 0;
let priceDesign = 0;
let priceCreat = 0;

let termsType = 0;
let termsDesign = 0;
let termsCreat = 0;

//ChangeWeb

let typeWeb = $('select[name=selectedOne] option:selected').val();
let designWeb = $('select[name=selectedTwo] option:selected').val();
let creatWeb = $('select[name=selectedThree] option:selected').val();

$('.changeOne').click(function () {

    let typeWeb = $('select[name=selectedOne] option:selected').val();

    if (typeWeb == "standart") {
        priceType = 0;
        termsType = 0;
    }
    if (typeWeb == "cutaway") {
        priceType = 50;
        termsType = 6;
    }
    if (typeWeb == "promo__sites") {
        priceType = 60;
        termsType = 7;
    }
    if (typeWeb == "shop__window") {
        priceType = 70;
        termsType = 8;
    }

    //CalculatorWeb

    let resultPrice = priceType + priceDesign + priceCreat;
    let resultTerms = termsType + termsDesign + termsCreat;

    /*Conclusion*/

    $(".HowMuch").html(resultPrice + " Руб");
    $(".HowLong").html(resultTerms + " Дней");

})

$('.changeTwo').click(function () {
    let designWeb = $('select[name=selectedTwo] option:selected').val();

    if (designWeb == "standart") {
        priceDesign = 0;
        termsDesign = 0;
    }
    if (designWeb == "unique") {
        priceDesign = 50;
        termsDesign = 8;
    }
    if (designWeb == "formulaic") {
        priceDesign = 60;
        termsDesign = 7;
    }
    if (designWeb == "retro") {
        priceDesign = 70;
        termsDesign = 6;
    }

    //CalculatorWeb

    let resultPrice = priceType + priceDesign + priceCreat;
    let resultTerms = termsType + termsDesign + termsCreat;

    /*Conclusion*/

    $(".HowMuch").html(resultPrice + " Руб");
    $(".HowLong").html(resultTerms + " Дней");

})

$('.changeThree').click(function () {
    let creatWeb = $('select[name=selectedThree] option:selected').val();

    if (creatWeb == "standart") {
        priceCreat = 0;
        termsCreat = 0;
    }
    if (creatWeb == "adaptive") {
        priceCreat = 50;
        termsCreat = 40;
    }
    if (creatWeb == "rubber") {
        priceCreat = 60;
        termsCreat = 45;
    }
    if (creatWeb == "fixed") {
        priceCreat = 70;
        termsCreat = 200;
    }

    //CalculatorWeb

    let resultPrice = priceType + priceDesign + priceCreat;
    let resultTerms = termsType + termsDesign + termsCreat;

    /*Conclusion*/

    $(".HowMuch").html(resultPrice + " Руб");
    $(".HowLong").html(resultTerms + " Дней");
})

//run stat
const animItems = document.querySelectorAll('.chisl');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {

                //running numbers in block stat(start)
                //run__OneNum

                const timeOneNum = 1100; //ms
                const stepOneNum = 1;

                function runNumOne(num, elem) {

                    let l = document.querySelector('#' + elem);
                    let n = 0;
                    let t = Math.round(timeOneNum / (num / stepOneNum));
                    let interval = setInterval(() => {
                        n = n + stepOneNum;
                        if (n == num) clearInterval(interval);
                        l.innerHTML = n;
                    }, t)
                }

                runNumOne(120, 'outOneNum');


                //run__TwoNum

                const timeTwoNum = 1100; //ms
                const stepTwoNum = 40;

                function runNumTwo(num, elem) {

                    let l = document.querySelector('#' + elem);
                    let n = 0;
                    let t = Math.round(timeTwoNum / (num / stepTwoNum));
                    let interval = setInterval(() => {
                        n = n + stepTwoNum;
                        if (n == num) clearInterval(interval);
                        l.innerHTML = n;
                    }, t)
                }

                runNumTwo(4600, 'outTwoNum');

                //run__ThreeNum

                const timeThreeNum = 1100; //ms
                const stepThreeNum = 2;

                function runNumThree(num, elem) {

                    let l = document.querySelector('#' + elem);
                    let n = 0;
                    let t = Math.round(timeThreeNum / (num / stepThreeNum));
                    let interval = setInterval(() => {
                        n = n + stepThreeNum;
                        if (n == num) clearInterval(interval);
                        l.innerHTML = n;
                    }, t)
                }

                runNumThree(340, 'outThreeNum');

                //run__FourNum

                const timeFourNum = 1100; //ms
                const stepFourNum = 1;

                function runNumFour(num, elem) {

                    let l = document.querySelector('#' + elem);
                    let n = 0;
                    let t = Math.round(timeFourNum / (num / stepFourNum));
                    let interval = setInterval(() => {
                        n = n + stepFourNum;
                        if (n == num) clearInterval(interval);
                        l.innerHTML = n;
                    }, t)
                }
                runNumFour(23, 'outFourNum');

            }
        }
    }
}
//running numbers in block stat(end^)

function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset = window.pageYOffset || document.documentElement.scrollTop;
    return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
    }
}



//anchor links
//anchor links active or not active

$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();

    $(".section").each((i, el) => {
        if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
            $("nav .li").each((i, el) => {
                if ($(el).hasClass("active")) {
                    $(el).removeClass("active");
                }
            });

            $('nav li:eq(' + i + ')').find('.li').addClass('active');
        }
    });
});


//bad img -> good img


const animItemss = document.querySelectorAll('.image-link');

if (animItemss.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItemss.length; index++) {
            const animItem = animItemss[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {

                $('.onePic').attr("src", $('.onePic').attr("data-src"));
                $('.twoPic').attr("src", $('.twoPic').attr("data-src"));
                $('.threePic').attr("src", $('.threePic').attr("data-src"));
                $('.fourPic').attr("src", $('.fourPic').attr("data-src"));
                $('.fivePic').attr("src", $('.fivePic').attr("data-src"));
                $('.sixPic').attr("src", $('.sixPic').attr("data-src"));
                $('.sevenPic').attr("src", $('.sevenPic').attr("data-src"));
                $('.eightPic').attr("src", $('.eightPic').attr("data-src"));
                $('.ninePic').attr("src", $('.ninePic').attr("data-src"));
                $('.tenPic').attr("src", $('.tenPic').attr("data-src"));
                $('.elevenPic').attr("src", $('.elevenPic').attr("data-src"));
                $('.twelvePic').attr("src", $('.twelvePic').attr("data-src"));

            }
        }
    }
}

function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset = window.pageYOffset || document.documentElement.scrollTop;
    return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
    }
}


//slider for REVIEWs

$('#button1').click(function () {

    $('.slider__out').css("display", "block"),
        $('.slider__outTwo').css("display", "none"),
        $('.slider__outThree').css("display", "none")
});

$('#button2').click(function () {
    $('.slider__out').css("display", "none"),
        $('.slider__outTwo').css("display", "block"),
        $('.slider__outThree').css("display", "none")
});

$('#button3').click(function () {
    $('.slider__out').css("display", "none"),
        $('.slider__outTwo').css("display", "none"),
        $('.slider__outThree').css("display", "block")
});

$('#button1').click(function () {
    $('.slider__out').css("opasity", "0"),
        $('.slider__out').css("transform", " translate(0px, 100px)"),
        $('.slider__out').css("transition", "2s"),
        $('.slider__out').css("opasity", "1"),
        $('.slider__out').css("transform", "translate(0px, 0px)")
});

$('#button2').click(function () {
    $('.slider__outTwo').css("opasity", "0"),
        $('.slider__outTwo').css("transform", " translate(0px, 100px)"),
        $('.slider__outTwo').css("transition", "2s"),
        $('.slider__outTwo').css("opasity", "1"),
        $('.slider__outTwo').css("transform", "translate(0px, 0px)")
})

$('#button3').click(function () {
    $('.slider__outThree').css("opasity", "0"),
        $('.slider__outThree').css("transform", " translate(0px, 100px)"),
        $('.slider__outThree').css("transition", "2s"),
        $('.slider__outThree').css("opasity", "1"),
        $('.slider__outThree').css("transform", "translate(0px, 0px)")

});

//стрелочки

$('.rightSlider').click(function () {
    $('.slider__out').css("display", "none"),
        $('.slider__outTwo').css("display", "block"),
        $('.slider__outThree').css("display", "none")
    $('#button2').trigger('click');
});

$('.rightSliderTwo').click(function () {
    $('.slider__out').css("display", "none"),
        $('.slider__outTwo').css("display", "none"),
        $('.slider__outThree').css("display", "block")
    $('#button3').trigger('click');

});

$('.rightSliderThree').click(function () {
    $('.slider__out').css("display", "block"),
        $('.slider__outTwo').css("display", "none"),
        $('.slider__outThree').css("display", "none")
    $('#button1').trigger('click');

});

$('.leftSlider').click(function () {
    $('.slider__out').css("display", "none"),
        $('.slider__outTwo').css("display", "none"),
        $('.slider__outThree').css("display", "block")
    $('#button3').trigger('click');
});

$('.leftSliderTwo').click(function () {
    $('.slider__out').css("display", "block"),
        $('.slider__outTwo').css("display", "none"),
        $('.slider__outThree').css("display", "none")
    $('#button1').trigger('click');
});

$('.leftSliderThree').click(function () {
    $('.slider__out').css("display", "none"),
        $('.slider__outTwo').css("display", "block"),
        $('.slider__outThree').css("display", "none")
    $('#button2').trigger('click');
});
//modal

$(document).ready(function () {
    $('.image-link').magnificPopup({
        type: 'image'
    });
});

setTimeout(function () {
    $('.invisib__button').trigger('click');
}, 20000);
