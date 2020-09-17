import {renderBooks} from "./renderBooks.js";

export function searchBooks(books) {

    const search = document.querySelector(".search");

    search.onkeyup = function() {

        const searchValue = event.target.value.trim().toLowerCase(); 
    
        const filteredBooks = books.filter(function (books) {
            if(books.publisher.toLowerCase().startsWith(searchValue)) {
                return true;
            }

            if(books.author.toLowerCase().startsWith(searchValue)) {
                return true;
            }

        });
    
        renderBooks(filteredBooks);
    } 
}
