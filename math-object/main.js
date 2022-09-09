// var a = document.getElementById("round");
// a.innerText=Math.round(3.8);

// var b = document.getElementById("ceil");
// b.innerText=Math.ceil(1.2);


// var c = document.getElementById("floor");
// c.innerText=Math.floor(3.8);


// var d = document.getElementById("abs");
// d.innerText=Math.abs(-4.7);


// var e = document.getElementById("sign");
// e.innerText=Math.sign(1);


// var f = document.getElementById("sqrt");
// f.innerText=Math.sqrt(64);


// var g = document.getElementById("random");
// g.innerText=Math.random();


// var h = document.getElementById("pow");
// h.innerText=Math.pow(5,2);

// var i = document.getElementById("max");
// i.innerText=Math.max(10,100);

// var j = document.getElementById("min");
// j.innerText=Math.min(200,500);


var x = document.getElementById("textbox");
var button= document.getElementById("btn");

function myfunction(){
    var r= Math.floor(Math.random()*256);
    var g =Math.floor(Math.random()*256);
    var b =Math.floor(Math.random()*256);

    document.body.style.backgroundColor="rgb("+r+","+g+","+b+")"
}
button.addEventListener("click",myfunction);


var x = Math.floor(Math.random()*100);
console.log(x);




















