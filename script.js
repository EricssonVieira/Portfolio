function openPage(x) {

  let indice = x
  let url = `./${indice}.html`

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          document.getElementById("project").innerHTML =
          this.responseText;
     }
  };
  xhttp.open("GET", url , true);
  xhttp.send();
}