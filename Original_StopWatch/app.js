//var start = document.getElementById("btnStart");
//var n = new time();
//var star = new addEventListener.start();
setInterval(currTime, 1000);
setInterval(sec, 1000);
function currTime()
{
    const dateT = new Date();
    displayCurrentTime(dateT.toTimeString());
}
function displayCurrentTime(text)
{
    let d= document.getElementById("timeId");
    d.innerText = text;
}
function sec()
{
    var seconds = seconds+1;
    displaySeconds(seconds);
}
function displaySeconds(tex)
{
    var sec = document.getElementById("seconds-counter");
    sec.innerText = tex;
}
function stop()
{   
    var stop = document.getElementById("btnStop");
    seconds=null;
}
function reset()
{
    clearInterval(time);
}
stop.onclick =
reset = document.getElementById("btnReset");
/*
    
var sto = new addEventListener.stop();
var res = new addEventListener.reset();
*/
/*
var { useEffect } = require("react")
var { jsx } = require("react/jsx-runtime")
import { lazy, useActionState, useState } from "react";

console.timeStamp(toString());
console.timeLog("lblLabel".toString());
/*
lazy.useLayoutEffect.Promise
return new Promise((resolve, reject) => {
})
useEffect(time)
{
}
useState()
{
}
useActionState()
{
    
}
useState(time)
{
}
document.readyState()
*/
