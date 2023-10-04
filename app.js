const inquirer = require('inquirer');
const {init, listTitle, listEmployee, getAllDepartments , getAllRoles, getAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./db/db.js');

init();

async function enterDepartment() {
let response = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the name of the department:',
    },
  ])
    console.log(`Added department: ${response.name}`);
    await addDepartment(response.name);
    }

async function enterRole() {
  const response = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of the role:',
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the salary for the role:',
    },
    {
      type: 'input',
      name: 'department_id',
      message: 'Enter the department for the role:',
    },
  ])
    console.log(`Added title: ${response.title}, Salary: ${response.salary}, Department: ${response.department_id}`);
    await addRole(response.title, response.salary, response.department_id);
  }


async function enterEmployee() {
  const response = await inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Enter the first name of the employee:',
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'Enter the last name of the employee:',
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'Enter the role of the employee:',
    },
    {
      type: 'input',
      name: 'manager_id',
      message: 'Enter the manager of the employee (if applicable):',
    },
  ])

    console.log(`Added Employee: 
    First Name: ${response.first_name}, Last Name: ${response.last_name}, Role: ${response.role_id}, Manager: ${response.manager_id || 'None'}`);
    await addEmployee(response.first_name, response.last_name, response.role_id, response.manager_id);
  
  }

async function enterEmployeeRole() {
  const response = await inquirer.prompt([
   
    {
      type: 'list',
      name: 'employee',
      message: 'Select the employee to update:',
      choices: listEmployee,
    },

    {
      type: 'list',
      name: 'title',
      message: 'Select the tile to update:',
      choices: listTitle,
    },
   
  ])
    console.log(`Updated role for ${response.employee} to ${response.title}`);
    console.log(response);
    await updateEmployeeRole(response.employee, response.title);
}

async function mainMenu() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    },
  ]);

  switch (answers.action) {
    case 'View all departments':
      await getAllDepartments();
      break;
    case 'View all roles':
      await getAllRoles();
      break;
    case 'View all employees':
      await getAllEmployees();
      break;
    case 'Add a department':
      await enterDepartment();
      break;
    case 'Add a role':
      await enterRole();
      break;
    case 'Add an employee':
      await enterEmployee();
      break;
    case 'Update an employee role':
      await enterEmployeeRole();
      break;
    case 'Exit':
      console.log('Goodbye!');
      process.exit();
      break;
    default:
      console.log('Invalid option');
  }


  await mainMenu();
}


mainMenu();

