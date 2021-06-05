const post = [
  { id: 1, title: "lauda", description: "introks", like: false },
  { id: 2, title: "df", description: "fdgff", like: false },
  { id: 3, title: "dsfgdfg", description: "isddgo sdfsks", like: false },
  { id: 4, title: "sdfg", description: "gsdfgofsdks", like: false },
  { id: 5, title: "sdfg", description: "idfgfooks", like: false },
];

const result = post.map((p) => {
  if (p.id == 3) {
    p.like = true;
    return p;
  } else {
    return p;
  }
});

console.log(result);
// console.log(post);
