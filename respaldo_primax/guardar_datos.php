<?php
// Datos de conexión a la base de datos
$db_host = 'localhost';
$db_user = 'root';
$db_password = 'root';
$db_db = 'resgistro';


// Crear conexión
$conn = new mysqli($db_host, $db_user, $db_password, $db_db);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos del formulario
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$cedula = $_POST['cedula'];
$fechaNacimiento = $_POST['fecha-nacimiento'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$instagram = $_POST['instagram'];

// Preparar la consulta SQL
$stmt = $conn->prepare("INSERT INTO usuarios (nombre, apellido, cedula, fecha_nacimiento, email, telefono, instagram) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssss", $nombre, $apellido, $cedula, $fechaNacimiento, $email, $telefono, $instagram);

// Ejecutar la consulta
if ($stmt->execute()) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $stmt->error;
}

// Cerrar la conexión
$stmt->close();
$conn->close();
?>
