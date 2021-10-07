import app from "./app";
import getAllStudents from "./endpoints/getAllStudents";

app.get("/", getAllStudents);
