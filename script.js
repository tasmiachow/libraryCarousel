const myLibrary =[];
let currentCard =0;
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
};


function addBookToLibrary(book){
    myLibrary.push(book);
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = myLibrary.length -1;
    card.textContent = book.info();
    container.appendChild(card);
    updateDisplay()

};

function backDisplay(e){
    if (currentCard>0){
         currentCard -= 1;
         updateDisplay()
    }
    else{
        alert("Hey you're back at the beginning of the library. Press foward");
    }
};

function forwardDisplay(e){
    if(currentCard < myLibrary.length -1){
        currentCard+=1;
        updateDisplay()
    }
    else{
        alert("Hey this is the end of the library try adding more books and refreshing!");
    }
};

backButton.addEventListener("click", ()=>{
    backDisplay();
});

forwardButton.addEventListener("click", ()=>{
    forwardDisplay();
});


//hide other cards only show currentCard
function updateDisplay(e){
    for(let i=0; i<myLibrary.length; i++){
        document.getElementById(i.toString()).classList.add('hidden');
    }
    document.getElementById(currentCard.toString()).classList.remove('hidden');
};

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const book2 = new Book("Harry Potter", "J.K rowling", 395, true);
const book3 = new Book("Pheonix King", "Aparma Verma", 500, true);
console.log(book1.info());

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

