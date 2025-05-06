# SOW Client (Vite + React)

This project is a client-side application built with React. It provides a user-friendly interface for interacting with the backend API to display terms and conditions in multiple languages.

## Project Structure

```
SOW-Terms-Client
├── public
│   ├── logo.png            # Application logo
│   ├── background.jpg      # Background image
├── src
│   ├── index.jsx           # Application entry point
│   ├── App.jsx             # Main application component
│   ├── components
│   │   ├── Header.jsx      # Header component with navigation and language selection
│   │   ├── MainContent.jsx # Main content component for displaying terms
│   │   ├── MenuDropdown.jsx # Dropdown menu for navigation links
│   │   ├── LanguageDropdown.jsx # Dropdown for language selection
│   │   ├── Loading.jsx     # Loader component for loading states
│   ├── utils
│   │   └── api.js          # Utility for API calls
│   ├── assets              # Static assets like images and icons
│   ├── styles              # Application styles
├── .env                    # Environment variables
├── index.html              # Main HTML file
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Installation

1. Clone the repository:

```
git clone <repository-url>
cd SOW-Terms-Client
```

2. Install dependencies:

```
npm install
```

3. Create a .env file in the root directory and add the backend API URL:

```
VITE_BASE_URL=http://localhost:3000
```

Replace http://localhost:3000 with the actual backend URL if deployed.

## Usage

1. Start the development server:

```
npm run dev
```

2. Open the application in your browser at http://localhost:5173 (default Vite development server URL).

## Features

- **Language Selection**: Users can switch between multiple languages to view terms and conditions.
- **Dynamic Content**: Fetches terms and conditions dynamically from the backend API.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Dropdown Navigation**: Includes a dropdown menu for easy navigation.

## Components

- **Header**: Displays the application logo, navigation menu, and language selection dropdown.
- **MainContent**: Renders the terms and conditions dynamically based on the selected language.
- **MenuDropdown**: Provides a dropdown menu for navigation links.
- **LanguageDropdown**: Allows users to select their preferred language.
- **Loader**: Displays a loading animation while fetching data.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.

---

# SOW Server (Fastify, Node, Sequelize + PostgreSQL)

This project is a backend application built with Fastify and Sequelize. It provides a RESTful API and integrates with a relational database using Sequelize ORM.

## Project Structure

```
SOW-Terms-Server
├── src
│   ├── app.js               # Entry point of the application
│   ├── plugins
│   │   └── sequelize.js     # Fastify plugin for Sequelize integration
│   ├── routes
│   │   ├── index.js         # Consolidated route definitions
│   │   ├── contentRoute.js  # Routes for content-related operations
│   ├── models
│   │   └── content.js       # Sequelize model for content
│   ├── controllers
│   │   ├── contentController.js # Business logic for content routes
├── .env                      # Environment variables
├── .sequelizerc              # Sequelize CLI configuration
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd SOW-Terms-Server
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your database connection details:

   ```properties
   PORT=3000
   NODE_ENV=development
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   ```

## Usage

1. Start the Fastify server:

   ```bash
   npm start
   ```

2. The server will run on `http://localhost:3000` by default.

## API Endpoints

- **Content Routes**: Defined in `src/routes/contentRoute.js` and implemented in `src/controllers/contentController.js`.
  - `GET /content/:language`: Fetch content by language.

## Sequelize Models

- **Content Model**: Defined in `src/models/content.js`. Represents the `content` table in the database, storing terms and their associated language information.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.
