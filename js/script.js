import {url} from "./constants/constants.js";
import {renderBooks} from "./functions/renderBooks.js";
import {searchBooks} from "./functions/searchBooks.js";
import {displayMessage} from "./functions/displayMessage.js";

async function getAPI() {

    try {
        const response = await fetch(url);
        const results = await response.json(); 
        const books = results.data;

        console.log(books);

        renderBooks(books);   
        searchBooks(books);

    } catch(error) {
        console.log(error);
        displayMessage("error", error, ".book-container");
    }
}

getAPI();

