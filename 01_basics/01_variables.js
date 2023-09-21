const accountId = 144553
let accountEmail = 'bholu@gmail.com'
var accountCity = "Lucknow"
accountPassword = "12345" //you should not use it
let accountState;


console.table([accountId, accountEmail, accountCity, accountPassword])

// accountId = 2  not allowed in javascript

accountEmail = "lelo@gmail.com"
accountPassword = "678910"
accountCity = "noida"

console.table([accountId, accountEmail, accountCity, accountPassword, accountState])


/*
prefer not to use var
because of issue in block scope and functional Scope
 */