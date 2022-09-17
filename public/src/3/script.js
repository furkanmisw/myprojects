const nE = (n, month, data) =>
  n === 0
    ? data[month ? 0 : 3]
    : n === 1
    ? data[month ? 1 : 4]
    : data[month ? 2 : 5]; // discount 2 month gift
const change = (month) =>
  document
    .querySelectorAll(".price")
    .forEach(
      (price, i) =>
        (price.innerText = `$${nE(
          i,
          month,
          [9.99, 16.99, 16.58, 90.99, 160.99, 160.58]
        )} / ${month ? "month" : "year"}`)
    );

document.querySelectorAll(".section").forEach((section) => {
  section.addEventListener("click", () => {
    section.querySelector("input").checked = true;
    change(document.querySelector("#month").checked);
  });
});
