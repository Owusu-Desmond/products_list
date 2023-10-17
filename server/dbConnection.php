<?php

class DatabaseConnection
{
    protected $host = 'localhost';
    protected $dbname = 'ProductList';
    protected $username = 'root';
    protected $password = '';
    protected $pdo;

    public function __construct()
    {
        $this->connect();
    }

    private function connect()
    {
        try {
            $dsn = "mysql:host=$this->host;dbname=$this->dbname";
            $this->pdo = new PDO($dsn, $this->username, $this->password);
            $this->pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    public function getPdo()
    {
        return $this->pdo;
    }
}
