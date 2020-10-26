function submit(taskName, taskDescription, taskDate) {
  // As you can see i'm putting all the console.logs in the same object here
  // and since both the object and the properties name are the same i only have
  // to specify them ones.
  console.log("submit()", { taskName, taskDescription, taskDate });
}

function usingDocDotGetElement() {
  /***
   * As you can see, i'm not passing any of the submit values here. I'm using the
   * the document.getElementById() that you were using before. This is because
   * I have now told JavaScript to load this as a Module to give it access to
   * the DOM. I've also moved the <script> tag containing the javascript to
   * the <head> section so that it loads with the rest of the <head> elements.
   * the browers knows how to load it as a module since it's now tagged that way.
   */

  const taskName = document.getElementById("taskName").value;
  const taskDescription = document.getElementById("taskDescription").value;
  const taskDate = document.getElementById("taskDate").value;

  console.log("usingDocDotGetElement()", {taskName, taskDescription, taskDate});
}
