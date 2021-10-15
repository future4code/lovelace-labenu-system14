import app from "./app";
import createStudent from "./endpoints/createStudent";
import createTeacher from "./endpoints/createTeacher";
import createClass from "./endpoints/createClass";
import AddTeacher from "./endpoints/AddTeacher";
import addStudents from "./endpoints/addStudents";
import searchAgeByID from "./endpoints/searchAgeByID"
// CRIAR ALUNO
app.post("/students", createStudent);
// CRIAR PROFESSOR
app.post("/teachers", createTeacher);
// CRIAR TURMA
app.post("/classes", createClass);

// ADICIONAR PROFESSOR NA TURMA
app.put("/teachers",AddTeacher)

//ADICONAR ALUNO NA Turma
app.put("/students",addStudents)

//Mostra idade do Estudante por ID
app.get("/student/:id", searchAgeByID)
