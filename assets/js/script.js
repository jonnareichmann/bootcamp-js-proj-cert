


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

    console.log("Probando SweetAlert 2");
    Swal.fire({position: 'center',icon: 'success',title: '💪🏻 Reserva Enviada', text: '📩 Instrucciones en tu correo electrónico', showConfirmButton: false, timer: 4000 }) ;

}

