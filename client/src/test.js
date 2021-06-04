const post = [
  { id: 1, title: "lauda", description: "introduction to react hooks" },
  { id: 2, title: "df", description: "fdgsfgsdf" },
  { id: 3, title: "dsfgdfg", description: "isdfgdfgoks" },
  { id: 4, title: "sdfg", description: "gsdfgooks" },
  { id: 5, title: "sdfg", description: "idfgsdfsdooks" },
];

const result = post.filter((p) => p.id !== 5);

console.log(result);
// console.log(post);
