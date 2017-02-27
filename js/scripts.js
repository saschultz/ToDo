// Business logic
function ListItem(taskName, taskNotes) {
  this.taskName = taskName;
  this.taskNotes = taskNotes;
}

// Front end logic
$(function() {
  $("form#inputForm").submit(function(event){
    event.preventDefault();

    var inputtedTaskName = $("input#inputItem").val();
    var inputtedTaskNotes = $("input#inputNotes").val();

    var newListItem = new ListItem(inputtedTaskName, inputtedTaskNotes);

    $("ul#listItems").append("<li><span class='listItem'>" + newListItem.taskName + "</span></li>");

    $("input#inputItem").val("");
    $("input#inputNotes").val("");

    $(".listItem").last().click(function() {
      $(".foo").removeClass("foo");
      $(this).addClass("foo");

      $("#show-listItem").show();
      $("#show-listItem h2").text(newListItem.taskName);
      $(".inputItem").text(newListItem.taskName);
      $(".inputNotes").text(newListItem.taskNotes);
    });

    $(".inputNotes").click(function() {
      $(".foo").remove();
    });
  });
});
