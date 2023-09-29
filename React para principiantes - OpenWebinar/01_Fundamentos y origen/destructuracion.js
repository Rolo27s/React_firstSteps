console.log("Destructuración")
const user = {
    name: "Álvaro",
    surname: "Yuste",
    courses: ["Introduction to React", "React Intermediate", "React Advanced"]
};

// Extract attributes from object param
const getFullName = ({ name, surname }) => `${name} ${surname}`;
console.log("getFullName:", getFullName(user));

// Destructure object into another
const newUser = {
    ...user,
    name: "Raquel"
};

console.log("newUser:", newUser);

// Extract and rename object attributes
const {  name: newName } = newUser;
console.log("newName:", newName);

// Extract array items
const [firstCourse, ...otherCourses] = newUser.courses;
console.log("firstCourse:", firstCourse);
console.log("otherCourses:", otherCourses);

// Shorten object key assignments
const newObject = { newName, firstCourse };
console.log("newObject:", newObject);

// Destructure params of a function
const sum = (...nums) => nums.reduce((total,num) => total + num, 0);

console.log("sum:", sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

console.log("------------------------")
console.log("------------------------")