class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar() {
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}

function videoPlay(id) {
    const urlSecreta = "https://platzi.com" + id;
}

function videoStop(id) {
    const urlSecreta = "https://platzi.com" + id;
}

class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }

    pausar() {
        videoStop(this.videoID);
    }
}

class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish",
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombrecito) {
        this._name = nuevoNombrecito;
    }
}

const cursoProgBasica = new Course({
    name: "Curso gratis de programacion basica",
    isFree: true,
});

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo HTML y CSS",
});

const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
    lang: "english",
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

const escuelaSoftware = new LearningPath({
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

    publicarComentario(commentContent) { // Aplicamos polimorfismo que viene de la clase Comment.
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}

class FreeEstudiante extends Estudiante{
    constructor(props) {
        super(props); // Con super nos permite llamar al constructor de la clase madre Estudiante.
    }

    approveCourse(newCourse) {
        if(newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos " + this.name + ", solo puedes tomar cursos abiertos");
        }
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}

class BasicEstudiante extends Estudiante{
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if(newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos " + this.name + ", no puedes tomar cursos en ingles");
        }
    }
}

class ExpertEstudiante extends Estudiante{
    constructor(props) {
        super(props);
    }
}

class TeacherEstudiante extends Estudiante{
    constructor(props) {
        super(props);
    }

    approvedCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });
        comment.publicar();
    }
}

const juan = new FreeEstudiante({
    name: "juan",
    username: "juanhn",
    email: "juan@platzi.com",
    facebook: "Juan Molina",
});

const miguel = new BasicEstudiante({
    name: "miguel",
    username: "miguelhn",
    email: "miguel@platzi.com",
    instagram: "miguel30",
    learningPaths: [
        escuelaWeb,
        escuelaSoftware,
    ],
});

const freddy = new TeacherEstudiante({
    name: "freddy",
    username: "freddier",
    email: "f@egp.com",
    instagram: "freddier",
});