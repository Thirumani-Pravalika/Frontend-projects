let isDone = false;

function strike() {
  const text = document.getElementById("name");

  if (!isDone) {
    text.style.textDecoration = "line-through";
  } else {
    text.style.textDecoration = "none";
  }

  isDone = !isDone;
}
