let currentTime = moment();
let allHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

$('#currentDay).text(moment().format('dddd, MMMM Do YYYY'));
$('#currentTime').text(moment().format('HH'));

// Get sceduled item from local storage, if any
// here we are doing a loop through JSON object in the storage.
for (i = 0; i < allHours.length; i++) {
  let userTasks = localStorage.getItem(JSON.parse('userTasks')) || [];
  $(`.time-block['data-time=${i}"`).val(userTasks.task);
}

// Select all hour-ids equal to the hours in allHours array and saves them in $timeBlock. Check if current time matches the hour in the hourMoment object and add a class to the next element of $timeBlock. The class "present" is added if the current time matches the hour, "past" is added if the current time is before the hour and "future" is added if the current time is after the hour.
function timeComparison() {
  $('.input-group').each(function () {
    let timeBlockHour = parseInt($(this).find('.time-block').attr('hour-id'));
    // Set background color for past, present, and future time blocks
    let textarea = $(this).find('textarea');
    if (timeBlockHour < currentHour) {
      textarea.removeClass('present future').addClass('past');
    } else if (timeBlockHour === currentHour) {
      textarea.removeClass('past future').addClass('present');
    } else {
      textarea.removeClass('present past').addClass('future');
    }
  });
}

// delegate event to the parent to get each button to trigger event
$('.container').on('click', '.saveBtn', function (event) {
  let inputGroupID = event.target.attr('data-time');
  let time = $(`.time-block['data-time=${inputGroupID}"`);
  let userInput = $(`textarea['data-time=${inputGroupID}']`).val();

  // save to local here
  if (!userTasks[inputGroupID]) {
    userTasks[inputGroupID] = {
      time: time,
      task: userInput,
    };
  } else {
    userTasks[inputGroupID].time = time;
    userTasks[inputGroupID].task = task;
  }
  localStorage.setItem('userTasks', JSON.stringify(userTasks));
});

//     //  Button function to clear local storage and clear contents let saveBtn = document.querySelectorAll(".saveBtn"); console.log(currentHour);
$('#clearFieldsBtn').click(function (event) {
  event.preventDefault;
  $('textarea').val('');
});
