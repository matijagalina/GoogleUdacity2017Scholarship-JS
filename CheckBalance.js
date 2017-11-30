/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
let balance = 0;
let checkBalance = true;
let isActive = true;

if (checkBalance === false) {
    console.log("Thank you. Have a nice day!");
} else {
    if (isActive === false) {
        console.log("Your account is no longer active.");
    } else if (balance > 0) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    } else if (balance === 0) {
        console.log("Your account is empty.");
    } else {
        console.log("Your balance is negative. Please contact bank.");
    }
}
