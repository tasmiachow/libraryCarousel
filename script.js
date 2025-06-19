const myLibrary =[];
const container = document.querySelector(".carasoul");
const backButton = document.querySelector("#back");
const forwardButton = document.querySelector("#forward");

function Book(title, author, pages, read){
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title; 
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        let infoString = (this.title + " by " + this.author + ", " + this.pages.toString() + ', ' + 
            (this.read ? "read": "not read yet")
        );
        return infoString
    };
}


function addBookToLibrary(book){
    myLibrary.push(book);
    const card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card);


}

function backDisplay(e){

};

function forwardDisplay(e){

};

backButton.addEventListener("click", ()=>{

})


const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(book1.info());

