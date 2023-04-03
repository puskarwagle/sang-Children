$('[lang="ne"]').hide();

$('#toggle').click(function() {
  $('[lang="ne"]').toggle();
  $('[lang="en"]').toggle();
});

console.log('hi');