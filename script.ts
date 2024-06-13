// Définition de l'interface Employee avec trois propriétés : name, age et salary.
interface Employee {
  name: string;
  age: number;
  salary: number;
}

// Définition de l'interface Manager qui étend Employee, ajoutant deux propriétés supplémentaires : department et numberOfEmployees.
interface Manager extends Employee {
  department: string;
  numberOfEmployees: number;
}

// Définition du type arrayOfEmployees comme un tableau d'objets Employee.
type arrayOfEmployees = Employee[];

// Création d'un objet manager1 de type Manager avec toutes les propriétés requises.
let manager1: Manager = {
  name: "John Doe",
  age: 32,
  salary: 100000,
  department: "Sales",
  numberOfEmployees: 5,
};

// Création d'un objet manager2 de type Manager avec toutes les propriétés requises.
let manager2: Manager = {
  name: "Jane Doe",
  age: 35,
  salary: 120000,
  department: "Marketing",
  numberOfEmployees: 10,
};

// Initialisation d'un tableau employees qui peut contenir des objets de type Employee.
const employees: arrayOfEmployees = [];

// Ajout de manager1 au tableau employees. Comme Manager étend Employee, un objet Manager est un Employee valide.
employees.push(manager1);

// Ajout de manager2 au tableau employees.
employees.push(manager2);

// Affichage du tableau employees dans la console.
console.log(employees);
