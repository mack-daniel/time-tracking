function openTask(content, time) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(time).style.display = "block";
  content.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
// const headerOne = document.createElement("h1");

// function fetchData(timeframe) {
//   fetch("./data.json")
//     .then((response) => response.json())
//     .then((data) => {
//       data.map((item) => {
//         if (timeframe === "Daily") {
//           const header = document.querySelectorAll(".header");
//           header.forEach((tag) => {
//             console.log(item.timeframes.daily);
//             tag.appendChild(headerOne).innerText =
//               item.timeframes.daily.current;
//           });
//         } else if (timeframe === "Weekly") {
//           console.log(item.timeframes.weekly);
//         } else {
//           console.log(item.timeframes.monthly);
//         }
//       });
//     })
//     .catch((error) => console.log(error));
// }
