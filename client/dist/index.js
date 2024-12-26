"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const queries_1 = require("./queries");
function mainMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        const { action } = yield inquirer_1.default.prompt({
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
                const departments = yield (0, queries_1.getDepartments)();
                console.table(departments);
                break;
            }
            case 'Add Department': {
                const { name } = yield inquirer_1.default.prompt({
                    type: 'input',
                    name: 'name',
                    message: 'Enter the name of the department:',
                });
                yield (0, queries_1.addDepartment)(name);
                console.log(`Department "${name}" added successfully.`);
                break;
            }
            case 'Delete Department': {
                const departments = yield (0, queries_1.getDepartments)();
                const departmentChoices = departments.map((d) => ({ name: d.name, value: d.id }));
                const { departmentId } = yield inquirer_1.default.prompt({
                    type: 'list',
                    name: 'departmentId',
                    message: 'Select a department to delete:',
                    choices: departmentChoices,
                });
                yield (0, queries_1.deleteDepartment)(departmentId);
                console.log('Department deleted successfully.');
                break;
            }
            case 'View All Roles': {
                const roles = yield (0, queries_1.getRoles)();
                console.table(roles);
                break;
            }
            case 'Add Role': {
                const departments = yield (0, queries_1.getDepartments)();
                const departmentChoices = departments.map((d) => ({ name: d.name, value: d.id }));
                const { title, salary, departmentId } = yield inquirer_1.default.prompt([
                    { type: 'input', name: 'title', message: 'Enter the role title:' },
                    { type: 'number', name: 'salary', message: 'Enter the salary for this role:' },
                    {
                        type: 'list',
                        name: 'departmentId',
                        message: 'Select the department for this role:',
                        choices: departmentChoices,
                    },
                ]);
                yield (0, queries_1.addRole)(title, salary, departmentId);
                console.log(`Role "${title}" added successfully.`);
                break;
            }
            case 'Delete Role': {
                const roles = yield (0, queries_1.getRoles)();
                const roleChoices = roles.map((r) => ({ name: r.title, value: r.id }));
                const { roleId } = yield inquirer_1.default.prompt({
                    type: 'list',
                    name: 'roleId',
                    message: 'Select a role to delete:',
                    choices: roleChoices,
                });
                yield (0, queries_1.deleteRole)(roleId);
                console.log('Role deleted successfully.');
                break;
            }
            case 'View All Employees': {
                const employees = yield (0, queries_1.getEmployees)();
                console.table(employees);
                break;
            }
            case 'Add Employee': {
                const roles = yield (0, queries_1.getRoles)();
                const employees = yield (0, queries_1.getEmployees)();
                const departments = yield (0, queries_1.getDepartments)();
                const departmentChoices = departments.map((d) => ({ name: d.name, value: d.id }));
                const employeeChoices = employees.map((e) => ({ name: `${e.first_name} ${e.last_name}`, value: e.id }));
                const roleChoices = roles.map((r) => ({ name: r.title, value: r.id }));
                const { firstName, lastName, roleId, departmentId, salary, managerId } = yield inquirer_1.default.prompt([
                    { type: 'input', name: 'firstName', message: 'Enter the first name of the employee:' },
                    { type: 'input', name: 'lastName', message: 'Enter the last name of the employee:' },
                    { type: 'list', name: 'roleId', message: 'Select the role for this employee:', choices: roleChoices },
                    { type: 'list', name: 'departmentId', message: 'Select the department for this employee:', choices: departmentChoices },
                    { type: 'number', name: 'salary', message: 'Enter the salary for this employee:' },
                    { type: 'number', name: 'managerId', message: 'Enter employee manager ID number: ', choices: employeeChoices },
                ]);
                yield (0, queries_1.addEmployee)(firstName, lastName, roleId, salary, managerId);
                console.log(`Employee "${firstName} ${lastName}" added successfully.`);
                break;
            }
            case 'Delete Employee': {
                const employees = yield (0, queries_1.getEmployees)();
                const employeeChoices = employees.map((e) => ({ name: `${e.first_name} ${e.last_name}`, value: e.id }));
                const { employeeId } = yield inquirer_1.default.prompt({
                    type: 'list',
                    name: 'employeeId',
                    message: 'Select an employee to delete:',
                    choices: employeeChoices,
                });
                yield (0, queries_1.deleteEmployee)(employeeId);
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
        yield mainMenu();
    });
}
mainMenu().catch((err) => console.error(err));
