const accountID = 144553
let accountEmail = "abhishekpawar@gmail.com"
var accountPassword = "12345"
accountCity = "Bijnor"


// accountID = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "2223222"
accountCity = "Bengaluru"


console.log(accountID);

/*
Prefer not to use var
because of issue in block scope and scope */


console.table([accountID, accountEmail,accountPassword,accountCity]) 


