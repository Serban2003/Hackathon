function refreshPage() {
    sessionStorage.reloadAfterPageLoad = true;
    sessionStorage.sem = 1;
    window.location.reload();
}

if (sessionStorage.reloadAfterPageLoad && sessionStorage.sem == 1) {
    document.getElementById("alert").classList.toggle("showAlert");
    sessionStorage.reloadAfterPageLoad = false;
}
sessionStorage.sem = 0;
/*Riddle*/
function actDiv8()
{
    document.getElementById("panel_prim").classList.toggle("notshow");
    document.getElementById("panel_riddle").classList.toggle("showCode");
    var text = document.getElementById('riddle_input');
    text.value = '';
}
function clickRiddle()
{
    if (document.getElementById('riddle_input').value=== "javascript") {
    var text = document.getElementById('number');
    text.value += '8';
    setTimeout(function () {
        actDiv8();
    }, 200);
}

}
/*Collect the dots*/
$(document).ready(function(){
    $(".dot").click(function() {

        $(this).addClass("clicked");

        if ($(".dot").length == $(".clicked").length)
             finish6();

    });
});
function actDiv6() {
    document.getElementById("collect_dots").classList.toggle("showdots");
}

function removeDiv1() {
    document.getElementById("dot1").classList.toggle("remove");
    $( "#dot1" ).removeClass( "clicked" );

}

function removeDiv2() {
    document.getElementById("dot2").classList.toggle("remove");
    $( "#dot2" ).removeClass( "clicked" );

}

function removeDiv3() {
    document.getElementById("dot3").classList.toggle("remove");
    $( "#dot3" ).removeClass( "clicked" );
}

function removeDiv4() {
    document.getElementById("dot4").classList.toggle("remove");
    $( "#dot4" ).removeClass( "clicked" );
}

function removeDiv5() {
    document.getElementById("dot5").classList.toggle("remove");
    $( "#dot5" ).removeClass( "clicked" );
}

function removeDiv6() {
    document.getElementById("dot6").classList.toggle("remove");
    $( "#dot6" ).removeClass( "clicked" );
}


function finish6() {
    removeDiv1();
    removeDiv2();
    removeDiv3();
    removeDiv4();
    removeDiv5();
    removeDiv6();

    actDiv6();
    var text = document.getElementById('number');
    text.value += '6';
}
/*Code*/
function actDiv7() {
    document.getElementById("panel_prim").classList.toggle("notshow");
    document.getElementById("panel_code").classList.toggle("showCode");
    var text = document.getElementById('code_input');
    text.value = '';
}

function clickCode() {
    if (document.querySelector("input[type='text']").value === "1KuM9vV") {
        var text = document.getElementById('number');
        text.value += '7';
        setTimeout(function () {
            actDiv7();
        }, 200);

    }
}

/*Slider*/
function actDiv5() {
    document.getElementById("sliderdiv").classList.toggle("showSlider");
    setStyleOn('opacity', 'trg', '100');
    document.getElementById('range1').value = 0;
    document.getElementById('range2').value = 0;
    document.getElementById('range3').value = 0;
    setStyleOn('webkitTransform', 'hand1', 'rotate(' + range1.value + 'deg');
    setStyleOn('webkitTransform', 'hand2', 'rotate(' + range2.value + 'deg');
    setStyleOn('webkitTransform', 'hand3', 'rotate(' + range3.value + 'deg');
    output1.innerHTML = slider1.value;
    output2.innerHTML = slider2.value;
    output3.innerHTML = slider3.value;
}
var slider1 = document.getElementById("range1");
var slider2 = document.getElementById("range2");
var slider3 = document.getElementById("range3");
var output1 = document.getElementById("val1");
var output2 = document.getElementById("val2");
var output3 = document.getElementById("val3");
output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;

slider1.oninput = function () {
    output1.innerHTML = this.value;
    setStyleOn('webkitTransform', 'hand1', 'rotate(' + this.value + 'deg');
}

slider2.oninput = function () {
    output2.innerHTML = this.value;
    setStyleOn('webkitTransform', 'hand2', 'rotate(' + this.value + 'deg');
}

slider3.oninput = function () {
    output3.innerHTML = this.value;
    setStyleOn('webkitTransform', 'hand3', 'rotate(' + this.value + 'deg');

}

function setStyleOn(rule, targetId, value) {
    x = document.getElementById(targetId);
    x.style[rule] = value;
}

function collision10($trg, $finger) {
    var x1s = $trg.offset().left;
    var y1s = $trg.offset().top;
    var h1s = $trg.outerHeight(true);
    var w1s = $trg.outerWidth(true);
    var b1s = y1s + h1s;
    var r1s = x1s + w1s;
    var x2s = $finger.offset().left;
    var y2s = $finger.offset().top;
    var h2s = $finger.outerHeight(true);
    var w2s = $finger.outerWidth(true);
    var b2s = y2s + h2s;
    var r2s = x2s + w2s;

    if (b1s < y2s || y1s > b2s || r1s < x2s || x1s > r2s) return false;
    return finish5();
}
window.setInterval(function () {
    $('#result').text(collision10($('#trg'), $('#finger')));
}, 200);

function finish5() {
    actDiv5();
    setStyleOn('opacity', 'trg', '0');

    var text = document.getElementById('number');
    text.value += '5';
}
/*Trivia*/
function actDiv3() {
    document.getElementById("panel_prim").classList.toggle("notshow");
    document.getElementById("trivia").classList.toggle("showTrivia");
    document.getElementById("q1").classList.toggle("showQuestion");
}

