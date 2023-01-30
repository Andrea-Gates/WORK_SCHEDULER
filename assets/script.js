// Get Current date and display it in the jumbotron
let currentDay = $("#currentDay");
currentDay.text (moment().format('dddd, MMM Do YYYY'));


// Get sceduled item from local storage, if any
$("#hour9 .description").val(localStorage.getItem("09"));
$("#hour10 .description").val(localStorage.getItem("10"));
$("#hour11 .description").val(localStorage.getItem("11"));
$("#hour12 .description").val(localStorage.getItem("12"));
$("#hour13 .description").val(localStorage.getItem("13"));
$("#hour14 .description").val(localStorage.getItem("14"));
$("#hour15 .description").val(localStorage.getItem("15"));
$("#hour16 .description").val(localStorage.getItem("16"));
$("#hour17 .description").val(localStorage.getItem("17"));

timeTracker();


    //  Button function to clear local storage and clear contents
     $("#clearFieldsBtn").click(function (event) {
       event.preventDefault;
       $("textarea").val("");
       localStorage.clear();
    });