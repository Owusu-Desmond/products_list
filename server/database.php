<?php

class Database {
    private $host = 'localhost';
    private $dbname = 'ProductList';
    private $username = 'root';
    private $password = '';

    function __construct() {
        $this->connect();
    }

    private function connect() {
        try {
            $dsn = "mysql:host=$this->host;dbname=$this->dbname"; // Data Source Name
            $pdo = new PDO($dsn, $this->username, $this->password);
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            return $pdo;
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    public function getProducts() {
        $sql = "SELECT * FROM Products";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();
        return $result;
    }

    public function getProduct($sku) {
        $sql = "SELECT * FROM Products WHERE sku = :sku";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(['sku' => $sku]);
        $result = $stmt->fetch();
        return $result;
    }

    public function addProduct($sku, $name, $price, $type, $size = null, $height = null, $width = null, $length = null, $weight = null) {
        $sql = "INSERT INTO Products (SKU, Name, Price, Type, Size, Height, Width, Length, Weight) VALUES (:sku, :name, :price, :type, :size, :height, :width, :length, :weight)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(['sku' => $sku, 'name' => $name, 'price' => $price, 'type' => $type, 'size' => $size, 'height' => $height, 'width' => $width, 'length' => $length, 'weight' => $weight]);
    }
}

?>