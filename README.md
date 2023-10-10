# Employee Tracker

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [How to Use](#how-to-use)
- [Installation](#installation)
- [Database Credentials](#database-credentials)
- [Asynchronous Queries](#asynchronous-queries)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Welcome to the Employee Tracker application! This is a command-line application built using Node.js, Inquirer, and MySQL to manage a company's employee database. With this application, you can view departments, roles, and employees, add departments, roles, and employees, and update employee roles easily.

## Features

- Interactive command-line interface for managing employee data.
- View all departments, roles, and employees.
- Add new departments, roles, and employees to the database.
- Update employee roles.

## How to Use

Using the Employee Tracker is straightforward:

1. Start the application using Node.js:

   ```bash
   node index.js

2. You will be presented with several options:

- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee's role

3. Choose the option that corresponds to the task you want to perform.

4. Follow the prompts to enter the required information.


## Installation

Before using the Employee Tracker, make sure to install the required dependencies, including Inquirer. To install Inquirer, use the following command: npm install inquirer@8.2.4

## DatabaseCredentials

Important Note: This application requires database credentials to function. Ensure your MySQL password is not used for any other personal accounts, as it will be visible in your code. In future lessons, you will learn how to better secure this password or explore npm packages for enhanced security.

## Asynchronous Queries
To enhance performance and make database queries asynchronous, you can utilize the MySQL2 package's .promise() function. Refer to the npm documentation on MySQL2 for more details on asynchronous queries.

## Screenshot


## LiveVideo:


## Contributing
If you would like to contribute to this project, please follow these guidelines:

Fork the repository.
Create a new branch for your feature or bug fix: git checkout -b feature-name
Make your changes and commit them: git commit -m "Your commit message here"
Push your changes to your fork: git push origin feature-name
Create a pull request to the main repository.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

