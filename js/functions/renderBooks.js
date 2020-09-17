export function renderBooks(books) {
    const bookContainer = document.querySelector(".book-container");

    bookContainer.innerHTML = "";

    books.forEach(book => {
        console.log(book.title);
    
        bookContainer.innerHTML += `
                                    <div class="book-container__book">
                                        <h4>${book.title}</h4>
                                        <div>by ${book.author}</div>
                                        <small>published by ${book.publisher}</small>
                                    </div>
            `
    });

}