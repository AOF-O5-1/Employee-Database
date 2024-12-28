import client from './connection.js';

interface Department{
    id: number;
    name: string;
}

export async function getDepartments(): Promise<Department[]>{
    const { rows } = await client.query<Department>('SELECT * FROM department'); // This is a type assertion to tell TypeScript what the type of the rows should be 
    return rows;
}

export async function addDepartment(name: string): Promise<void>{
    await client.query('INSERT INTO department (name) VALUES ($1)', [name]);
    console.log('Department added');
}
export async function deleteDepartment(name: string): Promise<void> {
    await client.query('DELETE FROM department WHERE id = $1;', [name]);
    console.log('Department deleted');
  }
  


interface Role{
    id: number;
    title: string;
    salary: number;
    department_id: number;
}
export async function getRoles(): Promise<Role[]>{
    const { rows } = await client.query<Role>('SELECT * FROM role');
    return rows;
}

export async function addRole(title: string, salary: number, departmentId: number): Promise<void>{
    await client.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, departmentId]);
  
}
export async function deleteRole(title: string): Promise<void> {
    await client.query('DELETE FROM role WHERE id = $1;', [title]);
 
  }


interface Employee{
    id: number;
    firstName: string;
    lastName: string;
    roleId: number;
    departmentId: number;
    salary: number;
    managerId: number;
    
}
export async function getEmployees(): Promise<Employee[]> {
    const { rows } = await client.query<Employee>('SELECT * FROM employee');
    console.log('Fetched employees:', rows);
    return rows;
}

export async function addEmployee(firstName: string, lastName: string, roleId: number, salary: number, managerId: number): Promise<void>{
    await client.query('INSERT INTO employee (firstname, lastname, roleid, salary, managerid) VALUES ($1, $2, $3, $4, $5)', [firstName, lastName, roleId, salary, managerId]);
  
}
export async function deleteEmployee(employeeId: number): Promise<void> {
    await client.query('DELETE FROM employee WHERE id = $1;', [employeeId]);
   
  }

