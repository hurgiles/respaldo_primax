<?php

class Database
{
    public static function Conexion()
    {
        try {
            $conexion = mysqli_connect('localhost', 'newuser', 'BGpromos22') or die("Error al conectar");
            mysqli_select_db($conexion, 'BGpromos_cobra_giros');
            mysqli_set_charset($conexion, 'utf8');
        } catch (\Exception $e) {
            echo '<pre>'; var_dump('error :' . $e->getMessage());
            exit();
        }
        return $conexion;
    }

    public static function insertarRegistro($conexion, $nombre, $apellido, $fecha_nacimiento, $email, $telefono, $instagram)
    {
        $id = 0;
        try {
            $fields = "INSERT INTO registros (nombre, apellido, fecha_nacimiento, email, telefono, instagram)";
            $values = "VALUES (?, ?, ?, ?, ?, ?)";
            
            $stmt = mysqli_prepare($conexion, $fields . " " . $values);
            mysqli_stmt_bind_param($stmt, 'ssssss', $nombre, $apellido, $fecha_nacimiento, $email, $telefono, $instagram);

            if (mysqli_stmt_execute($stmt)) {
                $id = mysqli_insert_id($conexion);
            } else {
                $id = -1;
            }
            
            mysqli_stmt_close($stmt);
        } catch (\Exception $e) {
            $id = -1;
        }
        return $id;
    }
}
?>

