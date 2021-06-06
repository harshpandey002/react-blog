const post = [
  {
    id: 1,
    title: "lauda",
    category: "entertainment",
    description: "introks",
    like: false,
  },
  { id: 2, title: "df", category: "sports", description: "fdgff", like: false },
  {
    id: 3,
    title: "dsfgdfg",
    category: "health",
    description: "isddgo sdfsks",
    like: false,
  },
  {
    id: 4,
    title: "sdfg",
    category: "business",
    description: "gsdfgofsdks",
    like: false,
  },
  {
    id: 5,
    title: "sdfg",
    category: "programming",
    description: "idfgfooks",
    like: false,
  },
];

let store;

const func = () => {
  store = post.filter((p) => {
    if (p.category === "programming") {
      return p;
    }
  });
};
func();
console.log(store);
// console.log(post);
