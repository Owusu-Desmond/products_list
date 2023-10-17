<?php

include_once 'dbConnection.php';

class Database extends DatabaseConnection {
    
    public function getProducts() {
        $sql = "SELECT * FROM Products";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();
        return $result;
    }

    public function getProduct($sku) {
        $sql = "SELECT * FROM Products WHERE sku = :sku";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['sku' => $sku]);
        $result = $stmt->fetch();
        return $result;
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