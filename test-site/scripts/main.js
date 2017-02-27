
var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Just for Test';

//document.querySelector('html').onclick = function () {
//    alert('This is query selector function feature');
//};

var myImage = document.querySelector('img');
myImage.onclick = function () {
    var srcAttr = myImage.getAttribute('src');
    if (srcAttr === 'images/git.png') {
        myImage.setAttribute('src', 'images/wallpaper.jpg');
    } else {
        myImage.setAttribute('src', 'images/git.png');
    }
};

var myButton = document.querySelector('button');

myButton.onclick = setUserName;

function setUserName() {
    var myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Your name is ' + myName;
}

if(!localStorage.getItem('name')) {
    alert('Name is not in localStorage');
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Initialized name is ' + storedName;
}
console.log(localStorage);