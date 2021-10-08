import app from "./app";
import createStudent from "./endpoints/createStudent";
import createTeacher from "./endpoints/createTeacher";
import createClass from "./endpoints/createClass";

// CRIAR ALUNO
app.post("/students", createStudent);
// CRIAR PROFESSOR
app.post("/teachers", createTeacher);
// CRIAR TURMA
app.post("/classes", createClass);
