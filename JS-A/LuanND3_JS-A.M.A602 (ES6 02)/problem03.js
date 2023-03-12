const persons = [
  {
    id: 1,
    name: "Dung",
    age: 20,
  },
  {
    id: 2,
    name: "Diu",
    age: 20,
  },
  {
    id: 3,
    name: "Ky",
    age: 20,
  },
  {
    id: 1,
    name: "Hai",
    age: 22,
  }
];

const uniquePersons = persons.reduce(
  (acc, curr) => {
    if (!acc.map.has(curr.id)) {
      acc.map.set(curr.id, true);
      acc.arr.push(curr);
    }
    return acc;
  },
  {
    map: new Map(),
    arr: [],
  }
).arr;

console.log(uniquePersons);
