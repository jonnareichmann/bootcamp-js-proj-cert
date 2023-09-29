


/* :::::: Dropdown Menu :::::: */
document.addEventListener('DOMContentLoaded', function() {

    const menus = document.querySelectorAll('.navbar-burger');
    const dropdowns = document.querySelectorAll('.navbar-menu');

    if (menus.length && dropdowns.length) {

        for (var i = 0; i < menus.length; i++) {

            menus[i].addEventListener('click', function() {

                for (var j = 0; j < dropdowns.length; j++) {
                    dropdowns[j].classList.toggle('is-active');
                }

            });
        }

    }


});


// Creamos una Función Flecha que se ejecutará al dar click en el botón
const formSubmitted = () => {

    // Capturamos el botón con JavaScript
    const boton = document.getElementById('button_submit_form');
    console.log('1. Botón Capturado');

    // Deshabilitamos el Botón agregandole el atributo "disabled"
    boton.setAttribute('disabled', '') ;
    console.log('2. Botón Deshabilitado');

    // Agregamos la clase de bulma "is-loading" para agregar un efecto de cargando ...
    boton.classList.add('is-loading');
    console.log('3. Animación "Cargando ..."');

    // Ejecutamos nuestro SweetAlert2 Personalizado durante 3 segundos
    Swal.fire({position: 'center',icon: 'success',title: '💪🏻 Reserva Enviada', text: '📩 Instrucciones en tu correo electrónico', showConfirmButton: false, timer: 3000 }) ;
    console.log('4. SweetAlert2 Personalizado');

    // Se lo quitamos después de 3.5 Segundos ...
    setTimeout(()=> {

        // Removemos la clase "is-loading" para que deje de cargar
        boton.classList.remove('is-loading');
        console.log('5. Clase "is-loading" Removida');

        // Volvemos a habilitar el botón removiendo el atributo "disabled"
        boton.removeAttribute('disabled');
        console.log('6. Botón Nuevamente habilitado');

        boton.innerHTML = 'Reserva Enviada 📨'
        console.log('7. Texto del botón Remplazado');

        console.log('8. Primer setTimeout() Completado');

    }, 3500 /* Este es el tiempo en milisegundos */ );



    // Si quisieramos Redireccionar a una URL después de 4 segundos ...
    setTimeout(()=> {

        // Redireccionamos al HOME
        window.location='/'
        console.log('9. Redireccionado ...');


        console.log('10. Segundo setTimeout() Completado');

    }, 4000 /* Este es el tiempo en milisegundos */ );


}

