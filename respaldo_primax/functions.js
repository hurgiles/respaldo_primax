document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del formulario y otros elementos relevantes
    var form1 = document.getElementById('formulariolanding');
    var form2 = document.getElementById('form2');
    var confirmation = document.getElementById('confirmation');
    var next1 = document.getElementById('next1');
    var back = document.getElementById('back');
    var complete = document.getElementById('complete');
    var confirmationMessage = document.getElementById('confirmationMessage');
    var instagramField = document.getElementById('form_nombre');
    var progressBar = document.getElementById('progress-bar');
    var instagramInput = document.getElementById('instagram');
    var fechaNacimientoInput = document.getElementById('fecha-nacimiento');

    // Función para asegurarse de que el campo de entrada tenga un "@" al obtener el foco si el valor no comienza con él.
    function setInitialValue() {
        if (!instagramInput.value.startsWith('@')) {
            instagramInput.value = '@';
        }
    }

    // Función que se activa cada vez que el usuario escribe en el campo.
    function handleInputChange(e) {
        var input = e.target;
        if (!input.value.startsWith('@')) {
            input.value = '@' + input.value.replace(/^@*/, '');
        }
    }

    // Función que previene que el usuario borre el "@" al presionar la tecla de retroceso cuando el cursor está justo después del "@".
    function preventRemovalOfAt(e) {
        if (e.target.selectionStart === 1 && e.key === "Backspace") {
            e.preventDefault();
        }
    }

    // Agregar los event listeners al campo de entrada de Instagram
    if (instagramInput) {
        instagramInput.addEventListener('focus', setInitialValue);
        instagramInput.addEventListener('input', handleInputChange);
        instagramInput.addEventListener('keydown', preventRemovalOfAt);
    }

    // Validación de la fecha de nacimiento
    function validateAge() {
        const fechaNacimiento = fechaNacimientoInput.value;
        const fechaNacimientoDate = new Date(fechaNacimiento);
        const hoy = new Date();
        let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
        const mes = hoy.getMonth() - fechaNacimientoDate.getMonth();

        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimientoDate.getDate())) {
            edad--;
        }

        if (edad < 18) {
            fechaNacimientoInput.classList.add('is-invalid');
            return false;
        } else {
            fechaNacimientoInput.classList.remove('is-invalid');
            return true;
        }
    }

    // Función para verificar la validez del formulario y actualizar el estado del botón 'complete'
    function updateCompleteButtonState() {
        if (form2.checkValidity()) {
            complete.classList.add('active');
        } else {
            complete.classList.remove('active');
        }
        // Verificar el estado del botón 'next1'
        if (form1.checkValidity()) {
            next1.classList.add('active');
        } else {
            next1.classList.remove('active');
        }
    }

    function capitalizeFirstLetter(string) {
        if (!string) return ''; // Asegúrate de que la cadena no esté vacía
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    next1.addEventListener('click', function(event) {
        event.preventDefault(); // Previene la recarga de la página
        if (form1.checkValidity() === false || !validateAge()) {
            event.stopPropagation();
            form1.classList.add('was-validated');
        } else {
            form1.style.display = 'none';
            form2.style.display = 'block';
            // Actualizar la barra de progreso al 50%
            progressBar.style.width = '50%';
            progressBar.textContent = '';
            // Verificar el estado del botón 'complete'
            updateCompleteButtonState();
        }
    });

    back.addEventListener('click', function(event) {
        event.preventDefault(); // Previene la recarga de la página
        form2.style.display = 'none';
        form1.style.display = 'block';
        progressBar.style.width = '0%';
        progressBar.textContent = '';
        /*next1.classList.add('active');*/
    });

    complete.addEventListener('click', function(event) {
        event.preventDefault(); // Previene la recarga de la página
        if (form2.checkValidity() === false) {
            event.stopPropagation();
            form2.classList.add('was-validated');
        } else {
            var instagramUser = instagramField.value;
            instagramUser = capitalizeFirstLetter(instagramUser);
            confirmationMessage.textContent = instagramUser;
            form2.style.display = 'none';
            confirmation.style.display = 'block';
            // Actualizar la barra de progreso al 100%
            progressBar.style.width = '100%';
            progressBar.textContent = '';
        }
    });

    // Agregar un event listener para verificar el estado del botón cada vez que el usuario ingresa datos en el formulario
    form1.addEventListener('input', updateCompleteButtonState);
    form2.addEventListener('input', updateCompleteButtonState);

    // Código para cambiar las imágenes cada 5 segundos
    const images = document.querySelectorAll('.image-slide');
    let currentImageIndex = 0;
    const changeInterval = 5000; // 5000 milisegundos = 5 segundos

    function changeImage() {
        images[currentImageIndex].classList.remove('active1');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }

    // Cambiar la imagen cada cierto tiempo
    setInterval(changeImage, changeInterval);

    // Iniciar mostrando la primera imagen
    images[currentImageIndex].classList.add('active1');
});
