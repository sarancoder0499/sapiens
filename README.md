# Sapiens User Management APP
This project is a user management website featuring two key components: a Users List and a Create User form. The Users List displays user information in a table or grid format, allowing for easy viewing and management of existing users. 

## Setup

### Cloning the Repository

1. Clone the repository:
    ```bash
    git clone https://github.com/sarancoder0499/sapiens.git
    cd sapiens
    ```

2. Copy the example environment to create environment-specific files based on `.env.example`:
    ```bash
    cp .env.example .env.dev  # for development
    cp .env.example .env.test # for testing
    cp .env.example .env.prod # for production
    ```

### Docker Setup

#### Development

1. **Build and run the Docker container for development:**

   To build and run the application in development mode, use the following command. This will use the `docker-compose.dev.yml` file to set up the development environment:

   ```bash
   docker-compose -f docker-compose.dev.yml up --build

#### Production

1. **Build and run the Docker container for production:**

   To build and run the application in production mode, use the following command. This will use the `docker-compose.prod.yml` file to set up the production environment:

   ```bash
   docker-compose -f docker-compose.prod.yml up --build
