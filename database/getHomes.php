<?php
header('Content-Type: application/json');
$servername = "rebekahesteycom.fatcowmysql.com";
$username = "cv64";
$password = "cv64";
$dbname = "cv64";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully";


$sql = "SELECT * FROM home ";
$result = $conn->query($sql);
$rows = array();

if ($result->num_rows > 0) {
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
//print json_encode($r);
}
print json_encode($rows);

} else {
    echo "0 results";
}
$conn->close();
?>




