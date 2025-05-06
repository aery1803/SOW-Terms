# SOW Terms Client

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

- **Language Selection**:   Users can switch between multiple languages to view terms and conditions.
- **Dynamic Content**:      Fetches terms and conditions dynamically from the backend API.
- **Responsive Design**:    Optimized for both desktop and mobile devices.
- **Dropdown Navigation**:  Includes a dropdown menu for easy navigation.

## Components

- **Header**:               Displays the application logo, navigation menu, and language selection dropdown.
- **MainContent**:          Renders the terms and conditions dynamically based on the selected language.
- **MenuDropdown**:         Provides a dropdown menu for navigation links.
- **LanguageDropdown**:     Allows users to select their preferred language.
- **Loader**:               Displays a loading animation while fetching data.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.