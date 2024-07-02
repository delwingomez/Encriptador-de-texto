const e = 'enter';
const i = 'imes';
const a = 'ai';
const o = 'ober';
const u = 'ufat';

// Variable para contener el texto a encriptar
let textoIngresado = '';

let textoEncriptado = '';

let textoDesencriptado = '';

let boton = document.getElementById('boton_desencriptar');

function validarEntrada(textarea) {
    // Remover caracteres especiales y convertir a minúscula
    const valorAntiguo = textarea.value;
    textarea.value = textarea.value.replace(/[^a-z]/g, '').toLowerCase();
    // Validamos si el usuario ingreso un caracter especial
    if (valorAntiguo !== textarea.value) {
        mostrarMensajeAdvertencia();
    } else {
        textoIngresado = textarea.value;
    }
}

// Se muestra mensaje de advertencia con delay de 2 segundos
function mostrarMensajeAdvertencia() {
    const mensaje = document.getElementById('mensajeAdvertencia');
    mensaje.style.display = 'block';
    setTimeout(() => {
        mensaje.style.display = 'none';
    }, 2000);
}

// Se limpia la caja de texto para escribir el primer mensaje
function limpiarTextarea(textarea) {
    textarea.value = '';
}

function encriptar() {
    let textoEncriptadoArray = [];

    for (let index = 0; index < textoIngresado.length; index++) {
        let letra = textoIngresado[index];
        switch (letra) {
            case 'e':
                textoEncriptadoArray.push(e);
                break;
            case 'i':
                textoEncriptadoArray.push(i);
                break;
            case 'a':
                textoEncriptadoArray.push(a);
                break;
            case 'o':
                textoEncriptadoArray.push(o);
                break;
            case 'u':
                textoEncriptadoArray.push(u);
                break;
            default:
                textoEncriptadoArray.push(letra);
                break;
        }
    }

    textoEncriptado = textoEncriptadoArray.join('');

    // Almacenar el texto encriptado en sessionStorage
    sessionStorage.setItem('textoEncriptado', textoEncriptado);

    // Redirigir a la página textoEncriptado.html
    window.location.href = 'textoEncriptado.html';
}

function copiarTexto() {
    // Seleccionar el texto dentro de la textarea
    let textarea = document.getElementById("textoEncriptado");
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto seleccionado
    document.execCommand('copy');

    // Deseleccionar el texto después de copiar (opcional)
    textarea.setSelectionRange(0, 0);

    // Limpiar textarea
    limpiarTextarea(textarea);

    document.getElementById('boton_desencriptar').setAttribute('disabled', false);
    boton.setAttribute('class', 'boton__habilitado__desencriptar');

    // Redirigir a la página index.html
    window.location.href = 'index.html';
}


function desencriptar() {
    let textoDesencriptadoArray = [];
   
    while (textoIngresado.length > 0) {
        if (textoIngresado.startsWith('ai')) {
            textoDesencriptadoArray.push('a');
            textoIngresado = textoIngresado.substring(2);
        } else if (textoIngresado.startsWith('enter')) {
            textoDesencriptadoArray.push('e');
            textoIngresado = textoIngresado.substring(5);
        } else if (textoIngresado.startsWith('imes')) {
            textoDesencriptadoArray.push('i');
            textoIngresado = textoIngresado.substring(4);
        } else if (textoIngresado.startsWith('ober')) {
            textoDesencriptadoArray.push('o');
            textoIngresado = textoIngresado.substring(4);
        } else if (textoIngresado.startsWith('ufat')) {
            textoDesencriptadoArray.push('u');
            textoIngresado = textoIngresado.substring(4);
        } else {
            textoDesencriptadoArray.push(textoIngresado[0]);
            textoIngresado = textoIngresado.substring(1);
        }
    }

    textoDesencriptado = textoDesencriptadoArray.join('');

    // Almacenar el texto encriptado en sessionStorage
    sessionStorage.setItem('textoEncriptado', textoDesencriptado);

    // Redirigir a la página textoEncriptado.html
    window.location.href = 'textoEncriptado.html';
}
