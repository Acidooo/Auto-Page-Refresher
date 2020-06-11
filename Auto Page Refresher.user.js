// ==UserScript==
// @name         Auto Page Refresher
// @icon         https://github.com/Acidooo/Auto-Page-Refresher/raw/master/icon.png
// @namespace    https://github.com/Acidooo/Auto-Page-Refresher
// @version      2.0.2
// @description  refreshes pages after a certain time
// @author       Acido
// @include      *
// @updateURL    https://github.com/Acidooo/Auto-Page-Refresher/raw/master/Auto%20Page%20Refresher.user.js
// @downloadURL  https://github.com/Acidooo/Auto-Page-Refresher/raw/master/Auto%20Page%20Refresher.user.js
// ==/UserScript==

/*  You can add any url to the list   */ 
var reloadList = ["www.google.com",
                    "orlygift.com",
                    "github.com",
                    "mail.google.com"
                   ];


var seconds = 180; // You can change this value
var waitingTime = seconds*1000;
var currentPageUrl;

setTimeout(function () {

    currentPageUrl = window.location !== window.parent.location ? document.referrer : document.location.href;
    console.log("current url: " + currentPageUrl);

    if (reloadList.some(str => currentPageUrl.includes(str)))
    {
        location.reload();
        var min = seconds/60;
        console.log("Page Refreshed After " + min.toFixed(2) + " minutes");
    }

}, waitingTime);