// Création d'un objet manager1 de type Manager avec toutes les propriétés requises.
var manager1 = {
    name: "John Doe",
    age: 32,
    salary: 100000,
    department: "Sales",
    numberOfEmployees: 5,
};
// Création d'un objet manager2 de type Manager avec toutes les propriétés requises.
var manager2 = {
    name: "Jane Doe",
    age: 35,
    salary: 120000,
    department: "Marketing",
    numberOfEmployees: 10,
};
// Initialisation d'un tableau employees qui peut contenir des objets de type Employee.
var employees = [];
// Ajout de manager1 au tableau employees. Comme Manager étend Employee, un objet Manager est un Employee valide.
employees.push(manager1);
// Ajout de manager2 au tableau employees.
employees.push(manager2);
// Affichage du tableau employees dans la console.
console.log(employees);
