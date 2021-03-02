import React from 'react'
import { graphql, Link } from 'gatsby'
import { withAuthenticator, Connect } from 'aws-amplify-react'
import Amplify, { graphqlOperation } from 'aws-amplify'
import { listPostLikes } from '../graphql/queries'
import awsConfig from './aws-exports.js'

Amplify.configure(awsConfig)

const rootDiv = document.getElementById('root');
var client = new XMLHttpRequest();
client.open('GET', 'webby.html');
client.onreadystatechange = function() {
  rootDiv.innerHTML = client.responseText;
}
client.send();

// const onNavigate = (pathname) => {
//   document.body.scrollTop = document.documentElement.scrollTop = 0;
//   window.history.pushState(
//     {},
//     pathname,
//     window.location.origin + pathname
//   )
//   var client = new XMLHttpRequest();
//   client.open('GET', pathname + '.html');
//   client.onreadystatechange = function() {
//     rootDiv.innerHTML = client.responseText;
//   }
//   client.send();
// }

function onNavigate(pathname) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("container").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", pathname, true);
  xhttp.send();
}


window.onpopstate = () => {
    var client = new XMLHttpRequest();
    client.open('GET', 'home.html');
    client.onreadystatechange = function() {
      rootDiv.innerHTML = client.responseText;
    }
    client.send();
}

function hideNav() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    x.style.transition = "display 2s";
  }
}

function resize() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
}

window.onresize = resize;



//magnifier
function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "magnifier-glass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /* Set the position of the magnifier glass: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

function onlyUX() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    var x = document.getElementsByClassName("container");
    var a = document.getElementById("ux");
    var b = document.getElementById("code");
    var c = document.getElementById("writing");
    var d = document.getElementById("art");
    a.style.color = "white";
    b.style.color = "white";
    c.style.color = "white";
    d.style.color = "white";
    a.style.fontWeight = "100";
    a.style.fontWeight = "900";
    a.style.color = "blue";
    a.style.backgroundColor = "black";
    b.style.backgroundColor = "black";
    c.style.backgroundColor = "black";
    d.style.backgroundColor = "black";
    a.style.backgroundColor = "white";
    b.style.fontWeight = "100";
    c.style.fontWeight = "100";
    d.style.fontWeight = "100";
    for (var i = 0; i < x.length; i++) {
      if (x[i].matches('.UX') == false) {
        x[i].style.display = "none";
      } else {
        x[i].style.display = "block";
      }
    }
}

function onlyCode() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    var x = document.getElementsByClassName("container");
    var a = document.getElementById("ux");
    var b = document.getElementById("code");
    var c = document.getElementById("writing");
    var d = document.getElementById("art");
    a.style.color = "white";
    b.style.color = "white";
    c.style.color = "white";
    d.style.color = "white";
    a.style.fontWeight = "100";
    a.style.fontWeight = "100";
    b.style.fontWeight = "900";
    b.style.color = "blue";
    a.style.backgroundColor = "black";
    b.style.backgroundColor = "black";
    c.style.backgroundColor = "black";
    d.style.backgroundColor = "black";
    b.style.backgroundColor = "white";
    c.style.fontWeight = "100";
    d.style.fontWeight = "100";
    for (var i = 0; i < x.length; i++) {
      if (x[i].matches('.Code') == false) {
        x[i].style.display = "none";
      } else {
          x[i].style.display = "block";
      }
    }
}

function onlyWriting() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    var x = document.getElementsByClassName("container");
    var a = document.getElementById("ux");
    var b = document.getElementById("code");
    var c = document.getElementById("writing");
    var d = document.getElementById("art");
    a.style.color = "white";
    b.style.color = "white";
    c.style.color = "white";
    d.style.color = "white";
    a.style.fontWeight = "100";
    a.style.fontWeight = "100";
    b.style.fontWeight = "100";
    c.style.fontWeight = "900";
    c.style.color = "blue";
    a.style.backgroundColor = "black";
    b.style.backgroundColor = "black";
    c.style.backgroundColor = "black";
    d.style.backgroundColor = "black";
    c.style.backgroundColor = "white";
    d.style.fontWeight = "100";
    for (var i = 0; i < x.length; i++) {
      if (x[i].matches('.Writing') == false) {
        x[i].style.display = "none";
      } else {
          x[i].style.display = "block";
      }
    }
}

function onlyArt() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    var x = document.getElementsByClassName("container");
    var a = document.getElementById("ux");
    var b = document.getElementById("code");
    var c = document.getElementById("writing");
    var d = document.getElementById("art");
    a.style.color = "white";
    b.style.color = "white";
    c.style.color = "white";
    d.style.color = "white";
    a.style.fontWeight = "100";
    b.style.fontWeight = "100";
    c.style.fontWeight = "100";
    d.style.fontWeight = "900";
    d.style.color = "blue";
    a.style.backgroundColor = "black";
    b.style.backgroundColor = "black";
    c.style.backgroundColor = "black";
    d.style.backgroundColor = "black";
    d.style.backgroundColor = "white";
    for (var i = 0; i < x.length; i++) {
      if (x[i].matches('.Art') == false) {
        x[i].style.display = "none";
      } else {
          x[i].style.display = "block";
      }
    }
}

function changeShape(type) {
    if (type == 'student') {
        var x = document.getElementById("shape");
        x.style.backgroundImage = "linear-gradient(45deg, #F8333C 0%, #FCAB10 100%)";
    } else if (type == 'developer') {
        var x = document.getElementById("shape");
        x.style.backgroundImage = "linear-gradient(45deg, #38AECC 0%, #35A7FF 100%)";
    } else if (type == 'designer') {
        var x = document.getElementById("shape");
        x.style.backgroundImage = "linear-gradient(45deg, #0595e5 0%, #0595e5 100%)";
    }
}

function returnShape() {
    var x = document.getElementById("shape");
    x.style.backgroundImage = "none";
    x.style.backgroundImage = "linear-gradient(45deg, #81F499 0%, #6DD3CE 100%)";
}
