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
