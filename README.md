# Employee Database Management System

This is a command-line application for managing an employee database. The application allows you to:

- View all departments, roles, and employees.
- Add new departments, roles, and employees.
- Delete departments, roles, and employees.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Database Schema](#database-schema)
- [License](#license)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd client
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Set up your PostgreSQL database and configure the connection details in the `connection.js` file.

## Usage

1. Start the application by running:

   ```bash
   npm start
   ```

2. Follow the prompts in the command-line interface to manage your employee database.

## Features

### View Options

- **View All Departments:** Displays a list of all departments.
- **View All Roles:** Displays a list of all roles, including their salary and associated department.
- **View All Employees:** Displays a list of all employees, including their role, salary, and manager.

### Add Options

- **Add Department:** Add a new department by providing its name.
- **Add Role:** Add a new role by specifying the title, salary, and associated department.
- **Add Employee:** Add a new employee by entering their first name, last name, role, and salary.

### Delete Options

- **Delete Department:** Remove a department from the database.
- **Delete Role:** Remove a role from the database.
- **Delete Employee:** Remove an employee from the database.

## Dependencies

- **[Node.js](https://nodejs.org/):** JavaScript runtime environment.
- **[Inquirer](https://www.npmjs.com/package/inquirer):** Command-line interface for user prompts.
- **[pg](https://www.npmjs.com/package/pg):** PostgreSQL client for Node.js.

## Database Schema

The database consists of the following tables:

### Department

| Column | Type    |
|--------|---------|
| id     | INTEGER |
| name   | TEXT    |

### Role

| Column        | Type    |
|---------------|---------|
| id            | INTEGER |
| title         | TEXT    |
| salary        | INTEGER |
| department_id | INTEGER |

### Employee

| Column        | Type    |
|---------------|---------|
| id            | INTEGER |
| first_name    | TEXT    |
| last_name     | TEXT    |
| role_id       | INTEGER |
| department_id | INTEGER |
| salary        | INTEGER |
| manager_id    | INTEGER |

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contributing
send me ideas for improvment at my email listed at the bottom.

## Tests
```
run npm test
```

## Questions
If you have any questions, please reach out:

- GitHub: [AOF-O5-1](https://github.com/AOF-O5-1)
- Email: [marcusfajemisin@example.com](mailto:marcusfajemisin@example.com)

## Video Tutorial
Video: https://drive.google.com/file/d/1FeK0dPNi-1WE0Vdf6quT9MeN3IK-dLrZ/view
