# Twitter Clone API

A RESTful API backend service that provides core Twitter-like functionalities.

## Technologies Used

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- Redis (for caching)
- JWT Authentication
- Rate Limiting

## Prerequisites

- Node.js (v14 or higher)
- MySQL
- Redis

## Installation

1. Clone the repository:
```bash
git clone https://github.com/amod8983/twitter_clone_api.git
cd twitter_clone_api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
PORT=3000
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=twitter_clone
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_jwt_secret
```

## Running the Application

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `GET /api/users/:id/followers` - Get user followers
- `GET /api/users/:id/following` - Get users being followed

## Security Features

- JWT based authentication
- Password hashing using bcrypt
- Rate limiting on API endpoints
- CORS enabled

## Error Handling

The API uses standard HTTP response codes:
- 200: Success
- 400: Bad request
- 401: Unauthorized
- 403: Forbidden
- 404: Not found
- 500: Internal server error

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

Amod Kumar
