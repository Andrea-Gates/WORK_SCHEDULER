// Get Current date and display it in the jumbotron

$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// Set variables for time blocks
 const rows = $(".row");
 const hours = $(".hour");
 const past = $(".past");
 const present = $(".present");
 const future = $(".future");

// let parent = $(this).parents (".row");
// let timeId = parseInt(parent.attribute("id"));


// const timeBlock = $(".time-block");
// const saveButton = $(".saveBtn");
// const hourItem = $(".id");
// const userTask = $(".description");

// timeBlock.each(function() {
//  if (timeId<currentMoment) {
//   $(this).addClass("past");
//   } else if (timeId===currentMoment) {
//     $(this).removeClass ("past");
//     $(this).addClass("present");
//   } else {
//     $(this).removeClass("past");
//     $(this).removeClass("present");
//     $(this).addClass("future");
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
      $("#clearFieldsBtn").click(function (event) {
        event.preventDefault;
        $("textarea").val("");
        localStorage.clear();
     });