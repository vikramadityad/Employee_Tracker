const mysql = require('mysql2/promise');
require('dotenv').config();

let db

async function init() { 
  db = await mysql.createConnection(
  {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });
}



async function getAllDepartments() {
  const [sql] = await db.query('SELECT * FROM department');
  const data = sql.reduce((acc, {id, ...x}) => { acc[id] = x; return acc}, {})
  console.table(data);
  console.log(`Success: Showing all Departments`);
}

async function getAllRoles() {
  const [sql] = await db.query('SELECT role.id,title,salary,name FROM role JOIN department ON role.department_id=department.id');
  const data = sql.reduce((acc, {id, ...x}) => { acc[id] = x; return acc}, {})
  console.table(data);
  console.log(`Success: Showing all Roles`);
}

async function getAllEmployees() {
  const [sql] = await db.query('SELECT employee.id,employee.first_name,employee.last_name,role.title,role.salary,CONCAT(manager.first_name, " " ,manager.last_name) manager_name FROM employee JOIN role ON role.id=employee.role_id LEFT JOIN employee manager ON employee.manager_id=manager.id');
  const data = sql.reduce((acc, {id, ...x}) => { acc[id] = x; return acc}, {})
  console.table(data);
  console.log(`Success: Showing all Employees`);
}

async function addDepartment(name) {
  const sql = await db.query('INSERT INTO department (name) VALUES (?)', [name]);
  return sql;
}

async function addRole(title, salary, department_id) {
  const [result] = await db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, department_id]);
  return result;
}

async function addEmployee(first_name, last_name, role_id, manager_id) {
  const [result] = await db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [first_name, last_name, role_id, manager_id]);
  return result;
}

async function updateEmployeeRole(employee_id, role_id) {
  const sql = await db.query('UPDATE employee SET role_id=? WHERE id=?', [role_id, employee_id]);
  return sql;
}

async function listEmployee() {
  const [employees] = await db.query('SELECT id value, CONCAT(employee.first_name, " ", employee.last_name) name FROM employee');
  return employees;

}

async function listTitle() {
  const [titles] = await db.query('SELECT id value, title name FROM role');
  return titles;
}


module.exports = {db, init, listTitle, listEmployee, getAllDepartments, getAllRoles, getAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole };