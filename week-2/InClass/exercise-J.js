let people = ["Ricardo", "Teresa", "Fran", "Andres"]

function secondMatchesAmy(array) {
  if (array[1]==="Amy") {
    return "Second index matched!";
  }
  return "Second index not matched";
}

console.log(secondMatchesAmy(people));