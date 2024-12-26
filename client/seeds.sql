insert into employee (firstName, lastName, roleId, managerId, salary)  
         values ('Arthur', 'Miller', 1, 1, 100000),
                ('John', 'Doe', 2, 1, 60000),
                ('Jane', 'Doe', 3, 2, 90000),
                ('Alice', 'Smith', 4, 2, 50000),
                ('Bob', 'Johnson', 5, 3, 120000),
                ('Charlie', 'Brown', 6, 3, 80000),
                ('David', 'Wilson', 7, 4, 80000),
                ('Eve', 'Williams', 8, 4, 50000),
                ('Frank', 'Moore', 9, 5, 90000),
                ('Grace', 'Taylor', 10, 5, 60000),
                ('Helen', 'Anderson', 11, 6, 80000),
                ('Ivy', 'Thomas', 12, 6, 50000),
                ('Jack', 'Jackson', 13, 7, 100000),
                ('Kelly', 'White', 14, 7, 60000),
                ('Larry', 'Harris', 15, 8, 90000),
                ('Molly', 'Martin', 16, 8, 50000),
                ('Nancy', 'Thompson', 17, 9, 100000),
                ('Oscar', 'Garcia', 18, 9, 60000),
                ('Peter', 'Martinez', 19, 10, 120000),
                ('Quinn', 'Robinson', 20, 10, 80000);
INSERT INTO department ( name )
VALUES ('Sales'),
       ('Marketing'),
       ('Engineering'),
       ('Human Resources'),
       ('Finance');
       ('Customer Service');
       ('Legal');
       ('Operations');
       ('Research and Development');
       ('Information Technology');

INSERT INTO role ( title, salary, department_id )
VALUES ('Sales Manager', 100000, 1),
       ('Sales Representative', 60000, 1),
       ('Marketing Manager', 90000, 2),
       ('Marketing Representative', 50000, 2),
       ('Software Engineer', 120000, 3),
       ('Quality Assurance Engineer', 80000, 3),
       ('Human Resources Manager', 80000, 4),
       ('Human Resources Representative', 50000, 4),
       ('Finance Manager', 90000, 5),
       ('Finance Representative', 60000, 5),
       ('Customer Service Manager', 80000, 6),
       ('Customer Service Representative', 50000, 6),
       ('Legal Counsel', 100000, 7),
       ('Legal Assistant', 60000, 7),
       ('Operations Manager', 90000, 8),
       ('Operations Representative', 50000, 8),
       ('Research and Development Manager', 100000, 9),
       ('Research and Development Representative', 60000, 9),
       ('Information Technology Manager', 120000, 10),
       ('Information Technology Representative', 80000, 10);

       