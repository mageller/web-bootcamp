$(document).ready(function() {
  // Select all divs and give them a purple background
  $('div').css('backgroundColor', 'purple');

  // select the divs with the class highlight and make them 200px wide
  $('.highlight').css('width', '200px');

  // Select the div with id 'third' and give it an orange border
  $('#third').css('border', '4px solid orange');

  // Select the first div and change its font color to pink
  $('div:first-of-type').css('color', 'pink');
});