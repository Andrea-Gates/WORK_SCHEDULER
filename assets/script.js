let displayDate = document.getElementById("currentDay");
let currentDay = moment().format("DDDD");
let currentHour = moment().format("HH");
let NowMoment = moment().format("MMMM dd YYYY");


$(document).ready(function () {
    //Moment.js code for current date and time
    let NowMoment = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = NowMoment;
    let currentHour = moment().format("HH");
  
    // Button function to clear local storage and clear contents
    $("#clearFieldsBtn").click(function (event) {
      event.preventDefault;
      $("textarea").val("");
      localStorage.clear();
    });
  
    //grabs hour from each time slot and compares it to actual time
    $(".time-div").each(function () {
       timeDiv = $(this).attr("id").split("-")[1];
      
      if (currentHour == timeDiv) {
        $(this).addClass("present");
        $(this).children(".description").addClass("white-text");
      } else if (currentHour < timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("future");
      } else if (currentHour > timeDiv) {
        $(this).removeClass("future");
        $(this).addClass("past");
      }
    });
  
    // user inputs schedule item and clicks the blue tab with circle icon, which changes it to a grey tab with a check icon

    $(".saveBtn").click(function () {
      addEventListener()
      
      // Change save tab with either an event listener in js, "on click" or submit addClass()
    });

    //grabs values from time and value divs and saves them to local storage
    $(".saveBtn").click(function (event) {
      event.preventDefault();
      let value = $(this).siblings(".time-block").val();
      let time = $(this).parent().attr("id").split("-")[1];
      localStorage.setItem(time, value);
    });
  
    //retrieves items from local storage and sets them in proper places
    $("#hour-09 .time-block").val(localStorage.getItem("09"));
    $("#hour-10 .time-block").val(localStorage.getItem("10"));
    $("#hour-11 .time-block").val(localStorage.getItem("11"));
    $("#hour-12 .time-block").val(localStorage.getItem("12"));
    $("#hour-13 .time-block").val(localStorage.getItem("13"));
    $("#hour-14 .time-block").val(localStorage.getItem("14"));
    $("#hour-15 .time-block").val(localStorage.getItem("15"));
    $("#hour-16 .time-block").val(localStorage.getItem("16"));
    $("#hour-17 .time-block").val(localStorage.getItem("17"));
  });

 
// * Present timeblocks for standard business hours when the user scrolls down.
 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
// * Allow a user to enter an event when they click a timeblock

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page

// The following animation demonstrates the application functionality:

// ![A user clicks on slots on the color-coded calendar and edits the events.](./images/05-third-party-apis-homework-demo.gif)

/**
 * DEFINE VARIABLES
 */

// let saveBtn = $(".saveBtn");

// /**
//  * FUNCTIONS
//  */

// // current day is displayed at the top of the calendar
// $("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// // each time block is color-coded to indicate whether it is in the past, present, or future
// function timeBlockColor() {
//   let hour = moment().hours();

//     $(".time-block").each(function() {
//         let currHour = parseInt($(this).attr("id"));

//         // console.log(this); //each time-block

//         if (currHour > hour) {
//             $(this).addClass("future");
//         } else if (currHour === hour) {
//             $(this).addClass("present");
//         } else {
//             $(this).addClass("past");
//         }
//     })
// };

// // WHEN I click the save button for that time block
// saveBtn.on("click", function() {

//     // console.log(this); //save button
//     let time = $(this).siblings(".hour").text();
//     let plan = $(this).siblings(".plan").val();

//     // THEN the text for that event is saved in local storage
//     localStorage.setItem(time, plan);
// });

// // WHEN I refresh the page
// // THEN the saved events persist
// function usePlanner() {

//     $(".hour").each(function() {
//         let currHour = $(this).text();
//         let currPlan = localStorage.getItem(currHour);

//         // console.log(this);
//         // console.log(currHour);

//         if(currPlan !== null) {
//             $(this).siblings(".plan").val(currPlan);
//         }
//     });
// }

// /**
//  * CALL FUNCTIONS
//  */

// timeBlockColor();
// usePlanner();


// $( function() {
//     $( "#selectable" ).selectable();
//   } );
//   </script>