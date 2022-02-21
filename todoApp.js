const $ = (value) => {
  return document.getElementById(value);
};

// Listen event for enter keypress
var input = document.getElementById("inputText");
input.addEventListener("keyup", function (event) {
  const key = event.keyCode;
  if (key === 13) {
    const index = Math.round(Math.random(0, 1) * 10000);
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    const p = document.createElement("p");
    p.setAttribute("id", `para${index}`);

    const span = document.createElement("span");
    span.innerHTML = $("inputText").value;

    const btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.innerHTML = "Delete";
    btn.setAttribute("onclick", `removeTask(${index})`);
    btn.setAttribute("class", "btn btn-danger");

    p.append(checkbox);
    p.append(span);
    p.append(btn);

    $("data").append(p);
    return p;
  }
});

// Delete row function
const removeTask = (index) => {
  $(`para${index}`).remove();
};
