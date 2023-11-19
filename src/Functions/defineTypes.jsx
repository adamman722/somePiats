export function getColorForPokemonTag(type) {
  let colorPattlet = "";

  switch (type) {
    case "noraml":
      colorPattlet = " #A8A878  ";
      break;
    case "fire":
      colorPattlet = " #F08030  ";
      break;
    case "water":
      colorPattlet = " #6890F0  ";
      break;
    case "fighting":
      colorPattlet = " #C03028  ";
      break;
    case "flying":
      colorPattlet = " #A890F0  ";
      break;
    case "grass":
      colorPattlet = " #78C850  ";
      break;
    case "poison":
      colorPattlet = " #A040A0  ";
      break;
    case "electric":
      colorPattlet = " #F8D030  ";
      break;
    case "ground":
      colorPattlet = " #E0C068  ";
      break;
    case "psychic":
      colorPattlet = " #F85888  ";
      break;
    case "rock":
      colorPattlet = " #B8A038  ";
      break;
    case "ice":
      colorPattlet = " #98D8D8  ";
      break;
    case "bug":
      colorPattlet = " #A8B820  ";
      break;
    case "dragon":
      colorPattlet = " #7038F8";
      break;
    case "ghost":
      colorPattlet = " #705898  ";
      break;
    case "dark":
      colorPattlet = " #705848  ";
      break;
    case "steel":
      colorPattlet = " #B8B8D0  ";
      break;
    case "fairy":
      colorPattlet = " #EE99AC  ";
      break;
    default:
      colorPattlet = " #68A090  ";
      break;
  }

  return colorPattlet;
}
