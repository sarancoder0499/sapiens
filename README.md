# Sapiens User Management APP
This project is a user management website featuring two key components: a Users List and a Create User form. The Users List displays user information in a table or grid format, allowing for easy viewing and management of existing users. 

## Setup

### Cloning the Repository

1. Clone the repository:
    ```bash
    git clone https://github.com/sarancoder0499/sapiens.git
    cd sapiens
    ```

2. Copy the sample environment file to `.env.dev`:
    ```bash
    cp .env.sample .env.dev
    ```

3. Open the `.env.dev` file and update the values as needed for your local setup.

### Docker Setup

#### Development

1. **Build and run the Docker container for development:**

   To build and run the application in development mode, use the following command. This will use the `docker-compose.dev.yml` file to set up the development environment:

   ```bash
   docker-compose -f docker-compose.dev.yml up --build

2. **Build and run the Docker container for production:**

   To build and run the application in production mode, use the following command. This will use the `docker-compose.prod.yml` file to set up the production environment:

   ```bash
   docker-compose -f docker-compose.prod.yml up --build
