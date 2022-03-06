function userchecker(userName, userType) {
    const firstLetter = userName.charAt(0);
    const userLength = userName.length;
    const isValidLength = userLength >= 5 && userLength <=10;
    const isASuperUser = userType === "admin" || userType === "manager"

    if (isASuperUser || (firstLetter=== userName.charAt(0).toUpperCase() && isValidLength)){
        return "Username valid";
    }
    else {
        return "Username invalid"
    }
}

console.log(userchecker("Vanessa", "admin"));