function boolChecker(bool) {
  if (typeof bool === Boolean) {
    return "You've given me a bool, thanks!";
  }

  return "No bool, not cool.";
}

console.log(boolChecker(true));