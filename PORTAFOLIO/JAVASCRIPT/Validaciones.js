
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	asunto: /^[a-zA-Z0-9À-ÿ\s]{1,50}$/, 
}

const campos = {
	nombre: false,
  	correo: false,
	asunto: false,
	mensaje:false,

}


const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "asunto":
			validarCampo(expresiones.asunto, e.target, 'asunto');
		break;
	}
}




const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('contacto__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('contacto__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .contacto__input-error`).classList.remove('contacto__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('contacto__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('contacto__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .contacto__input-error`).classList.add('contacto__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
var textareas= document.querySelectorAll('#formulario textarea').value
const  validarCampoTextarea = (expresion, textarea, campo) => {
   	if(expresion.test(textareas.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('contacto__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('contacto__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .contacto__input-error`).classList.remove('contacto__input-error-activo');
		campos[campo] = true;
	} 
	else {
		document.getElementById(`grupo__${campo}`).classList.add('contacto__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('contacto__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .contacto__input-error`).classList.add('contacto__input-error-activo');
		campos[campo] = false;
	}
}

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.nombre && campos.correo && campos.asunto && campos.asunto) {
		formulario.reset();

		document.getElementById('contacto__mensaje-exito').classList.add('contacto__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('contacto__mensaje-exito').classList.remove('contacto__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.contacto__grupo-correcto').forEach((icono) => {
			icono.classList.remove('contacto__grupo-correcto');
		});
	} else {
		document.getElementById('contacto__mensaje').classList.add('contacto__mensaje activo');
	}
});