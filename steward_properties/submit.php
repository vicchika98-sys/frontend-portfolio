<?php
// Connect to database
$host = "localhost";
$user = "root";
$pass = "";
$db   = "appointments_db"; // Make sure this DB exists

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$firstName       = $_POST['first_name'];
$lastName        = $_POST['last_name'];
$appointmentDate = $_POST['appointment_date'];
$appointmentTime = $_POST['appointment_time'];
$message         = $_POST['message'];

// Insert into database
$sql = "INSERT INTO appointments (first_name, last_name, appointment_date, appointment_time, message)
        VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $firstName, $lastName, $appointmentDate, $appointmentTime, $message);

if ($stmt->execute()) {
    echo "Appointment booked successfully!";
} else {
    echo "Error: " . $stmt->error;
}

$conn->close();
?>
