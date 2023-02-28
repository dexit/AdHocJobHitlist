// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

jQuery(document).ready(function($) {
  var hours = ["9-am", "10-am", "11-am", "12-pm", "1-pm", "2-pm", "3-pm", "4-pm", "5-pm", "6-pm", "7-pm", "8-pm", "9-pm", "10-pm", "11-pm"];
  var allButtons = $('.time-block button');
 
 function updateTime(){
  var headerDayInfo = $('#currentDay');
  headerDayInfo.text(dayjs().format('dddd, MMMM YYYY - h:mm:ss a'));
 }
setInterval(updateTime, 1000);


function updateTimeBlockByHour () {
  var currhourfromdayjs = dayjs().format('h a');
  $('.time-block').each(function() {
    var currentHour = $(this).attr('id').split('-');
    if (currentHour[0] === currhourfromdayjs) {
      $(this).toggleClass('present');
    }else if(currentHour[0] < currhourfromdayjs){
      $(this).toggleClass('past');
    }else{
      $(this).toggleClass('future');
    }
  });
}
  setInterval(updateTimeBlockByHour, 5000);

console.log(dayjs().format('h a'));
  $.each(hours, function(index, value ) {

    //console.log(HourNow);

    var thehour = value.split('-');
 
    var thehtmlContent = '';
    thehtmlContent += '<div id="hour-'+ thehour[0] +'" class="row time-block">';
    thehtmlContent += '<div class="col-2 col-md-1 hour text-center py-3">'+ thehour[0]  + thehour[1].toUpperCase()  +'</div>';
    thehtmlContent += '<textarea class="col-8 col-md-10 description" rows="3"> </textarea>';
    thehtmlContent += '<button class="col-2 col-md-1 saveBtn btn btn-primary">  <i class="fas fa-save" aria-hidden="true"></i></button>';
    thehtmlContent += '</div>';
    //console.log(thehtmlContent);
    $(".container-fluid.px-5").append(thehtmlContent);
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
