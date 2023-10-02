INSERT INTO department (name)
VALUES
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Legal');

INSERT INTO role (id, title, department_id, salary)
VALUES
  (1, 'Sales Lead', 1, 100000),
  (2, 'Salesperson', 1, 80000),
  (3, 'Lead Engineer', 2, 150000),
  (4, 'Software Engineer', 2, 120000),
  (5, 'Account Manager', 3, 160000),
  (6, 'Accountant', 3, 125000),
  (7, 'Legal Team Lead', 4, 250000),
  (8, 'Lawyer', 4, 190000);

INSERT INTO employee (id, first_name, last_name, title, department, salary, manager)
VALUES
  (1, 'John', 'Doe', 'Sales Lead', 'Sales', 100000, NULL),
  (2, 'Mike', 'Chan', 'Salesperson', 'Sales', 80000, 'John Doe'),
  (3, 'Ashley', 'Rodriguez', 'Lead Engineer', 'Engineering', 150000, NULL),
  (4, 'Kevin', 'Tupik', 'Software Engineer', 'Engineering', 120000, 'Ashley Rodriguez'),
  (5, 'Kunal', 'Singh', 'Account Manager', 'Finance', 160000, NULL),
  (6, 'Malia', 'Brown', 'Accountant', 'Finance', 125000, 'Kunal Singh'),
  (7, 'Sarah', 'Lourd', 'Legal Team Lead', 'Legal', 250000, NULL),
  (8, 'Tom', 'Allen', 'Lawyer', 'Legal', 190000, 'Sarah Lourd');
