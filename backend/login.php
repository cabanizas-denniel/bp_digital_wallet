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

$email    = trim($data["email"] ?? "");
$password = $data["password"] ?? "";

if (!$email || !$password) {
    echo json_encode(["success" => false, "message" => "Email and password are required."]);
    exit;
}

$stmt = $conn->prepare("SELECT id, full_name, email, password_hash FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo json_encode(["success" => false, "message" => "User not registered."]);
    exit;
}

$user = $result->fetch_assoc();

if (password_verify($password, $user["password_hash"])) {
    echo json_encode([
        "success"  => true,
        "message"  => "Login successful!",
        "user"     => [
            "id"        => $user["id"],
            "full_name" => $user["full_name"],
            "email"     => $user["email"]
        ]
    ]);
} else {
    echo json_encode(["success" => false, "message" => "Incorrect password."]);
}
