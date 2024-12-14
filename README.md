# LoginHub

## Description

**LoginHub** is a simple and efficient authentication app that allows users to choose between two login types: **Extranet Login** and **User Login**. After selecting the login type, users are prompted to enter their credentials. The app checks the credentials against demo data and navigates to the respective home page (Extranet Home or User Home) upon successful authentication.

This app demonstrates how to implement conditional routing, authentication logic, and state management in a React app using **React Router** and **TailwindCSS** for styling.

## Features

- **Login Type Selection**: Choose between **Extranet Login** or **User Login**.
- **Authentication**: Validates user credentials against predefined demo data.
- **Redirection**: Redirects users to respective home pages based on login type.
- **Responsive UI**: Built with **TailwindCSS** for a clean, responsive layout.
- **Simple & Secure**: Demo credentials for authentication and secure redirection.

## What You Will Learn

- **React Router**: How to implement routing and manage different pages in your app.
- **State Management**: Using React `useState` and passing props to manage the login flow.
- **Conditional Rendering**: Display different forms based on user actions (login type).
- **User Authentication**: Implementing simple authentication logic using demo data.
- **Responsive Design**: Building a modern UI using **TailwindCSS** for responsive web design.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Install the latest stable version of Node.js from [nodejs.org](https://nodejs.org/).
- **npm**: Comes bundled with Node.js for managing dependencies.

Basic knowledge of **React** and **React Router** is recommended.

## Installation

Follow these steps to set up the app locally on your machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/leefarhadaman/LoginHub.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd LoginHub
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the application**:
   ```bash
   npm start
   ```

The application will run on [http://localhost:3000](http://localhost:3000).

## Login Credentials (for testing)

The app uses the following demo data for login:

### Extranet Login:
- **Username**: `admin`
- **Password**: `admin123`

### User Login:
- **Username**: `user`
- **Password**: `user123`

You can change these credentials inside the `Login.js` component by modifying the authentication logic.

## App Structure

The app consists of the following key components:

- **App.js**: The main entry point of the app, containing routing and login selection logic.
- **Login.js**: A component that handles the login form for both Extranet and User login types.
- **ExtranetHome.js**: A page displayed after successful Extranet login.
- **UserHome.js**: A page displayed after successful User login.
- **TailwindCSS**: The app uses TailwindCSS for responsive and utility-first styling.

## How the Authentication Works

1. **Login Type Selection**: The user selects either Extranet Login or User Login.
2. **Login Form**: A login form is presented based on the selected type. The user enters their username and password.
3. **Authentication Check**: On form submission, the entered credentials are checked against predefined demo data.
4. **Redirection**: If the credentials match, the user is redirected to either the Extranet Home or User Home page.

## Dependencies

This project requires the following dependencies:

- **React**: The core JavaScript library for building the user interface.
- **React Router**: A library for managing routing and navigation within the React app.
- **TailwindCSS**: A utility-first CSS framework for styling the app.
- **react-dom**: Used for rendering React components to the DOM.

To install these dependencies, run:

```bash
npm install react react-dom react-router-dom tailwindcss
