# Product Display Application

## Overview

This project is a web application that displays product information in a table format. The table is built using AG Grid and styled with Material UI and Tailwind CSS. The application fetches product data from a GraphQL server and includes user authentication functionalities.

## Task

The task required developing a web application that:
1. **Displays product information in a table format**: The table should include product ID, name, company name, default buy price, and default sell price.
2. **Handles user authentication**: The application should support user login and registration.
3. **Fetches data from a server**: The application should retrieve product data from a GraphQL API.
4. **Uses the following technologies**:
   - React
   - TypeScript
   - Material UI
   - AG Grid
   - Apollo GraphQL

## Implementation

### Project structure

- `src/components`: React components
- `src/pages`: Page components
- `src/hooks`: Custom hooks
- `src/graphql`: GraphQL queries, mutations and client
- `src/state`: Recoil state management
- `src/types`: TypeScript types

### Features
1. **Product Table**
   - Implemented a `ProductsTable` component using AG Grid to display product information.
   - Integrated GraphQL to fetch data from the server with the `GET_PRODUCTS` query.
   - Configured AG Grid to display product ID, name, company name, default buy price, and default sell price.
   - Added a loading spinner to indicate data fetching status.

2. **Authentication**
   - Set up Apollo Client for managing GraphQL requests and authentication.
   - Implemented GraphQL mutations for user login, registration, and logout.
   - Used Recoil for state management to handle authentication and product data.

3. **UI Components**
   - Developed a `TopBar` component for user authentication status and logout functionality.
   - Created `PrivateRoute` and `PublicRoute` components to manage access to different routes based on authentication state.
   - Added a `NotFoundPage` component to handle 404 errors.
   - Implemented a `LoginPage` component with form handling for user authentication.

4. **Styling and Dependencies**
   - Utilized Tailwind CSS for modern styling and layout.
   - Incorporated AG Grid community package for table functionalities.
   - Added TypeScript interfaces for type safety.

### Installation

To set up and run the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open the application:**
   Navigate to `http://localhost:your_port` in your web browser.

### Configuration

- **Apollo Client**: Configured with HTTP and authentication links to handle GraphQL queries and mutations.
- **Recoil State Management**: Used for managing authentication and product state.

### Usage

- **Login**: Access the login page from the top bar to authenticate users.
- **View Products**: Once logged in, navigate to the dashboard to view the product table.
- **Logout**: Use the logout button in the top bar to end the session.

### Notes

- **CORS Issues**: Ensure CORS is disabled in your browser or configure your server to handle CORS for development purposes.
- **Error Handling**: The application includes basic error handling and loading states.

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests. Ensure to follow the coding guidelines and provide clear descriptions of any changes made.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
