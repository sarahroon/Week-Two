console.log("JavaScript is linked!");

console.log("Hello world!");

const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
};

console.log(person);

console.table(person);

const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
};

console.log(person.name);

console.log(person.age);

console.log(person.favouriteColour);

const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
};

person.favouriteFood = "pizza";

console.log(person.favouriteFood);

const blogPost = {
  title: "My first blog post",
  author: {
    name: "Bob",
    age: 30,
    favouriteColour: "red",
  };
  tags: ["coding", "javascript", "objects", "arrays"],
  content: "This is my blog post about learning objects and arrays.",
};

console.log(blogPost.author.name);

console.log(blogPost.tags[0]);

console.log(blogPost.tags.length);

console.log(
  `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`
);
for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]);
}

console.log(`Tags for post "${blogPost.title}":`);
for (let tag of blogPost.tags) {
  console.log(tag);
}


