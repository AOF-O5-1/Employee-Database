import inquirer from 'inquirer';
import { getDepartments, addDepartment,getRoles,addRole,getEmployees,addEmployee } from './queries';

async function mainMenu(){
    const {action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'Add Department',
            'View All Roles',
            'Add Role',
            'View All Employees',
            'Add Employee',
            'Exit'
        ]
    });

    switch(action){
        case 'View All Departments':
            const departments = await getDepartments();
            console.table(departments);
            break;

        case 'Add Department':
            const {name} = await inquirer.prompt({
                type: 'input',
                name: 'name',
                message: 'Enter the name of the department'
            });
            await addDepartment(name);
            console.log(`Department ${name} added`);
            break;
        case 'View All Roles':
            const roles = await getRoles();
            console.log('View All Roles');
            break;

        case 'Add Role':
            const {title, salary, departmentId} = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'Enter the title of the role'
                },
                {
                    type: 'number',
                    name: 'salary',
                    message: 'Enter the salary of the role'
                },
                {
                    type: 'number',
                    name: 'departmentId',
                    message: 'Enter the department id of the role'
                }
            ]);
            await addRole(title, salary, departmentId);
            console.log(`Role ${title} added`);
            break; 
            
        case 'View All Employees':
            const employees = await getEmployees();
            console.table(employees);
            break;

        case 'Add Employee':
            const {firstName, lastName, roleId, managerId} = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'Enter the first name of the employee'
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: 'Enter the last name of the employee'
                },
                {
                    type: 'number',
                    name: 'roleId',
                    message: 'Enter the role id of the employee'
                },
                {
                    type: 'number',
                    name: 'departmentId',
                    message: 'Enter the department id of the employee'
                },
                {
                    type: 'number',
                    name: 'salary',
                    message: 'Enter the salary of the employee'
                },
                {
                    type: 'number',
                    name: 'managerId',
                    message: 'Enter the manager id of the employee'
                }
            ]);
            await addEmployee(firstName, lastName, roleId, departmentId, salary, managerId);
            console.log(`Employee ${firstName} ${lastName} added`);
            break;

}}
