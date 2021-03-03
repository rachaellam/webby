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

window.onresize = resize();
