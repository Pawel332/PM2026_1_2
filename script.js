(function() {
  //TODO
  const element = document.getElementById("ex3_element");
  const ex3two = document.getElementById("ex3_two");

  element.setAttribute("draggable", "true");

  element.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text", event.target.id);
  });

  ex3two.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  ex3two.addEventListener("drop", (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(id);

    ex3two.appendChild(draggedElement);
  });
})();
