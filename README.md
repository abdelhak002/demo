# PFE Backend

### This is the backend for the PFE project. It is a REST API that is used to store and retrieve data from the database. built with [JSON Server](https://github.com/typicode/json-server).

# Getting Started

## Installation

### Clone the repository

```bash
git clone <repo_url>
```

### Install dependencies

```bash
npm install
```

## Usage

### Start the server

```bash
npm run dev
```

### Start the server with fake data

```bash
npm run dev:fake
```

# API

## Endpoints

for all endpoints, the base url is `http://localhost:3004`, and the resources are stored in `db.json` file. All endpoints accepts the resources in plural form, and the response is in JSON format.
Available resources are:

- customers
- products
- suppliers
- companies
- orders

Returns a list of all resources

```js
GET /api/<resources>
```

Returns a resource by id

```js
GET /api/<resources>/:id
```

Creates a new resource

```js
POST /api/<resources>
```

Updates a resource by id

```js
PUT /api/<resources>/:id
```

Deletes a resource by id

```js
DELETE /api/<resources>/:id
```

## Authentication

### Register

Data to use for register

```json
{
  "name": "Admin",
  "email": "admin@gmail.com",
  "password": "admin"
}
```

Endpoint, returns a token that is used to authenticate the user

```https
POST /api/register
```

### Login

Data to use for login

```json
{
  "email": "admin@gmail.com",
  "password": "admin"
}
```

Endpoint, returns a token that is used to authenticate the user

```https
POST /api/login
```

Response example for login and register

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "Admin",
    "email": "admin@gmail.com"
  }
}
```
