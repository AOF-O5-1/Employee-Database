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
exports.getDepartments = getDepartments;
exports.addDepartment = addDepartment;
exports.deleteDepartment = deleteDepartment;
exports.getRoles = getRoles;
exports.addRole = addRole;
exports.deleteRole = deleteRole;
exports.getEmployees = getEmployees;
exports.addEmployee = addEmployee;
exports.deleteEmployee = deleteEmployee;
const connection_js_1 = __importDefault(require("./connection.js"));
function getDepartments() {
    return __awaiter(this, void 0, void 0, function* () {
        const { rows } = yield connection_js_1.default.query('SELECT * FROM department'); // This is a type assertion to tell TypeScript what the type of the rows should be 
        return rows;
    });
}
function addDepartment(name) {
    return __awaiter(this, void 0, void 0, function* () {
        yield connection_js_1.default.query('INSERT INTO department (name) VALUES ($1)', [name]);
        console.log('Department added');
    });
}
function deleteDepartment(name) {
    return __awaiter(this, void 0, void 0, function* () {
        yield connection_js_1.default.query('DELETE FROM department WHERE id = $1;', [name]);
        console.log('Department deleted');
    });
}
function getRoles() {
    return __awaiter(this, void 0, void 0, function* () {
        const { rows } = yield connection_js_1.default.query('SELECT * FROM role');
        return rows;
    });
}
function addRole(title, salary, departmentId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield connection_js_1.default.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, departmentId]);
    });
}
function deleteRole(title) {
    return __awaiter(this, void 0, void 0, function* () {
        yield connection_js_1.default.query('DELETE FROM role WHERE id = $1;', [title]);
    });
}
function getEmployees() {
    return __awaiter(this, void 0, void 0, function* () {
        const { rows } = yield connection_js_1.default.query('SELECT * FROM employee');
        console.log('Fetched employees:', rows);
        return rows;
    });
}
function addEmployee(firstName, lastName, roleId, salary, managerId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield connection_js_1.default.query('INSERT INTO employee (firstname, lastname, roleid, salary, managerid) VALUES ($1, $2, $3, $4, $5)', [firstName, lastName, roleId, salary, managerId]);
    });
}
function deleteEmployee(employeeId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield connection_js_1.default.query('DELETE FROM employee WHERE id = $1;', [employeeId]);
    });
}
