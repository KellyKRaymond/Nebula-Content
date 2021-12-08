class Teacher {
    constructor(name, grade, subject, school){
        this.name = name
        this.grade = grade
        this.subject = subject
        this.school = school
    }
    teacherSay(){
        console.log(`hi i am your teacher ${this.name}`)

    }
    teacherDo(){
        console.log('I am grading papers')
    }
}
class Teacher extends Students {
    constructor(name, grade, subject, school, favSubject){
        super(name, grade, subject, school)
        this.favSubject = favSubject
    }
    studentSay(){
        console.log('I showed up for class today!')
    }
}

class Teacher extends Classroom {
    constructor(name, grade, subject, school, supplies, assignments)
    super(name, grade, subject, school){
    this.supplies = supplies
    this.assignments = this.assignments
    }
    supplyList(){
        console.log(supplyList.supplies)
    }
}
