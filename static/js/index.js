
import fetch from 'node-fetch';

document.getElementById('boton').addEventListener('click', function(event) {
  event.preventDefault();

  var nombre = document.getElementsByName('nombre')[0].value;
  var empresa = document.getElementsByName('empresa')[0].value;
  var cargo = document.getElementsByName('cargo')[0].value;
  var rubro = document.getElementsByName('rubro')[0].value;
  var email = document.getElementsByName('email')[0].value;
  var telefono = document.getElementsByName('telefono')[0].value;
  var mensaje = document.getElementsByName('mensaje')[0].value;

  var data = {
      nombre: nombre,
      empresa: empresa,
      cargo: cargo,
      rubro: rubro,
      email: email,
      telefono: telefono,
      mensaje: mensaje
  };

  fetch('/send-email', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
      console.log('Success:', data);
  })
  .catch((error) => {
      console.error('Error:', error);
  });
});

document.querySelector('form').addEventListener('submit', function(e) {
    var isValid = true;
    var inputs = this.querySelectorAll('input[required]');

    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            isValid = false;
            alert('Por favor, rellene el campo: ' + inputs[i].name);
            break;
        }
    }

    if (!isValid) {
        e.preventDefault(); 
    }
});

document.getElementById('contacto').addEventListener('submit', function(event) {
  
    event.preventDefault();

    document.getElementById('thankYouMessage').style.display = 'block';
});





document.getElementById('boton2').addEventListener('click', function(event) {
    event.preventDefault();
  
    var email = document.getElementsByName('email')[0].value;
    var comment = document.getElementsByName('comment')[0].value; 
    var data = {
        email: email,
        comment: "suscripcion a newsletter"
    };
  
    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

document.querySelector('form[action="subscribirse"]').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por suscribirte a nuestro newsletter!');
    location.reload();
});

var x = document.getElementById("login");
var y = document.getElementById("registrar");
var z = document.getElementById("elegir");

function login(){
    x.style.left = "50px";
    y.style.left = "400px";
    z.style.left = "0px";
}

function registrar(){
    x.style.left = "-400px";
    y.style.left = "-50px";
    z.style.left = "120px";
}

// JavaScript: Ajustar el tamaño del <ul> al de la imagen
window.onload = function() {
    var logoWidth = document.querySelector('.logo').offsetWidth; // Obtener el ancho de la imagen
    var servicesList = document.querySelector('.services-list'); // Obtener el <ul>
    servicesList.style.width = logoWidth + 'px'; // Ajustar el ancho del <ul> al de la imagen
};

document.addEventListener('DOMContentLoaded', function() {
    fetch('contacto.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('contacto-container').innerHTML = html;
        })
        .catch(error => {
            console.warn('Error al cargar la sección de contacto:', error);
        });
});