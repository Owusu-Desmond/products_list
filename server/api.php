<?php

ini_set('display_errors', 1); // Show errors for debugging

include_once 'product.php';

header('Content-Type: application/json');
// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$method = $_SERVER['REQUEST_METHOD'];

// Handle GET /api.php/products logic
if ($method === 'GET') {
    $db = new Database();
    $products = $db->getProducts();
    echo json_encode($products);
}

// Handle POST /api.php/products logic
if ($method === 'POST') {
    $json_data = file_get_contents("php://input"); // php://input is a read-only stream that allows you to read raw data from the request body
    $data = json_decode($json_data, true);

    $sku = $data['sku'];
    $name = $data['name'];
    $price = $data['price'];
    $type = $data['type'];
    $attributes = $data['attributes'] ?? [];

    try {
        // Create the appropriate product object using the factory
        $product = ProductFactory::createProduct($sku, $name, $price, $type, $attributes);

        // Save the product
        $product->save();

        echo json_encode(array('message' => 'Product added successfully.'));
    } catch (Exception $e) {
        echo json_encode(array('message' => $e->getMessage()));
        http_response_code(400); // Bad request
        echo json_encode(array('message' => $e->getMessage()));
    }
}

?>