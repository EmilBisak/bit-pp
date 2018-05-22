var dataModule = (function () {

    var data = {
        listOfPassedStudents: [],
        listOfFailedStudents: []
    }

    function Student(studentData) {
        this.subject = studentData.$subject;
        this.name = studentData.$name;
        this.grade = studentData.$grade;
    }

    function makeStudent(studentData) {
        var student = new Student(studentData);
        return student;
    }
    function addStudentToList(student) {
        if (student.grade > 5) {
            data.listOfPassedStudents.push(student);
        } else {
            data.listOfFailedStudents.push(student);
        }
        return {
            listOfPassedStudentsLength: data.listOfPassedStudents.length,
            listOfFailedStudentsLength: data.listOfFailedStudents.length,
        }
    }

    return {
        makeStudent: makeStudent,
        data: data,
        addStudentToList: addStudentToList,
    }


})();

var uiModule = (function () {

    function collectData() {
        var $inputSubject = $('#subject');
        var $inputName = $('#name');
        var $inputGrade = $('#grade');

        var $subject = $inputSubject.val();
        var $name = $inputName.val();
        var $grade = $inputGrade.val();

        var formInputData = {
            $subject: $subject,
            $name: $name,
            $grade: $grade
        }

        return formInputData;
    }

    return {
        collectData: collectData,


    }

})();

var mainModule = (function (data, ui) {


    function setupEventListeners() {
        $('#add-btn').on('click', createStudent);


        function createStudent(event) {
            var student = data.makeStudent(ui.collectData());
            var list = data.addStudentToList(student);
            console.log(list);
            console.log(student);


        }

    }

    function init() {
        setupEventListeners()
    }
    return {
        init: init,
    }

})(dataModule, uiModule)

