import inquirer from 'inquirer';
import {
    getDepartments,
    addDepartment,
    deleteDepartment,
    getRoles,
    addRole,
    deleteRole,
    getEmployees,
    addEmployee,
    deleteEmployee,

} from './queries';

async function mainMenu() {
    const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'Add Department',
            'Delete Department',
            'View All Roles',
            'Add Role',
            'Delete Role',
            'View All Employees',
            'Add Employee',
            'Delete Employee',
            'Exit',
        ],
    });

    switch (action) {
        case 'View All Departments': {
            const departments = await getDepartments();
            console.table(departments);
            break;
        }

        case 'Add Department': {
            const { name } = await inquirer.prompt({
                type: 'input',
                name: 'name',
                message: 'Enter the name of the department:',
            });
            await addDepartment(name);
            console.log(`Department "${name}" added successfully.`);
            break;
        }

        case 'Delete Department': {
            const departments = await getDepartments();
            const departmentChoices = departments.map((d: any) => ({ name: d.name, value: d.id }));
            const { departmentId } = await inquirer.prompt({
                type: 'list',
                name: 'departmentId',
                message: 'Select a department to delete:',
                choices: departmentChoices,
            });
            await deleteDepartment(departmentId);
            console.log('Department deleted successfully.');
            break;
        }

        case 'View All Roles': {
            const roles = await getRoles();
            console.table(roles);
            break;
        }

        case 'Add Role': {
            const departments = await getDepartments();
            const departmentChoices = departments.map((d: any) => ({ name: d.name, value: d.id }));
            const { title, salary, departmentId } = await inquirer.prompt([
                { type: 'input', name: 'title', message: 'Enter the role title:' },
                { type: 'number', name: 'salary', message: 'Enter the salary for this role:' },
                {
                    type: 'list',
                    name: 'departmentId',
                    message: 'Select the department for this role:',
                    choices: departmentChoices,
                },
            ]);
            await addRole(title, salary, departmentId);
            console.log(`Role "${title}" added successfully.`);
            break;
        }

        case 'Delete Role': {
            const roles = await getRoles();
            const roleChoices = roles.map((r: any) => ({ name: r.title, value: r.id }));
            const { roleId } = await inquirer.prompt({
                type: 'list',
                name: 'roleId',
                message: 'Select a role to delete:',
                choices: roleChoices,
            });
            await deleteRole(roleId);
            console.log('Role deleted successfully.');
            break;
        }

        case 'View All Employees': {
            const employees = await getEmployees();
            console.table(employees);
            break;
        }

        case 'Add Employee': {
            const roles = await getRoles();
            const employees = await getEmployees();
            const departments = await getDepartments();
            const departmentChoices = departments.map((d: any) => ({ name: d.name, value: d.id }));
            const employeeChoices = employees.map((e: any) => ({ name: `${e.first_name} ${e.last_name}`, value: e.id }));
            const roleChoices = roles.map((r: any) => ({ name: r.title, value: r.id }));

            const { firstName, lastName, roleId, departmentId, salary, managerId } = await inquirer.prompt([
                { type: 'input', name: 'firstName', message: 'Enter the first name of the employee:' },
                { type: 'input', name: 'lastName', message: 'Enter the last name of the employee:' },
                { type: 'list', name: 'roleId', message: 'Select the role for this employee:', choices: roleChoices },
                { type: 'list', name: 'departmentId', message: 'Select the department for this employee:', choices: departmentChoices },
                { type: 'number', name: 'salary', message: 'Enter the salary for this employee:' },
                { type: 'number', name: 'managerId', message: 'Enter employee manager ID number: ', choices: employeeChoices },
            ]);

            await addEmployee(firstName, lastName, roleId, salary, managerId);
            
            console.log(`Employee "${firstName} ${lastName}" added successfully.`);
            break;
        }

        case 'Delete Employee': {
            const employees = await getEmployees();
            const employeeChoices = employees.map((e: any) => ({ name: `${e.first_name} ${e.last_name}`, value: e.id }));
            const { employeeId } = await inquirer.prompt({
                type: 'list',
                name: 'employeeId',
                message: 'Select an employee to delete:',
                choices: employeeChoices,
            });
            await deleteEmployee(employeeId);
            console.log('Employee deleted successfully.');
            break;
            
            
        }


           

        case 'Exit': {
            console.log('Exiting application.');
            process.exit();
        }

        default:
            console.log('Invalid option.');
            break;
    }

    // Restart the menu after an action
    await mainMenu();
}

mainMenu().catch((err) => console.error(err));