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

const gabriela = new Student(
    "Gabriela Alejandra",
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

const carlos = new Student2({
    email: "carlos@platzi.com",
    name: "Carlos",
    age: 28,
    cursosAprobados: [],
});

