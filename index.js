import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL: //Realtime databaseURL
}

const app = initializeApp(appSettings) 
const database = getDatabase(app)
// console.log(getDatabase(app))
const moviesDatabase = ref(database, "movies")


const inputFieldElement = document.getElementById("input-field")
const addButtonElement = document.getElementById("add-button")

addButtonElement.addEventListener("click", () => {
    let inputValue = inputFieldElement.value
    push(moviesDatabase, inputValue)
    
    console.log(`${inputValue} added to database`)
})