// Create an array of student objects
const students = [
  {
    firstName: "Tade",
    lastName: "John",
    age: 19,
    score: 85,
    courses: ["Math", "Physics"],
  },
  {
    firstName: "Chika",
    lastName: "Okafor",
    age: 21,
    score: 92,
    courses: ["Biology", "Chemistry", "English"],
  },
  {
    firstName: "Belo",
    lastName: "Usman",
    age: 18,
    score: 78,
    courses: ["Math", "Economics"],
  },
  {
    firstName: "Grace",
    lastName: "Arowolo",
    age: 20,
    score: 88,
    courses: ["Physics", "Computer Science"],
  },
  {
    firstName: "Chinedu",
    lastName: "Ike",
    age: 22,
    score: 81,
    courses: ["Geography", "Civic Education", "Literature"],
  },
];

// Use destructuring & map to create summary
const studentSummaries = students.map((student) => {
  const { firstName, lastName, age, score, courses } = student;
  return `${firstName} ${lastName} is ${age} years old and scored ${score}. He/She is taking: ${courses.join(", ")}`;
});

// Log each summary to the console using forEach
studentSummaries.forEach((summary, index) => {
  console.log(`Student ${index + 1}:\n${summary}\n`);
});
