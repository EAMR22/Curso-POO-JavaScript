const natalia = { // Es un objeto literal.
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso práctico de HTML y CSS",
    ],

    //Métodos:
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito); // this hace referencia al objeto natalia
    },
}; 

// Hacer que natalia apruebe otro curso:

// natalia.cursosAprobados.push("Curso de Responsive Design");

function Student(name, age, cursosAprobados) { // Es un prototipo
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

    // Es una forma de crear un método
    /*aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito); // this hace referencia al objeto natalia
    },*/
}

// Otra forma de crear un método

Student.prototype.aprobarCurso = function (nuevoCursito){
    this.cursosAprobados.push(nuevoCursito); // this hace referencia al objeto natalia
}

// Crear instacias del objeto

const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de introducción a la producción de videojuegos",
        "Curso de creación de personajes",
    ],
);

// Prototipos con la sintaxis de clases:

class Student2 {
    constructor({
        name, 
        age, 
        email,
        cursosAprobados = [],
    }) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    // Creando el método
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
};

const miguelito = new Student2({
    email: "miguelito@platzi.com",
    name: "Miguelito",
    age: 28,
    cursosAprobados: [],
});

// Clase de ventajas de poo

class Estudiante {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const elvis2 = new Estudiante({
    name: "elvis",
    username: "elvishn",
    email: "elvis@platzi.com",
    facebook: "Elvis Molina",
});

const miguel = new Estudiante({
    name: "miguel",
    username: "miguelhn",
    email: "miguel@platzi.com",
    instagram: "miguel30",
});