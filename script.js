

function openPage(x) {

  let indice = x
  let url = `./page/${indice}.html`

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

voltarTopo = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

atualizar = () => {
   location.reload();

}

function mostrarImagens() {
  // Seleciona o elemento <div> onde as imagens serão adicionadas
  const catalogo = document.querySelector(".catalogo");

  catalogo.classList.toggle("active");
}


let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  const min = document.getElementById("container_min")
  const skills = document.getElementById("skills")


  if (currentScrollPos >= 150) {
    console.log(currentScrollPos)
    min.style.display = 'block'
    min.style.position = "fixed"
    min.style.top = 0
    
    skills.style.position = "fixed"
    skills.style.top = "50px"
    skills.style.left = 0
    
    
    setTimeout(function() {
      min.style.transition = 'opacity 0.5s ease-out';
      min.style.opacity = '1'
    }, 200);
    
  } else {
    min.style.display = 'none'
    skills.style.position = "static"
  }
  prevScrollpos = currentScrollPos;
}
