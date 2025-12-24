const students = [
    "Ayodele Obaloluwa",
    "Ayodele Akorede",
    "Orchi Grace",
    "Samuel Peter"
];

const list = document.getElementById("studentList");

students.forEach(student => {
    const li = document.createElement("li");
    li.textContent = student;
    list.appendChild(li);
});
