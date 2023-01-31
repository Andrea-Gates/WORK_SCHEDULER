let currentTime = moment().hour();
let twentyFourHour = [9, 10, 11, 12, 13, 14, 15, 16, 17];

document.querySelector("#currentDay").textContent = moment().format("dddd, MMMM Do YYYY");

document.querySelector("#currentTime").textcontent = moment().format("HH");

// loops through time blocks and compares the id value (hour) with the hour of the current time 

function timeComparison () {   
  $.each(allHours, function (i) {
  let hourId = parseInt($(this).attr("id"));
  if (hourId === currentTime) {
    $(this).next().addClass("present");
   } else if (hourId < currentTime) {
         $(this).next().addClass("past");
       } else if (hourId > currentTime) {
         $(this).next().addClass("future");
       }
     });
 }
 
// function timeComparison(){
//   for (let i = 0; i < 9; i++) {
//   if (currentHour === twentyFourHour[i]) {
//   console.log(i);
//   document.getElementById(i).classList.add("present");
//   }
//   else if (currentHour > twentyFourHour[i]) {
//   console.log(i);
//   document.getElementById(i).classList.add("past");
//   }
//   else (currentHour < twentyFourHour[i]{    console.log(i);
//   document.getElementById(i).classList.add("future");
//   }
//  }

// Get sceduled item from local storage, if any
 $("#hour09 .description").val(localStorage.getItem("09"));
 $("#hour10 .description").val(localStorage.getItem("10"));
 $("#hour11 .description").val(localStorage.getItem("11"));
 $("#hour12 .description").val(localStorage.getItem("12"));
 $("#hour13 .description").val(localStorage.getItem("13"));
 $("#hour14 .description").val(localStorage.getItem("14"));
 $("#hour15 .description").val(localStorage.getItem("15"));
 $("#hour16 .description").val(localStorage.getItem("16"));
 $("#hour17 .description").val(localStorage.getItem("17"));

//     //  Button function to clear local storage and clear contents
 let saveBtn = document.querySelectorAll(".saveBtn");
 console.log(currentHour);

     $("#clearFieldsBtn").click(function (event) {
        event.preventDefault;
        $("textarea").val("");
        localStorage.clear();
     });