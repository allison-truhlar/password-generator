const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = ""
let password2 = ""
let passwordArray = []
let passwordLength = 15
let passwordEl1 = document.getElementById("password-el1")
let passwordEl2 = document.getElementById("password-el2")

function resetPasswords(){
    password1 = ""
    password2 = ""
    passwordArray = [password1, password2]
}

function generatePasswords(){
    
    resetPasswords()
    
    // For i < passwordArray length. First time through will build password1, second time through will build password2
    for (let i = 0; i < passwordArray.length; i++){

        // For i <= passwordLength
        for (let j = 1; j <= passwordLength; j++){

        // Index = random number, multiply by length of characters, floor. Use this to select a random characters[index]
        let randomIndex = Math.floor(Math.random() * characters.length)
        
        // password += characters[randomIndex]
        passwordArray[i] += characters[randomIndex]
        
        }
    }
    
    passwordEl1.textContent = passwordArray[0]
    passwordEl2.textContent = passwordArray[1]
    
}

// Stretch goals for later:
// Ability to set password length
// Add "copy-on-click" functionality
// Ability to toggle inclusion of numbers and symbols on/off
