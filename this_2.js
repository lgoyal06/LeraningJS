const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  }
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character)  //.call();
 
//How Would you fix this?
console.log('?', giveMeTheCharacterNOW());
