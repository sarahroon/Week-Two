const car = {
  make: "Toyota",
  model: "Prius",
  colour: "Red",
  advert() {
   return `For sale: ${this.colour} ${this.make} ${this.model}`;
  }
};

console.log(car.advert());

// "For sale: Red Toyota Prius"
