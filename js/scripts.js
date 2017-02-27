// Business logic
function ListItem(taskName, taskNotes) {
  this.taskName = taskName;
  this.taskNotes = taskNotes;
}

var listItemList = [];
// Front end logic
$(function() {
  $("form#inputForm").submit(function(event){
    event.preventDefault();
    var inputtedTaskName = $("input#inputItem").val();
    var inputtedTaskNotes = $("input#inputNotes").val();
    if (!inputtedTaskName || !inputtedTaskNotes) {
      $("#errorPrompt").show();
    } else {
      var newListItem = new ListItem(inputtedTaskName, inputtedTaskNotes);
      listItemList.push(newListItem);
      refreshList();
      $("input#inputItem").val("");
      $("input#inputNotes").val("");
    }

    function refreshList() {
      $("li.listItem").remove();
      listItemList.forEach(function(listItem) {
        $("ul#listItems").append("<li class='listItem' id='" + listItemList.indexOf(listItem) + "'>" + listItem.taskName + "</li>");
        $(".listItem").last().click(function() {
          $("#show-listItem").show();
          $("#show-listItem h2").text(listItem.taskName);
          $(".inputItem").text(listItem.taskName);
          $(".inputNotes").text(listItem.taskNotes);
        });
      });
    }

    $(".inputNotes").click(function() {
      debugger;
      listItemList.splice(listItemList.indexOf(this));
      $("#show-listItem").hide();
      refreshList();
    });
  });
});
