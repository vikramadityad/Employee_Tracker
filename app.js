const inquirer = require('inquirer');
const {getAllDepartments , getAllRoles, getAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./db/db.js');

// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database: ', err);
//     return;
//   }
//   console.log(`Connected to th/e employeetracker database.`);
// });

// const mainPrompt =[

//   {
//     type: 'list',
//     message: 'what you like to do?',
//     name: 'title',
//     choices: [getAllEmployees(), enterEmployee(), enterEmployeeRole(), getAllRoles(), enterRole(), getAllDepartments(), enterDepartment() ]
// }
// ];

// function init() {
//   inquirer.prompt(mainPrompt).then((response) => {
//        console.log(response);
//     })
//       .catch((error) => {
//           console.error(error);
//       });
// }

// init();

function enterDepartment() {
inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the name of the department:',
    },
  ]).then((response)=> {

    console.log(`Added department: ${response.name}`);
    addDepartment(response.name);
  
  }).catch((error) => {
    console.error(error);
});
}


async function enterRole() {
  const answers = await inquirer.prompt([
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
      name: 'department',
      message: 'Enter the department for the role:',
    },
  ]).then((response)=> {

    console.log(`Added title: ${answers.title}, Salary: ${answers.salary}, Department: ${answers.department}`);
    addRole(response.title, response.salary, response.department);
  
  }).catch((error) => {
    console.error(error);
});
}

async function enterEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'Enter the first name of the employee:',
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'Enter the last name of the employee:',
    },
    {
      type: 'input',
      name: 'role',
      message: 'Enter the role of the employee:',
    },
    {
      type: 'input',
      name: 'manager',
      message: 'Enter the manager of the employee (if applicable):',
    },
  ]).then((response)=> {

    console.log(`Added Employee: 
  First Name: ${response.firstName}, Last Name: ${response.lastName}, Role: ${response.role}, Manager: ${response.manager || 'None'}`);
    addEmployee(response.firstName, response.lastName, response.role, response.manager);
  
  }).catch((error) => {
    console.error(error);
});
}



async function enterEmployeeRole() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'employeeName',
      message: 'Enter the name of the employee to update:',
    },
    {
      type: 'input',
      name: 'newRole',
      message: 'Enter the new role for the employee:',
    },
  ]).then((response)=> {

    console.log(`Updated role for ${answers.employeeName} to ${answers.newRole}`);
    updateEmployeeRole(response.employeeName, response.newRole);
  
  }).catch((error) => {
    console.error(error);
});;
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

  // Perform the selected action
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


  // mainMenu();
}


mainMenu();

