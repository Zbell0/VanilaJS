const students = [
  {
    id: 1,
    name: 'peter',
    score: 80,
    favoriteSubject: 'math',
  },
  {
    id: 2,
    name: 'john',
    score: 40,
    favoriteSubject: 'history',
  },
  {
    id: 3,
    name: 'susan',
    score: 80,
    favoriteSubject: 'math',
  },
  {
    id: 4,
    name: 'olie',
    score: 90,
    favoriteSubject: 'art',
  },
  {
    id: 5,
    name: 'jack',
    score: 50,
    favoriteSubject: 'math',
  },
];

// #### updatedStudents

// 1. add role:'student' property to each object
//    using MAP method
// 2. assign to 'updatedStudents' variable and log

const updatedStudents = students.map((student) => {
  student.role = 'student';
  return student;
});

// // // #### highScores

// // // 1. filter array and return only scores >= 80
// // // 2. assign to 'highScores' variable and log

const highScores = students.filter((student) => {
  return student.score >= 80;
});

console.log(highScores);

// // #### specificId

// // 1. find specific id in array
// // 2. assign to 'specificId' variable and log

const specificId = students.find((student) => {
  return student.id === 2;
});

// // #### averageScore

// // 1. sum up all student.score values with reduce
// // 2. divide by the length of the students array
// // 3. assign to 'averageScore' and log

const averageScore =
  students.reduce((acc, curr) => {
    return acc + curr.score;
  }, 0) / students.length;

console.log(averageScore);

// #### survey

// 1. list favorite subjects with reduce
//    {
//    english: 1
//    history: 1
//    math: 3
//    }
// 2. assign to survey and log

const subject = 'art';
const total = {};
total[subject] = 'some';
console.log(total);

const survey = students.reduce((survey, student) => {
  const favSubject = student.favoriteSubject;
  if (survey[favSubject]) {
    survey[favSubject] = survey[favSubject] + 1;
  } else {
    survey[favSubject] = 1;
  }
  return survey;
}, {});

console.log(survey);
