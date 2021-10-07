import app from "./app";
import createStudent from "./endpoints/createStudent";
import createTeacher from "./endpoints/createTeacher";
import getAllStudents from "./endpoints/getAllStudents";

app.get("/students", getAllStudents);
app.post("/students", createStudent);
app.post("/teachers", createTeacher);
