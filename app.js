const rootDiv = document.getElementById('root');
var client = new XMLHttpRequest();
client.open('GET', 'index.html');
client.onreadystatechange = function() {
  rootDiv.innerHTML = client.responseText;
}
client.send();

function onNavigate(pathname) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', pathname);
  xhr.send();
  xhr.onload = function() {
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${xhr.statusText}`);
    }
    else {
      alert(`Done, got ${xhr.response.length} bytes`);
    }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`); // no Content-Length
  }

};

xhr.onerror = function() {
  alert("Request failed");
};

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
