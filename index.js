console.log('This is Project 2 wlecome');

// Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display() {
    
}


// Add methods to display prototype
Display.prototype.add = function (book) {
    console.log("adding To UI");
    let tableBody = document.getElementById("tableBody");
    let uiString = `
            <tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
            </tr> `;
    tableBody.innerHTML += uiString;
 }



Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}


Display.prototype.validate = function (book) {
    if(book.name.length<3 || book.author.length<3){
        return false;
    }else{
        return true; 
    }
}

Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById("message");
    message.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>Message: </strong> ${displayMessage}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    setTimeout(function() {
        message.innerHTML=``;
    }, 3000);
}


// add submit Event listener to form
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);


function libraryFormSubmit(e) {
    console.log("You have submitted");
    let name = document.getElementById("bookName").value;
    console.log(name);
    
    let author = document.getElementById("Author").value;
    let type;

    let fiction = document.getElementById("Fiction");
    let programming = document.getElementById("Programming");
    let cooking = document.getElementById("Cooking");

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();


    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show("success","Your Book has been successfully added");
    }else{
        display.show('danger',"Sorry, You cannot add this book");
    }



    e.preventDefault();
}