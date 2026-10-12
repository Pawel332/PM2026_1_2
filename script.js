(function() {
  //TODO
  const element = document.getElementById("ex3_element");
  const ex3one = document.getElementById("ex3_one");
  const ex3two = document.getElementById("ex3_two");

  element.setAttribute("draggable", "true");

  element.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text", event.target.id);
  });

  [ex3one, ex3two].forEach((contains) => {
    contains.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    contains.addEventListener("drop", (event) => {
      event.preventDefault();
      const id = event.dataTransfer.getData("text");
      const draggedElement = document.getElementById(id);

      contains.appendChild(draggedElement);
    });
  });
})();
