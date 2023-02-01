let currentTime = moment();
let allHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

document.querySelector("#currentDay").textContent = moment().format("dddd, MMMM Do YYYY");
document.querySelector("#currentTime").textcontent = moment().format("HH");

// Select all hour-ids equal to the hours in allHours array and saves them in $timeBlock. Check if current time matches the hour in the hourMoment object and add a class to the next element of $timeBlock. The class "present" is added if the current time matches the hour, "past" is added if the current time is before the hour and "future" is added if the current time is after the hour.

function timeComparison() {

  let currentTime = moment().hour();

$.each(allHours, function () {
  let hourId = parseInt(this);
  let hourMoment = moment().hour(hourId);
  let $timeBlock = $(`[hour-id=${hourId}]`);
  if (hourMoment.isSame(currentTime, 'hour')) {
    $timeBlock.next().addClass("present");
  } else if (hourMoment.isBefore(currentTime, 'hour')) {
    $timeBlock.next().addClass("past");
  } else if (hourMoment.isAfter(currentTime, 'hour')) {
    $timeBlock.next().addClass("future");
  }
});
}

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