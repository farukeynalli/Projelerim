let listDOM = document.querySelector("#list");
let text = document.getElementById("task");

checkFunction();
addDeleteElement();

function checkFunction() {
  let listDOMli = document.querySelectorAll("li");
  if (listDOMli.length > 0) {
    listDOMli.forEach(function (li) {
      li.addEventListener("click", function () {
        this.classList.toggle("checked");
      });
    });
  }
}

function addDeleteElement() {
  let listDOMli = listDOM.querySelectorAll("li");

  if (listDOMli.length > 0) {
    listDOMli.forEach(function (li) {
      let existingSpan = li.querySelectorAll("span");
      existingSpan.forEach(function (span) {
        console.log("existing span :", existingSpan);
        span.remove();
      });

      let deleteElement = document.createElement("span");
      console.log(deleteElement);
      deleteElement.innerHTML = "x";
      deleteElement.style.display = "true";
      deleteElement.classList.add("close");
      li.appendChild(deleteElement);
    });
  } else {
  }
}

function newElement() {
  let inputVal = text.value;
  let liDom = document.createElement("li");

  if (inputVal === "" && inputVal.trim() === "") {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    liDom.innerHTML = inputVal;
    listDOM.appendChild(liDom);
    text.value = "";
  }

  liDom.addEventListener("click", function () {
    this.classList.toggle("checked");
  });

  addDeleteElement();
  removeFunc();
}

removeFunc();
function removeFunc() {
  let removeEls = listDOM.querySelectorAll(".close");
  removeEls.forEach(function (el) {
    el.addEventListener("click", function (e) {
      let parentEl = e.target.parentNode;
      parentEl.remove();
    });
  });
}
