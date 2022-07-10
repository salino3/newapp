




// Lista panes
 const ListaPanes = [
   { id: 1, tipo: "rosca", precio: 2 },
   { id: 2, tipo: "alcachofa", precio: 1.5 },
   { id: 3, tipo: "candeal", precio: 1 },
   { id: 4, tipo: "trenzas", precio: 1 },
   { id: 5, tipo: "pan de barra", precio: 1 },
   { id: 6, tipo: "payés", precio: 2 },
   { id: 7, tipo: "focaccia", precio: 2 },
   { id: 8, tipo: "pan de molde", precio: 1.5 }
 ];

const tipoPanes = ListaPanes.map(x => x.tipo)
console.log(tipoPanes)

// Lista dulces
const Pasteles = [
  { id: 1, tipo: "tarta de santiago", precio: 4 },
  { id: 2, tipo: "casadielles", precio: 2 },
  { id: 3, tipo: "quesada pasoega", precio: 2 },
  { id: 4, tipo: "fardelejos", precio: 2 },
  { id: 5, tipo: "yema de ávila", precio: 2 },
  { id: 6, tipo: "crema catalana", precio: 3 },
  { id: 7, tipo: "bartolillos", precio: 2 },
  { id: 8, tipo: "pastel cordobés", precio: 4 },
];



export { ListaPanes, Pasteles, tipoPanes };





let lista = [
  { user: "Fran" },
  { user: "Tom" },
  { user: "Sara" },
  { user: "Elena" },
  { user: "Carlos" },
];

let modified = lista.filter((x) => x.user.endsWith("a"));
//
console.log(modified);
//
// buscando el valor de la clave 'user'
let endsA = modified.map((x) => x.user);
console.log(endsA);