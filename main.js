
//Innitialize a Book class
class Book{
    constructor(title, authur, isbn){
        this.title = title;
        this.authur = authur;
        this.isbn = isbn;
    }
}

//UI class: this will track DoM changes e.g. alert,display of dom changes,
class UI{
    static displayBooks(){
        const storeBooks = [
            {title: "Book one",
             author: "achebe",
             isbn: "3455"
            },
            {title: "Book two",
             author: "achebe",
             isbn: "3455"
            },
            {title: "Book three",
             author: "achebe",
             isbn: "3455"
            },
            {title: "Book four",
             author: "achebe",
             isbn: "3455"
            }
        ];

        const books = storeBooks;

        books.forEach((book)=>{
            UI.addBookToList(book);
        })
    }

    //Another method to display books
    static addBookToList(book){
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">x</a></td>
        `;
        list.appendChild(row);
    }

    static deleteBooK(e){
        if(e.classList.contains('delete')){
            e.parentElement.parentElement.remove();
        }        
    }
           
}

//events to display books
document.addEventListener('DOMContentLoaded', UI.displayBooks)

//Events to add a book

//Events to remove a book

document.querySelector('#book-list').addEventListener('click', (e)=>{
    UI.deleteBooK(e.target);
})