function submitChoice() {
    if (document.getElementById('opt1').checked) {
        rate_value = document.getElementById('opt1').value;
    }
    if (document.getElementById('opt2').checked) {
        rate_value = document.getElementById('opt2').value;
    }
    if (document.getElementById('opt3').checked) {
        rate_value = document.getElementById('opt3').value;
    }
    if (document.getElementById('opt4').checked) {
        rate_value = document.getElementById('opt4').value;
    }

    if (rate_value == "true") {
        document.getElementById("q1").classList.toggle("showQuestion");
        document.getElementById("q2").classList.toggle("showQuestion");
        document.getElementById("rightChoice").classList.toggle("showRight");
        setTimeout(function () {
            document.getElementById("rightChoice").classList.toggle("showRight");
        }, 2500);

    }
    if (rate_value == "false") {
        document.getElementById("meme").classList.toggle("showmeme");
        document.getElementById("wrongChoice").classList.toggle("showWrong");

        setTimeout(function () {
            document.getElementById("meme").classList.toggle("showmeme");
            document.getElementById("wrongChoice").classList.toggle("showWrong");
        }, 5000);

    }
}

function submitChoice2() {
    if (document.getElementById('opt1_2').checked) {
        rate_value = document.getElementById('opt1_2').value;
    }
    if (document.getElementById('opt2_2').checked) {
        rate_value = document.getElementById('opt2_2').value;
    }
    if (document.getElementById('opt3_2').checked) {
        rate_value = document.getElementById('opt3_2').value;
    }
    if (document.getElementById('opt4_2').checked) {
        rate_value = document.getElementById('opt4_2').value;
    }

    if (rate_value == "true") {
        document.getElementById("q2").classList.toggle("showQuestion");
        document.getElementById("trivia").classList.toggle("showTrivia");
        document.getElementById("rightChoice").classList.toggle("showRight");
        document.getElementById("panel_prim").classList.toggle("notshow");
        setTimeout(function () {
            document.getElementById("rightChoice").classList.toggle("showRight");
        }, 2500);
        var text = document.getElementById('number');
        text.value += '3';

    }
    if (rate_value == "false") {
        document.getElementById("meme").classList.toggle("showmeme");
        document.getElementById("wrongChoice").classList.toggle("showWrong");
        setTimeout(function () {
            document.getElementById("meme").classList.toggle("showmeme");
            document.getElementById("wrongChoice").classList.toggle("showWrong");
        }, 5000);
    }

    if (rate_value == "false_special") {
        document.getElementById("meme2").classList.toggle("showmeme");
        document.getElementById("wrongChoice").classList.toggle("showWrong");
        setTimeout(function () {
            document.getElementById("meme2").classList.toggle("showmeme");
            document.getElementById("wrongChoice").classList.toggle("showWrong");
        }, 5000);
    }
}
/*Big Red Button*/
function actDiv9() {
    document.getElementById("panel_prim").classList.toggle("notshow");
    document.getElementById("bigred").classList.toggle("showRedButton");
}
var x = 0;

function countClicks() {
    if (x == 99) finishDiv9();
    x++;
    var count = x + " clicks";
    document.getElementById("coord").innerHTML = count;

}

function clearCount() {
    document.getElementById("coord").innerHTML = "0 clicks";
}

function finishDiv9() {
    clearCount();
    actDiv9();
    x = 0;
    var text = document.getElementById('number');
    text.value += '9';
}
/*Play Box*/
function actDiv2() {
    document.getElementById("playBox").classList.toggle("showPlayBox");
    document.getElementById("playBox2").classList.toggle("showPlayBox");

}

function fct1() {
    k = 1;
    if (k == 1 && j == 1) finish2();
}

function fct2() {
    j = 1;
    if (k == 1 && j == 1) finish2();
}

function finish2() {
    actDiv2();
    var text = document.getElementById('number');
    text.value += '0';
}
/*Button Lvl*/
sem = 0;

function actDiv0() {
    var text = document.getElementById('number');
    text.value += '2';
}

function actDiv1() {
    document.getElementById("switch").classList.toggle("showSwitch");

}

function clearRad2() {
    var ele = document.getElementsByName("switchtb");
    ele[0].checked = false;
}

function finish1() {
    var text = document.getElementById('number');
    text.value += '1';
    setTimeout(function () {
        actDiv1();
    }, 500);
    setTimeout(function () {
        clearRad2();
    }, 500);

}

/*Buttons*/
function actDiv4() {
    document.getElementById("btn1").classList.toggle("showbtn");
}

function showBtn2() {
    document.getElementById("btn2").classList.toggle("showbtn");
}

function showBtn3() {
    document.getElementById("btn3").classList.toggle("showbtn");
}

function showBtn4() {
    document.getElementById("btn4").classList.toggle("showbtn");
}

function finish4() {
    var text = document.getElementById('number');
    text.value += '4';
    actDiv4();
    showBtn2();
    showBtn3();
    showBtn4();
    clearRadios();
}

function clearRadios() {
    i = 0;
    var ele = document.getElementsByName("Choose1");
    ele[i].checked = false;
    var ele = document.getElementsByName("Choose2");
    ele[i].checked = false;
    var ele = document.getElementsByName("Choose3");
    ele[i].checked = false;
    var ele = document.getElementsByName("Choose4");
    ele[i].checked = false;
}