let currentTime = moment();
let allHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
$("#currentTime").text(moment().format("HH"));

// Get sceduled item from local storage, if any
// here we are doing a loop through JSON object in the storage.
for (i = 0; i < allHours.lenght; i++) {
  let userTasks = localStorage.getItem(JSON.parse("userTasks")) || [];
  $(`".time-block['data-time=${i}"`).val(userTasks.task);
}

// Select all hour-ids equal to the hours in allHours array and saves them in $timeBlock. Check if current time matches the hour in the hourMoment object and add a class to the next element of $timeBlock. The class "present" is added if the current time matches the hour, "past" is added if the current time is before the hour and "future" is added if the current time is after the hour.
let currentHour = moment().format("HH");

function timeComparison() {
  $(".input-group").each(function () {
    let timeBlockHour = parseInt($(this).find(".time-block").attr("hour-id"));
    // Set background color for past, present, and future time blocks
    console.log("timeblockhour ", timeBlockHour);
    console.log("currenthour ", currentHour);

    let textarea = $(this).find("textarea");
    if (timeBlockHour < currentHour) {
      textarea.removeClass("present future").addClass("past");
    } else if (timeBlockHour === currentHour) {
      textarea.removeClass("past future").addClass("present");
    } else {
      textarea.removeClass("present past").addClass("future");
    }
  });
}
timeComparison();

// change the icon of the save button from a circle to a check mark when the user saves an event to the local storage
const saveBtns = document.querySelectorAll(".saveBtn");

saveBtns.forEach((saveBtn) => {
  const textarea = saveBtn.parentElement.querySelector(".form-control");
  const icon = saveBtn.querySelector("i");

  saveBtn.addEventListener("click", () => {
    const inputValue = textarea.value.trim();

    if (inputValue !== "") {
      // Save the input value to local storage
      localStorage.setItem(textarea.id, inputValue);
      icon.classList.remove("fa-circle");
      icon.classList.add("fa-check");
    }
  });
});

// sets data to the val of teh textarea, so that these values can be retrieved from local storage
const textareaIds = [
  "hour09",
  "hour10",
  "hour11",
  "hour12",
  "hour13",
  "hour14",
  "hour15",
  "hour16",
  "hour17",
];

textareaIds.forEach((textareaId) => {
  const textarea = document.querySelector(`#${textareaId} .form-control`);
  const icon = document.querySelector(`#${textareaId} .saveBtn i`);

  const savedValue = localStorage.getItem(textareaId);

  if (savedValue) {
    textarea.value = savedValue;
    icon.classList.remove("fa-circle");
    icon.classList.add("fa-check");
  }
});

//  Button function to clear local storage and clear contents
$("#clearFieldsBtn").click(function (event) {
  event.preventDefault();
  $("textarea").val("");
  localStorage.clear();
});
