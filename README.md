
# Assignment 5. JavaScript Basics 
 
Name: AIDANA MURATOVA SE-2539 

GitHub Pages link:https://github.com/muratovaajdana201-ctrl/assignment-5-aidana-web
 

## Part 1: Profile Object, Data Types & Arithmetic
 
### Task 1. The Personal Info Object
 
Create a JavaScript const object named userProfile that stores different data types: string (name), number (birthYear), boolean (isDeveloper) and an array (hobbies).
 
I made the userProfile object with const. It has name (string), birthYear (number), isDeveloper (boolean) and hobbies (array with three hobbies).

 

![Task 1](screenaido/task1.png)
 
### Task 2. Arithmetic Calculations
 
Write a script that uses arithmetic operators to calculate the user's current age dynamically. Calculate another metric (months or hobbies count) and display the values in the console or on the page.
 
I wrote the function showProfile(). It takes the current year with new Date().getFullYear() and subtracts birthYear to get the age. Then I multiplied the age by 12 to get the months, and used hobbies.length to count the hobbies. The results are shown in the console and on the page.
 
![Task 2](screenaido/task2.png)
 
## Part 2: Form Input & Event Responses
 
### Task 3. HTML Form Setup
 
Create a simple form or input fields: an input for Username, an input for Birth Year and a "Create / Update Profile" button.
 
I added two inputs (text for username and number for birth year) and the button "Create / Update Profile" in index.html.
 
![Task 3](screenaido/task3.png)
 
### Task 4. Event Listener
 
Add a click or submit event listener to the button. When clicked, capture the user's input values and update the userProfile object.
 
I added a click event listener to the button. When I click it, the code reads the values from both inputs and saves them into userProfile.name and userProfile.birthYear. The birth year comes from the input as a string, so I used Number() to turn it into a number. After that showProfile() runs again and the text on the page changes (and its color becomes purple).
 
![Task 4](screenaido/task4.png)
  
## Part 3: DOM List Manipulation
 
### Task 5. Creating & Removing Elements
 
Create an unordered list (ul) with tasks or hobbies. Create an "Add Item" button that adds a new (li) from user input, and a "Remove Item" button that deletes the last item.
 
I made a (ul) with three hobbies. For the "Add Item" button I take the text from the input, create a new (li) with document.createElement, put the text inside and add it to the list with appendChild. If the input is empty, nothing is added. For the "Remove Item" button I find the last (li) with lastElementChild and delete it with remove().

![Task 5 - add](screenaido/task5_add.png)
 

![Task 5 - remove](screenaido/task5_remove.png)

 
## Conclusion
 
In this assignment I practiced the basics of JavaScript and working with the DOM. I made a small web page with three files: index.html for the structure, style.css for the design (light blue and purple colors) and script.js for all the logic. I did the work part by part and tested each part in the browser before moving to the next one.

Part 1. First I created the userProfile object with const. I used different data types in it: a string for the name, a number for the birth year, a boolean for isDeveloper and an array for the hobbies. After that I wrote the function showProfile(). It gets the current year with new Date().getFullYear(), and then I used arithmetic operators: subtraction to calculate the age and multiplication by 12 to get the months. I also used hobbies.length to count the hobbies. I showed the results in the console with console.log() and on the page with textContent. I put this code inside a function, so I could call it again every time the profile changes and do not repeat the same code.

Part 2. Then I added two input fields (username and birth year) and the button "Create / Update Profile". I took the elements with document.getElementById() and added a click event listener to the button. When the button is clicked, the script reads the value of both inputs and saves them into the userProfile object. The value from an input is always a string, so for the birth year I used Number() (explicit type conversion), otherwise the calculation could work wrong. After the update I call showProfile() again, so the age and months are recalculated, and I also change the text color with element.style.color. This is how I changed the content and the style of the page with JavaScript.

Part 3. In the last part I worked with the list. I made a <ul> with my hobbies and two buttons. The "Add Item" button takes the text from the input, creates a new (li) with document.createElement(), puts the text inside with textContent and adds it to the end of the list with appendChild(). I also added a check, so an empty item cannot be added, and the input field is cleared after adding. The "Remove Item" button finds the last element with lastElementChild and deletes it with remove(). I added a check here too, so nothing breaks if the list is already empty.

What I learned. I understood how JavaScript connects to HTML through the DOM: it can find an element, read data from it, change its text and style, create new elements and delete them. I also learned the difference between const and let, why it is better to use ===, how event listeners work and why values from input fields are strings. The hardest part for me was understanding the string and number types in the inputs and how to create and remove elements. I solved it by testing the code step by step and checking the console for errors.

In the end I uploaded the project to a public GitHub repository and published it with GitHub Pages. The project runs without errors, and all the tasks from the assignment are done.
 

