# Employee Tracker

## Description

Employee Tracker is a command-line application that allows business owners to view and manage their company's departments, roles, and employees. Built with Node.js, Inquirer, and PostgreSQL, this tool provides a seamless way to organize and plan your business by managing employee and organizational data efficiently.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [Technologies Used](#technologies-used)
- [Contribution](#contribution)
- [License](#license)

## Features
- View all departments in a formatted table showing department names and IDs.
- View all roles including job titles, role IDs, department affiliations, and salaries.
- View all employees with details such as IDs, names, job titles, departments, salaries, and managers.
- Add a new department by providing its name.
- Add a new role by entering its title, salary, and associated department.
- Add a new employee by providing their name, role, and manager.
- Update an existing employee's role.

## Installation
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/BrandonLanes/employee-tracker

2. Navigate to the project directory:
   cd employee-tracker

3. Install the required dependencies:
   npm install

4. Set up the PostgreSQL database:
   - Create a new database.
   - Use the provided schema.sql file to define the tables.
   - Optionally, use seeds.sql to populate the database with sample data.

## Usage
1. Start the application:
   node index.js

2. Follow the prompts in the command-line interface to interact with the employee tracker.

## Walkthrough Video
A walkthrough video demonstrating the functionality of the Employee Tracker can be found here: 

The video showcases:
   - Application start-up
   - Navigation through the menu options.
   - Functionality for viewing, adding, and updating departments, roles, and employees.

## Technologies Used
   - Node.js
   - Inquuirer
   - PostreSQL
   - pg

## Contribution
Contributions are welcome! If you have suggestions or improvements, feel free to fork the repository and open a pull request or create an issue.

   1. Fork the project.

   2. Create your feature branch (git checkout -b feature/AmazingFeature).

   3. Commit your changes (git commit -m 'Add some AmazingFeature').

   4. Push to the branch (git push origin feature/AmazingFeature).

   5. Open a pull request.

## License
This project is licensed under the MIT License.

## Acknowledgments
The wonderful TA's and Dan Mueller for all their assistance.

Bootcamp Tutors 

AI - Xpert Learning Assistant, AskBCS Learning Assistant, ChatGPT