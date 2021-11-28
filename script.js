var base = ["software-engineering", "scientific-computing", "nine-eleven"];
  var all = [
    "software-engineering",
    "scientific-computing",
    "discrete-mathematics",
    "catch21",
    "nine-eleven",
  ];

  var vEdi = ["discrete-mathematics", "catch21"];

  var vSascha = ["software-engineering", "scientific-computing", "nine-eleven"];

  function checkbox() {
    if (document.getElementById("edi").checked) {
      vEdi.forEach((element) => {
        document.getElementById(element).style = "display: block;";
      });
    } else {
      vEdi.forEach((element) => {
        document.getElementById(element).style = "display: none;";
      });
    }
    if (document.getElementById("sascha").checked) {
      vSascha.forEach((element) => {
        document.getElementById(element).style = "display: block;";
      });
    } else {
      vSascha.forEach((element) => {
        document.getElementById(element).style = "display: none;";
      });
    }
  }

  function onStart() {
    all.forEach((element) => {
        document.getElementById(element).style = "display: none;";
      });
  }