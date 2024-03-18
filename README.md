
# Express.js RESTful API with MongoDB

===================================

This project implements a RESTful API using Express.js for handling user-related operations. It utilizes MongoDB as the database for storing user information. The API includes functionality for user registration and user login, with proper validation and error handling throughout the application.

Installation
------------

1.  Clone the repository:
    
    bashCopy code
    
    `git clone <repository_url>`
    
2.  Install dependencies:
    
    Copy code
    
    `npm install`
    
3.  Set up your MongoDB database and configure the connection in `db.js`.
    
4.  Start the server:
    
    `npm run start`
    

Endpoints
---------

### User Registration

*   **Endpoint**: `localhost:8000/register`
*   **Method**: POST
*   **Request Body**:
    *   `username`: String (required)
    *   `email`: String (required)
    *   `password`: String (required)
*   **Response**:
    *   `status`: String
    *   `message`: String
    *   `data`: Object (User data)

### User Login

*   **Endpoint**: `localhost:8000/login`
*   **Method**: POST
*   **Request Body**:
    *   `email`: String (required)
    *   `password`: String (required)
*   **Response**:
    *   `status`: String
    *   `message`: String
    *   `token`: String (JWT token)

Error Handling
--------------

*   **400 Bad Request**: Invalid input or missing fields.

API Documentation
-----------------

Detailed API documentation can be found in the `docs` folder.

Contributing
------------

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md).

License
-------

This project is licensed under the MIT License - see the LICENSE file for details


