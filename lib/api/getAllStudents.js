export async function getAllStudents() {
  let result = await fetch("http://localhost:4444/api/v1/students");

  return result.json();
}

export async function getStudent(reg) {
  let result = await fetch(`http://localhost:4444/api/v1/students/${reg}`);

  return result.json();
}
