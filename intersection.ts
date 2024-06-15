// Définition d'un type 'Person' qui contient deux propriétés : 'name' (une chaîne de caractères) et 'age' (un nombre).
type Person = {
  name: string;
  age: number;
};

// Définition d'un type 'Employee' qui contient deux propriétés : 'company' (une chaîne de caractères) et 'position' (une chaîne de caractères).
type Employee = {
  company: string;
  position: string;
};

// Création d'un nouveau type 'EmployeeWithPersonInfo' qui combine les propriétés de 'Employee' et de 'Person'.
// Le symbole '&' est utilisé pour indiquer l'intersection des types, ce qui signifie que ce type contiendra toutes les propriétés de 'Employee' et de 'Person'.
type EmployeeWithPersonInfo = Employee & Person;

// Création d'une constante 'employee' de type 'EmployeeWithPersonInfo'.
// Cette constante doit avoir toutes les propriétés définies dans les types 'Person' et 'Employee' : 'name', 'age', 'company' et 'position'.
const employee: EmployeeWithPersonInfo = {
  name: "John Doe", // Nom de l'employé
  age: 30, // Âge de l'employé
  company: "ABC Corp", // Entreprise où l'employé travaille
  position: "Software Engineer", // Poste de l'employé
};
