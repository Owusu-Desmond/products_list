<?php

include_once 'dbConnection.php';

class Database extends DatabaseConnection {
    // split by product types - they should be sorted by primary key in database.
    public function getProducts() {
        $sql = "SELECT * FROM Products ORDER BY Type, SKU";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute();
        $products = $stmt->fetchAll();
        return $products;  
    }

    public function addProduct($sku, $name, $price, $type, $size = null, $height = null, $width = null, $length = null, $weight = null) {
        $sql = "INSERT INTO Products (SKU, Name, Price, Type, Size, Height, Width, Length, Weight) VALUES (:sku, :name, :price, :type, :size, :height, :width, :length, :weight)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['sku' => $sku, 'name' => $name, 'price' => $price, 'type' => $type, 'size' => $size, 'height' => $height, 'width' => $width, 'length' => $length, 'weight' => $weight]);
    }

    public function deleteProducts($skus) {
        $placeholders = implode(',', array_fill(0, count($skus), '?'));
        $sql = "DELETE FROM Products WHERE sku IN ($placeholders)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($skus);
    }
}
?>