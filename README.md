Module 7 challenge - Work Day Scheduler

Using moment.js and jquery, I wanted to make an attractive single-page time-sensitive dailt to-do list. Every time it was opened, it would display the current date, and a container with 8 time blocks in which to schedule tasks hourly from 9am to 5pm inclusive.

The time blocks would appear color coded depending upon whether that time block's hour-id was < the current hour (past), = to the current hour (present) or > the current hour (future), the time block's textarea would then be determined in the CSS by the class .past, .present, or .future.

Tasks entered into the time blocks would be saved by each block's save button (at right), and be stored to local storage when the to-do list (such as it had ben entered) could then be retrieved and printed to console.

At the bottom I included a clear-fields button, which would do just that, unilaterally.

Features
Display of current day at the top of the calender when a user opens the planner.

Timeblocks for standard business hours when the user scrolls down.

Color-coding for each timeblock based on past, present, and future (i.e., conpared to when the timeblock is viewed).

Text fields where user can enter event.

Save button for each time block, which, when clicked, will save the task to local storage.

Persist events between refreshes of a page (some sort of prevent.default).

A clear-fields button to clear all time-block fields as needed.

---
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
