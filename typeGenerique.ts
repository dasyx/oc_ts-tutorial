// Définition d'un type générique 'Shop' qui accepte un type paramétré 'T'.
// Le paramètre 'T' est un paramètre générique qui permet au type 'Shop' d'être flexible
// et de fonctionner avec n'importe quel type d'articles. Par exemple, 'T' peut être un string, un boolean, un number, etc.
type Shop<T> = {
  name: string; // Le nom du magasin
  items: T[]; // Une liste d'articles de type T, où T est le type générique fourni lors de l'utilisation de 'Shop'
};

// Création d'un magasin de fruits en utilisant le type générique 'Shop' avec le type 'string'.
const fruitShop: Shop<string> = {
  name: "Fruit Shop", // Le nom du magasin
  items: ["apple", "banana", "orange"], // La liste des fruits, ici des strings
};

// Création d'un magasin de légumes en utilisant le type générique 'Shop' avec le type 'string'.
const vegetableShop: Shop<string> = {
  name: "Vegetable Shop", // Le nom du magasin
  items: ["carrot", "broccoli", "spinach"], // La liste des légumes, ici des strings
};

// Création d'un magasin de valeurs booléennes en utilisant le type générique 'Shop' avec le type 'boolean'.
const booleanShop: Shop<boolean> = {
  name: "Boolean Shop", // Le nom du magasin
  items: [true, false, true], // La liste des valeurs booléennes, ici des booleans
};

// Création d'un magasin de nombres en utilisant le type générique 'Shop' avec le type 'number'.
const numberShop: Shop<number> = {
  name: "Number Shop", // Le nom du magasin
  items: [1, 2, 3], // La liste des nombres, ici des numbers
};

// Exemple d'utilisation : Affichage des informations des différents magasins dans la console.
console.log(fruitShop); // Affiche les informations du magasin de fruits
console.log(vegetableShop); // Affiche les informations du magasin de légumes
console.log(booleanShop); // Affiche les informations du magasin de valeurs booléennes
console.log(numberShop); // Affiche les informations du magasin de nombres
