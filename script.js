// Initialize reading lists
let toReadList = [];
let currentlyReadingList = [];
let finishedList = [];

// Function to submit user information
function submitUserInfo() {
    const name = document.getElementById("name").value;
    const year = document.getElementById("year").value;
    const department = document.getElementById("department").value;

    if (name && year && department) {
        alert(`Welcome, ${name}! You are in year ${year} of ${department}.`);
    } else {
        alert("Please fill out all fields.");
    }
}

// Function to add a book to the respective list
function addBook(listType) {
    let bookInput;
    if (listType === 'to-read') {
        bookInput = document.getElementById('to-read-input');
    } else if (listType === 'currently-reading') {
        bookInput = document.getElementById('currently-reading-input');
    } else if (listType === 'finished') {
        bookInput = document.getElementById('finished-input');
    }

    const bookTitle = bookInput.value.trim();
    if (bookTitle) {
        if (listType === 'to-read') {
            toReadList.push(bookTitle);
            updateListDisplay('to-read-list', toReadList);
        } else if (listType === 'currently-reading') {
            currentlyReadingList.push(bookTitle);
            updateListDisplay('currently-reading-list', currentlyReadingList);
        } else if (listType === 'finished') {
            finishedList.push(bookTitle);
            updateListDisplay('finished-list', finishedList);
        }
        bookInput.value = ''; // Clear input after adding
    } else {
        alert("Please enter a book title.");
    }
}

// Function to update the displayed list
function updateListDisplay(listId, list) {
    const listElement = document.getElementById(listId);
    listElement.innerHTML = ''; // Clear existing items
    list.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book; // Add book title
        listElement.appendChild(li); // Append to list
    });
}

// Function to share a review
function shareReview() {
    const reviewText = document.getElementById("review-text").value.trim();
    const reviewList = document.getElementById("review-list");

    if (reviewText) {
        const li = document.createElement('li');
        li.textContent = reviewText; // Add review text
        reviewList.appendChild(li); // Append to review list
        document.getElementById("review-text").value = ''; // Clear review input
    } else {
        alert("Please write a review before sharing.");
    }
}
