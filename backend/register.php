<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

require_once "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$full_name = trim($data["full_name"] ?? "");
$email     = trim($data["email"] ?? "");
$password  = $data["password"] ?? "";

if (!$full_name || !$email || !$password) {
    echo json_encode(["success" => false, "message" => "All fields are required."]);
    exit;
}

$check = $conn->prepare("SELECT id FROM users WHERE email = ?");
$check->bind_param("s", $email);
$check->execute();
if ($check->get_result()->num_rows > 0) {
    echo json_encode(["success" => false, "message" => "Email is already registered."]);
    exit;
}

$password_hash = password_hash($password, PASSWORD_DEFAULT);

$stmt = $conn->prepare("INSERT INTO users (full_name, email, password_hash) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $full_name, $email, $password_hash);

if ($stmt->execute()) {
    $user_id = $conn->insert_id;

    $wallet = $conn->prepare("INSERT INTO wallets (user_id) VALUES (?)");
    $wallet->bind_param("i", $user_id);
    $wallet->execute();

    echo json_encode(["success" => true, "message" => "Registration successful!"]);
} else {
    echo json_encode(["success" => false, "message" => "Registration failed. Please try again."]);
}
