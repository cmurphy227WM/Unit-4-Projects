"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Connor Murphy
   Date: 3/11/20  
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/
window.onload = init;

function init(){
   //changes mouse to pointer and lights up stars when hovered over
   var stars = document.querySelectorAll("span#stars img");
   for (var i = 0; i < stars.length; i++){
      stars[i].style.cursor = "pointer";
      stars[i].addEventListener("mouseenter", lightStars)
   }
   //updates word count for comment on keyup
   document.getElementById("comment").addEventListener("keyup", updateCount)
}

function lightStars(e){
   //lights up certain amount of stars based on amount you are hovering over
   var starNumber = e.target.alt;
   var stars = document.querySelectorAll("span#stars img");
   for (var i = 0; i < starNumber; i++){
      stars[i].src = "bw_star2.png";
   }
   for (var i = starNumber; i < 5; i++){
      stars[i].src = "bw_star.png";
   }
   //leaves stars lit on click when unhovered
   document.getElementById("rating").value = starNumber + " stars";
   e.target.addEventListener("mouseleave", turnOffStars);
   e.target.addEventListener("click", 
      function(e){
         e.target.removeEventListener("mouseleave", turnOffStars);
      }
   );

}  
function turnOffStars(){
   //changes stars back to unlit
   var stars = document.querySelectorAll("span#stars img");
   for (var i = 0; i < stars.length; i++){
      stars[i].src = "bw_star.png";
   }
   document.getElementById("rating").value = "";
}
function updateCount(){
   //updates the letter count and changes style when value exceeds 1000
   var commentText = document.getElementById("comment").value;
   var charCount = countCharacters(commentText);
   var wordCountBox = document.getElementById("wordCount")
   document.getElementById("wordCount").value = charCount + "/1000";
   if(charCount > 1000){
      wordCountBox.style.backgroundColor = "red";
      wordCountBox.style.color = "white";
   }
   else{
      wordCountBox.style.backgroundColor = "white";
      wordCountBox.style.color = "black";
   }
}
  
  
  
/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   