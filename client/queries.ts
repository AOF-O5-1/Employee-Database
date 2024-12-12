import client from './connection.ts';

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


interface Employee{
    id: number;
    first_name: string;
    last_name: string;
    role_id: number;
    department_id: number;
    salary: number;
    manager_id: number;
}
export async function getEmployees(): Promise<Employee[]>{
    const { rows } = await client.query<Employee>('SELECT * FROM employee');
    return rows;
}

export async function addEmployee(firstName: string, lastName: string, roleId: number, departmentId: number, salary: number, managerId: number): Promise<void>{
    await client.query('INSERT INTO employee (first_name, last_name, department_id, role_id, salary, manager_id) VALUES ($1, $2, $3, $4, $5, $6)', [firstName, lastName, roleId, departmentId, salary, managerId]);
}
