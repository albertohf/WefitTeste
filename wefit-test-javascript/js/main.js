document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".btn-group-vertical").forEach(function (group) {
    group.classList.remove("btn-group-vertical");
    group.classList.add("btn-group-horizontal");
  });

  const jumbotron = document.querySelector(".jumbotron");
  if (jumbotron) {
    jumbotron.classList.add(
      "d-flex",
      "flex-column",
      "align-items-end",
      "text-white",
      "bg-secondary"
    );
    jumbotron.querySelectorAll("p").forEach(function (p) {
      p.classList.add("text-right");
    });
    jumbotron.querySelectorAll("a").forEach(function (a) {
      a.classList.remove("btn-primary");
      a.classList.add("btn-success");
    });
  }

  const cardElements = [];
  const categories = ["Natureza", "Animais", "Pessoas", "Tecnologia"];

  categories.forEach(function (item) {
    document.querySelectorAll(".card-body").forEach(function (cardBody) {
      const h5Text = cardBody.querySelector("h5").textContent;
      if (h5Text.includes(item)) {
        cardElements.push(cardBody.closest(".card"));
      }
    });
  });

  document.querySelectorAll(".row .col-lg-12").forEach(function (col) {
    const title = col.querySelector("h3").textContent;
    if (title.includes("Cards")) {
      document.querySelectorAll(".col-lg-3").forEach(function (col) {
        col.innerHTML = "";
      });
    }
  });

  cardElements.forEach(function (cardElement, index) {
    const column = document.querySelectorAll(".col-lg-3")[index];
    if (column) {
      column.appendChild(cardElement);
    }
  });

  document.querySelectorAll(".card-body").forEach(function (cardBody) {
    const h5Text = cardBody.querySelector("h5").textContent;
    if (h5Text.includes("Animais")) {
      const button = cardBody.querySelector(".btn");
      if (button) {
        button.classList.remove("btn-primary");
        button.classList.add("btn-success");
      }
    }
  });

  const activeItems = document.querySelectorAll(
    ".list-group .list-group-item.active"
  );
  activeItems.forEach(function (item) {
    item.classList.remove("active");
  });

  const listGroup = document.querySelector(".list-group");
  if (listGroup) {
    const newItem1 = document.createElement("li");
    newItem1.className = "list-group-item active";
    newItem1.textContent = "Quarto item";

    const newItem2 = document.createElement("li");
    newItem2.className = "list-group-item";
    newItem2.textContent = "Quinto item";

    listGroup.appendChild(newItem1);
    listGroup.appendChild(newItem2);
  }
});
