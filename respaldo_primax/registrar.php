<?php 

/*include("con_db.php");

if (isset($_POST['register'])) {
    if (strlen($_POST['name']) >= 1 && strlen($_POST['apellido']) >= 1 &&
        strlen($_POST['cedula']) >= 1 && strlen($_POST['fecha-nacimiento']) >= 1 &&
        strlen($_POST['email']) >= 1 && strlen($_POST['telefono']) >= 1 && strlen($_POST['instagram']) >= 1
    ){
        $nombre = trim($_POST['nombre']);
        $apellido = trim($_POST['apellido']);
        $cedula = trim($_POST['cedula']);
        $fecha_nacimiento = trim($_POST['fecha-nacimiento']);
        $email = trim($_POST['email']);
        $telefono = trim($_POST['telefono']);
        $instagram = trim($_POST['instagram']);
        $fechareg = date("d/m/y");
        $consulta = "INSERT INTO datos(nombre, appelido, cedula, fecha-nacimiento, email, telefono, instagram, fecha_reg) VALUES ('$nombre','$apellido', '$cedula','$fecha_nacimiento','$email','$telefono','$instagram','$fechareg')";
        $resultado = mysqli_query($conex,$consulta);
        if ($resultado) {
            echo "Datos guardados correctamente";
            } else {
            
            echo "Error al guardar los datos: ";

            }
        } 
}

?>*/