let pinNumber = 1234;
let choice;

do{
    console.log("Welcome to SBI Bank");
    console.log("1. Balance Enquiry");
    console.log("2. Withdraw");
    console.log("3. Deposit");
    console.log("4. Exit");
    choice = parseInt(prompt("Enter your PIN Number:"));
    
    if(choice === 4){
        console.log("Exiting the program.");
        break;
    }

    else if(choice !== 1234){
        console.log("Invalid PIN number. Please try again.");
        break;
    }
    
    else{
       
        switch (choice) {
            case 1:
                choice = parseInt(prompt("Enter the pin Number:"));
                console.log("Balance enquiry: You can implement your balance here");
                break;
    
            case 2:
                choice =parseFloat(prompt("Enter the pin Number:"));
                console.log("Withdraw");
                break;
    
            case 3:
                choice =parseFloat(prompt("Enter the pin Number:"));
                console.log("Deposit");
                break;
            
            default:
                console.log("Invalid choice.Please try again.");
        }
    }

    
}
while (choice !== 4);
    

    

    