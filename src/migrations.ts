import connection from "./connection";

const printError = (error: any) => {
  console.log(error.sqlMessage || error.message);
};

const createTables = () =>
  connection
    .raw(
      `
      CREATE TABLE IF NOT EXISTS student (
         id INT NOT NULL PRIMARY KEY,
         nome VARCHAR(255) NOT NULL,
         email VARCHAR(255) NOT NULL UNIQUE,
         data_nasc DATE NOT NULL
      );
      CREATE TABLE IF NOT EXISTS teacher (
        id INT NOT NULL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        data_nasc DATE NOT NULL
     );
     CREATE TABLE IF NOT EXISTS class (
        id INT NOT NULL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        data_inicio DATE NOT NULL,
        data_final DATE NOT NULL,
        modulo INT NOT NULL
     );

    CREATE TABLE teatcher_class(
      class_id INT,
      teacher_id INT,
      FOREIGN KEY(class_id) REFERENCES class (id),
      FOREIGN KEY (teacher_id) REFERENCES teacher(id)
    );
    
    SELECT * FROM teatcher_class
    JOIN class ON class_id = class.id
    JOIN teacher ON teacher_id = teacher.id;
    
    CREATE TABLE student_class(
      class_id INT,
      student_id INT,
      FOREIGN KEY(class_id) REFERENCES class (id),
      FOREIGN KEY (student_id) REFERENCES student(id)
    );
    
    SELECT * FROM student_class
    JOIN class ON class_id = class.id
    JOIN student ON student_id = student.id;
   `
    )
    .then(() => {
      console.log("Tabelas criadas");
    })
    .catch(printError);

const closeConnection = () => {
  connection.destroy();
};

createTables().then().finally(closeConnection);
