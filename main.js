/* Funciones elementales */

function mostrar_formulario() {
  document.getElementById("formulario_cei").style.display = "block";

  currentStep = 1;

  document.getElementById("formulario_cei").style.display = "block";
  document.getElementById("step1").style.display = "block";
  document.getElementById("step2").style.display = "none";
  document.getElementById("step3").style.display = "none";
}


function cerrar_formulario() {
  document.getElementById("formulario_cei").style.display = "none";
}

function cerrar_informe() {
  document.getElementById("informe").style.display = "none";
  document.getElementById("formulario_cei").style.display = "none";  
  currentStep = 1;  
  limpiar_formulario(); 
  window.location.href = 'index.html';  
}

function limpiar_formulario() {
  document.getElementById("nombreApellido").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mensaje").value = ""; 
}

/* Pasos - Wizard*/
let currentStep = 1;

/* Pasos: siguiente */
function nextStep() {
  let currentStepElement = document.getElementById(`step${currentStep}`);
  currentStepElement.style.display = "none";
  currentStep++;

  if (currentStep <= 3) {
      let nextStepElement = document.getElementById(`step${currentStep}`);
      nextStepElement.style.display = "block";
  } else {    
      mostrar_informe();
  }
}

/* Pasos: atrás */
function prevStep() {
  if (currentStep > 1) {
      let currentStepElement = document.getElementById(`step${currentStep}`);
      currentStepElement.style.display = "none";
      currentStep--;

      let prevStepElement = document.getElementById(`step${currentStep}`);
      prevStepElement.style.display = "block";
  }
}

/* Resumen informe */
function mostrar_informe() {

  let nombreApellido = document.getElementById("nombre_apellido").value;
  let email = document.getElementById("email").value;
  let mensaje = document.getElementById("mensaje").value;

  document.getElementById("i_nombre_apellido").textContent = `Nombre y Apellido: ${nombreApellido}`;
  document.getElementById("i_Email").textContent = `Email: ${email}`;
  document.getElementById("i_Mensaje").textContent = `Mensaje: ${mensaje}`;

  document.getElementById("informe").style.display = "block";
}

/* Enviar a informe */
function submitForm() {
  nextStep();
}
