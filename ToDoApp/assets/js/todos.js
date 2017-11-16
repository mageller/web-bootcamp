// Check off Specific Todos by Clicking
$('ul').on("click", "li", function() {
  $(this).toggleClass('completed');
});

// remove a to do item
$('ul').on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

// add a new todo item
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    // grab new todo text form input
    var todoText = $(this).val();
    $(this).val("");
    // create a new li and add to ul
    $('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>');
  }
});

// Show/hide input
$('.fa-plus').click(function() {
  $("input[type='text']").fadeToggle();
});
