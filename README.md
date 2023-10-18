# Scandiweb Junior Developer Test Assignment

## About the Project

This project is a web application developed as part of the Scandiweb Junior Developer test assignment. It consists of two main pages:

1. **Product List Page:** This page displays a list of products, each with a unique SKU, name, price in dollars, and one product-specific attribute (size in MB for DVD-disc, weight in Kg for Book, or dimensions in HxWxL for Furniture). The products are sorted by their primary key in the database. Users can also mass delete selected products.

2. **Add Product Page:** This page allows users to add new products to the list. Users can enter the SKU, name, price, and select the product type (DVD, Book, or Furniture). Depending on the selected product type, additional fields are dynamically generated: size for DVD-disc, weight for Book, and dimensions for Furniture.

## Built With

- **Backend:** PHP, MySQL
- **Frontend:** SCSS, React, Redux, Redux Thunk, React Router, Axios.

## Screenshots


## Live Demo

You can access the live demo of the application [here](https://scandiweblistaddproducts.netlify.app/).

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

- PHP ^7.0
- MySQL ^5.6
- Web server (e.g., Apache, Nginx)
- Node.js ^14.15.4
- NPM ^6.14.10

### Setup

1. Clone the repository to your local machine:
    
    ```sh
    git clone https://github.com/Owusu-Desmond/products_list.git
    ```

2. Import the database schema and sample data from the `database.sql` file into your MySQL database.

3. Install the project's dependencies: 

   - Navigate the client directory:

    ```sh
    cd client
    ```

    - Install the dependencies:

    ```sh
    npm install
    ```

4. Open the `dbConnection.php` file in the server directory and edit the following instance variables to your database credentials:

    ```php
        protected $host = 'localhost';
        protected $dbname = 'ProductList';
        protected $username = 'root';
        protected $password = '';
    ```

5. Ensure that your web server is running and navigate to `/client/src/redux/products/products.js`. Edit the `PRODUCTS_URL` variable to your web server's URL:

    ```js
    const PRODUCTS_URL = 'http://localhost/products_list/server';
    ```

### Usage

1. Navigate to the client directory:

    ```sh
    cd client
    ```
2. Start the development server:

    ```sh
    npm start
    ```
3. Open your browser and navigate to `http://localhost:3000`.

## Authors

- **Desmond Owusu Ansah**

- Github [@Owusu-Desmond](https://github.com/Owusu-Desmond)
- Twitter [@DesmondOwusuDev](https://twitter.com/DesmondOwusuDev)
- LinkedIn [@desmond-owusu-ansah](https://www.linkedin.com/in/desmond-owusu-ansah-09274a223/)
- Dev [@desmondowusudev](https://dev.to/desmondowusudev)

## Future Features

- **Edit and Update Products:** Allowing users to edit and update existing products.
- **Search Functionality:** Implement a search feature to find products based on SKU, name, or other attributes.
- **User Authentication:** Add user authentication to secure the application and enable multi-user functionality.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Owusu-Desmond/products_list/issues).

## Show Your Support

If you find this project helpful or you like what you see, please consider giving it a star.

## Acknowledgements

We would like to express our gratitude to Scandiweb for providing this opportunity to demonstrate our skills.

## FAQ

**Q: How can I add a new product?**
- A: Click the "ADD" button on the Product List page, fill in the required details, and click "Save."

**Q: Why can't I delete a product?**
- A: Make sure you have selected at least one product using the checkboxes, then click the "MASS DELETE" button.

## License

This project is [MIT](./LICENSE) licensed.
