const book = {
  title: "JavaScriptCookbook",
  author: "ShelleyPowers",
  numberofPages: "634",
  advert() {
   return `For sale: ${this.title} ${this.author} ${this.numberofPages}`;
  }
};

console.log(car.advert());

// "For sale: title JavaScriptCookbook author ShelleyPowers number of pages 634"
