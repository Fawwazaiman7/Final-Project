<?php
session_start();
if (!isset($_SESSION['admin'])) {
    header("Location: admin_login.php");
    exit();
}

echo "Welcome to the admin dashboard.";
// Add code for managing bookings, gallery, reservations, and packages here.
?>
<a href="admin_logout.php">Logout</a>
