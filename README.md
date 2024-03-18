# Country API Backend Service

This is a Node.js backend API service that provides useful data about countries using the REST Countries API.

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/LinuxKunaL/api-assignment-ap
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the server:**

   ```bash
   npm run start
   ```

## API Endpoints

### Authentication

#### Generate Auth Token

- **URL:** `/user/generateToken`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```

  Replace `your_username` and `your_password` with actual credentials.

#### Example Curl Request

```bash
curl -X POST -H "Content-Type: application/json" -d '{"username": "your_username", "password": "your_password"}' http://localhost:3000/user/generateToken
```

### Country Information

#### Get Country Information

- **URL:** `/country?name=country_name`
- **Method:** `GET`
- **Authorization Header:** `Bearer <auth_token>`

  Replace `<auth_token>` with the token generated from the authentication endpoint.

#### Example Curl Request

```bash
curl -H "Authorization: Bearer <auth_token>" http://localhost:3000/country?name=country_name
```

### Country List

#### Get List of Countries

- **URL:** `/countries?population=1000000&area=100000&language=english&sort=asc&page=1&limit=10`
- **Method:** `GET`
- **Authorization Header:** `Bearer <auth_token>`

  Replace `<auth_token>` with the token generated from the authentication endpoint.

#### Example Curl Request

```bash
curl -H "Authorization: Bearer <auth_token>" "http://localhost:3000/countries?population=1000000&area=100000&language=english&sort=asc&page=1&limit=10"
```
