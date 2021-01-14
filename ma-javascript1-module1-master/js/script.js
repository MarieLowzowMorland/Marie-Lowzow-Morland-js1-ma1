const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

//Question 1
const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

//Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.className = "subheading";

//Question 5
const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
  const paragraph = paragraphs[i];
  paragraph.style.color = "red";
}

//Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p> ";
resultsContainer.style.backgroundColor = "yellow";

//Question 7
function petNames(list) {
  for (let i = 0; i < list.length; i++) {
    const listItem = list[i];
    console.log(listItem.name);
  }
}
petNames(cats);

//Question 8
function createCats(cats) {
  let catElements = "";
  for (let i = 0; i < cats.length; i++) {
    const cat = cats[i];
    let catElement = "<div>" + " <h5>" + cat.name + "</h5>";
    if (cat.age) {
      catElement += "<p>" + cat.age + "</p>";
    } else {
      catElement += "<p>Age unknown</p>";
    }
    catElement += "</div>";
    catElements += catElement;
  }
  return catElements;
}

document.querySelector(".cat-container").innerHTML = createCats(cats);
