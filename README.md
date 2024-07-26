# Angular Product Catalog

This is an Angular project for a product catalog with features like filtering, sorting, and pagination. The project includes components for displaying products, filtering, sorting, and managing the cart.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Services](#services)

## Features

- Display a list of products
- Filter products by name and category
- Sort products by price (ascending and descending)
- Paginate products
- Add products to the cart with a count of added products



## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Arul1541/product-catalog.git
    ```

2. Navigate to the project directory:

    ```bash
    cd product-catalog
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the development server:

    ```bash
    ng serve
    ```

2. Open your browser and navigate to `http://localhost:4200`.


## Components

### ProductsComponent

Displays the list of products with pagination. Allows adding products to the cart.

### FilterComponent

Provides filtering options for the product list.

### SortComponent

Provides sorting options for the product list.

## Services

### ProductsService

Handles the retrieval of product data.