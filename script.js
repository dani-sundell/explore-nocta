var parentElement = document.getElementById('navDropdown')

var homeLinkElement = document.getElementById('linkHome')
var introLinkElement = document.getElementById('linkIntro')
var originLinkElement = document.getElementById('linkOrigin')
var designLinkElement = document.getElementById('linkDesign')
var contentLinkElement = document.getElementById('linkContent')
var functionLinkElement = document.getElementById('linkFunction')
var testingLinkElement = document.getElementById('linkTesting')
var conclusionLinkElement = document.getElementById('linkConclusion')

let citationsShow = false



function scrollNavHome() {
    parentElement.scrollTop = homeLinkElement.offsetTop - 48;
}

function scrollNavIntro() {
    parentElement.scrollTop = introLinkElement.offsetTop - 48;
}

function scrollNavOrigin() {
    parentElement.scrollTop = originLinkElement.offsetTop - 48;
}

function scrollNavDesign() {
    parentElement.scrollTop = designLinkElement.offsetTop - 48;
}

function scrollNavContent() {
    parentElement.scrollTop = contentLinkElement.offsetTop - 48;
}

function scrollNavFunction() {
    parentElement.scrollTop = functionLinkElement.offsetTop - 48;
}

function scrollNavTesting() {
    parentElement.scrollTop = testingLinkElement.offsetTop - 48;
}

function scrollNavConclusion() {
    parentElement.scrollTop = conclusionLinkElement.offsetTop - 48;
}

function scrollNavConclusion() {
    parentElement.scrollTop = conclusionLinkElement.offsetTop - 48;
}

function showCitations() {
    console.log(citationsShow)
if ( citationsShow === false) {
    citationsShow = true;
    displayBlock();
    setTimeout(fadeIn, 500);
} else if (citationsShow === true) { 
    citationsShow = false;
    fadeOut();
    setTimeout(displayNone, 500);
}
}

function fadeIn() {
    document.getElementById('citations').style.opacity = 1;
}

function displayBlock() {
    document.getElementById('citations').style.display = 'block';
}


function fadeOut() {
    document.getElementById('citations').style.opacity = 0;
}

function displayNone() {
    document.getElementById('citations').style.display = 'none';
}