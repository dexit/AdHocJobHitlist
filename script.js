// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

jQuery(document).ready(function($) {
  // setting up the "hours" variable to hold all hours i wish to have available for entries
  var hours = ["12-am","1-am","2-am","3-am","4-am","5-am","6-am","7-am","8-am","9-am", "10-am", "11-am", "12-pm", "1-pm", "2-pm", "3-pm", "4-pm", "5-pm", "6-pm", "7-pm", "8-pm", "9-pm", "10-pm", "11-pm"];
  // Setting up the allButtons variable, and it selects with help of jquery a css selector of all timeblocks and their buttons, may be called a wildcard, or a wide selector.
  var allButtons = $('.time-block button');


  // This is showing the current day in full day name format "dddd"
function updateTime(magic){
  // create a function to grab the selector to use.
    var headerDayInfo = $(magic);
    //headerDayInfo.text(dayjs().format('dddd, MMMM YYYY - h:mm:ss a'));
    headerDayInfo.text(dayjs().format('dddd'));
   }
  //setInterval(updateTime, 1000);
updateTime('#currentDay');


 

// The below sourced from : https://gomakethings.com/how-to-get-all-siblings-of-an-element-until-a-selector-is-found-with-vanilla-js/
var getNextUntil = function (elem, selector) {

  // Setup siblings array and get next sibling
  var siblings = [];
  var next = elem.nextElementSibling;

  // Loop through all siblings
  while (next) {

    // If the matching item is found, quit
    if (selector && next.matches(selector)) break;

    // Otherwise, push to array
    siblings.push(next);

    // Get the next sibling
    next = next.nextElementSibling

  }

  return siblings;

};
// end of external sourced code

// The below sourced from : https://gomakethings.com/how-to-get-all-siblings-of-an-element-until-a-selector-is-found-with-vanilla-js/
var getPreviousUntil = function (elem, selector) {

  // Setup siblings array and get previous sibling
  var siblings = [];
  var prev = elem.previousElementSibling;

  // Loop through all siblings
  while (prev) {

    // If the matching item is found, quit
    if (selector && prev.matches(selector)) break;

    // Otherwise, push to array
    siblings.push(prev);

    // Get the previous sibling
    prev = prev.previousElementSibling

  }

  return siblings;

};
// end of external sourced code

//console.log(dayjs().format('ha'));
  $.each(hours, function(index, value ) {


    var theHourSplit = value.split('-');
    var hourNow = dayjs().format('h-a');
    var timetraveled = '';

    var thehtmlContent = '';
    if(hourNow === value){ 
      timetraveled = 'present';
    }

    thehtmlContent += '<div id="hour-'+ theHourSplit[0] +'" class="row time-block '+ timetraveled +' index-' + index + '">';
    thehtmlContent += '<div class="col-2 col-md-1 hour text-center py-3">'+ value.toUpperCase()  +'</div>';
    thehtmlContent += '<textarea class="col-8 col-md-10 description" rows="3"> </textarea>';
    thehtmlContent += '<button class="col-2 col-md-1 saveBtn btn btn-primary">  <i class="fas fa-save" aria-hidden="true"></i></button>';
    thehtmlContent += '</div>';
    //console.log(thehtmlContent);
    $(".container-fluid.px-5").append(thehtmlContent);
    
    if(index === (hours.length - 1)) {
      var targeto = document.querySelector(".present");
    $.each(getPreviousUntil(targeto) , function(index, value ) {
      $(this).addClass('past');
    });
    $.each( getNextUntil(targeto) , function(index, value ) {
      $(this).addClass('future');
    });
 
}else{
  // have pitty on my soul :D
}
});

  allButtons.on('click', function() {
    var text = $(this).siblings('.description').val();
    var parentTime = $(this).parent().attr('id');
    localStorage.setItem(parentTime, text);
   // console.log(text);
    console.log(parentTime);
    console.log( localStorage.getItem(parentTime));
  });

 
});
//$(function () {
  // TODO: Add a listener for click events on the save button.
  // This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

//});
