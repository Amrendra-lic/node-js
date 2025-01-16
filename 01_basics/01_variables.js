const accountId = 123456
let accountEmail = "Amrendra987sinha"
var accountPassword = "123"
accountCity = "Mumbai"
let accountState
// accountId = 2 // Not allowed
// accountState is undefined
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope

*/
console.log(accountEmail)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])