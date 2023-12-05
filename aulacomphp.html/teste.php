<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    echo "Hello, " . $name . "!";
}

$name = filter_input(INPUT_POST,'name', FILTER_SANITIZE_SPECIAL_CHARS);
$arr = [
    'name'=> $name,
    'age'=>31,
    'city'=> 'Hernani'
];
echo json_encode($arr);
?>