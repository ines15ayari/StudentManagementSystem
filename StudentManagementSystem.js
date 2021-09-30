
var numberOfStudents=0;
var full;
// function addStudent() {
//     return numberOfStudents++;
//    }
//    console.log(numberOfStudents) 
//    addStudent()
//    console.log(numberOfStudents) 
//    addStudent()
//    console.log(numberOfStudents)

   function getNumberOfStudents() {
    return numberOfStudents;
   }
//    getNumberOfStudents() 
//    addStudent()
//    getNumberOfStudents() 

   const students=[];
   // function addStudent(name) {    
   //   return students.push(name) ;
   // }
   // console.log(students)
   // addStudent('Josh')
   // console.log(students) 
   // addStudent('John')
   // console.log(students)
   // addStudent('salim')
   // console.log(students)
   // addStudent('sirine')
   // console.log(students)
   // addStudent('ines')
   // console.log(students)
   
   function clearStudents(name) {
       return students.length=0; 
    }
   
   console.log(students) 
   getNumberOfStudents() 
   clearStudents()
   console.log(students)
   getNumberOfStudents() 

   function addStudent(name){
      numberOfStudents+= 1;
      students += name;
      return console.log(students);

   }
   function createFullName(firstName, lastName){
      return `${firstName} ${lastName}`;
   }
   function addStudent (firstName, lastName){
      numberOfStudents+=1 ;
      students.push(createFullName);
      return console.log(students);
      }

      
