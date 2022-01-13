class Course {
    constructor({
        name,
        classes,
    }){
        this.name = name;
        this.classes = classes;
    }
}

const cursoProgBasica = new Course({
    name: "Curso gratis de programacion basica",
});

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo HTML y CSS",
});

const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
});

class LearningPath {
    constructor ({
        name, 
        courses = [],
    }){
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
});

const escuelaVideojuegos = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgBasica,
        "Curso de Unity",
        "Curso de Unreal",
    ],
});

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo de software",
    courses: [
        cursoProgBasica,
        "Curso de C++",
        "Curso de redes",
    ],
});

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