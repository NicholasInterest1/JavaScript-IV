// CODE here for your Lambda Classes

class Person {
    constructor(parent) {
        this.newName = parent.name;
        this.newAge = parent.age;
        this.newLocation = parent.location;
    }

    speak() {
        console.log(` Hello, my name is ${this.newName}, I am from ${this.newLocation}!`)
    }

}

class Instructors extends Person {
    constructor(subject) {
        super(subject);
        this.newSpecialty = child.specialty;
        this.newFaveLanguage = child.faveLanguage;
        this.newCatchPhrase = child.catchPhrase;
    }
    demo() {
        console.log(`Today, we are learning about ${this.subject}`)
    }
    grade() {
        console.log(`${Student.newName} receives a perfect score on ${this.subject}.`)
    }
}

class Student extends Instructors {
    constructor(grandChild) { 
        super();
        this.newPreviousBackground = grandChild.previousBackground;
        this.newClassName = grandChild.className;
        this.newFaveSubjects = grandChild.faveSubjects;
    }
        listSubjects(){
            for(var i = 0; i < this.favSubjects.length; i++){
                  console.log(this.favSubjects[i]);
            }
    PRAssignment() 
        console.log(`${Student.newName} has submitted a PR for ${this.subject}`);
    }
    sprintChallenge() {
        console.log(`${Student.newName} has begun sprint challenge on ${this.subject}.`)
    }
}

class ProjectManager extends Student{
    constructor(greatGrandChild) {
        super();
        this.newGradClassName = greatGrandChild.gradClassName;
        this.newFaveInstructor = greatGrandChild.faveInstructor;
    }
    standUp(slack) {
        console.log(`${this.newName} announces to ${slack}, @channel: Standy Times!`);
    }
    debudgsCode() {
        console.log(`${this.newName} debugs ${Students.newName}'s code ${subject}. `);
    }
}

    const fred = new Instructor ({
        name: "Fred",
        age: 32,
        location: "Bedrock",
    });

    const jackie = new Instructor ({
        name: "Jackie",
        age: 32,
        location: "Melbourne",
    });

    const jackie = new Student ({
        name: "Devin",
        age: 24,
        location: "Austin",
    });