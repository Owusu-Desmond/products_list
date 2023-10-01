<?php

include_once 'database.php';

interface ProductInterface {
    public function save();
    public function display();
}

class Product implements ProductInterface {
    protected $sku;
    protected $name;
    protected $price;

    function __construct($sku, $name, $price) {
        $this->sku = $sku;
        $this->name = $name;
        $this->price = $price;
        $this->db = new Database();
    }

    public function save() {
        $this->db->addProduct($this->sku, $this->name, $this->price, 'Product');

        // Redirect to home page
        header('Location: /');
    }

    public function display() {
        $product = $this->db->getProduct($this->sku);
        echo "<div class='product'>";
        echo "<h3>" . $product['name'] . "</h3>";
        echo "<p>SKU: " . $product['sku'] . "</p>";
        echo "<p>Price: " . $product['price'] . "</p>";
        echo "</div>";
    }
    
}

class DVD extends Product {
    private $size;

    function __construct($sku, $name, $price, $attributes) {
        parent::__construct($sku, $name, $price);
        $this->size = $attributes['size'];
    }

    public function save() {
        $this->db->addProduct($this->sku, $this->name, $this->price, 'DVD', $this->size);

        // Redirect to home page
        header('Location: /');
    }
}

class Furniture extends Product {
    private $height;
    private $width;
    private $length;

    function __construct($sku, $name, $price, $attributes) {
        parent::__construct($sku, $name, $price);
        $this->height = $attributes['height'];
        $this->width = $attributes['width'];
        $this->length = $attributes['length'];
    }

    public function save() {
        $this->db->addProduct($this->sku, $this->name, $this->price, 'Furniture', null, $this->height, $this->width, $this->length);

        // Redirect to home page
        header('Location: /');
    }
}

class Book extends Product {
    private $weight;

    function __construct($sku, $name, $price, $attributes) {
        parent::__construct($sku, $name, $price);
        $this->weight = $attributes['weight'];
    }

    public function save() {
        $this->db->addProduct($this->sku, $this->name, $this->price, 'Book', null, null, null, null, $this->weight);
        header('Location: /');
    }
}

class ProductFactory {
    private static $productTypes = [
        'DVD' => DVD::class,
        'Furniture' => Furniture::class,
        'Book' => Book::class
    ];

    public static function createProduct($sku, $name, $price, $type, $attributes = []) {
        if (array_key_exists($type, self::$productTypes)) {
            $productClass = self::$productTypes[$type];
            return new $productClass($sku, $name, $price, $attributes);
        } else {
            throw new Exception('Invalid product type');
        }
    }
}

?>