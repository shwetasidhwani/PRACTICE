function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("user-input");
  filter = input.value.toUpperCase();
  ul = document.getElementById("drop-down-menu");
  li = ul.getElementsByTagName("li");

  if (filter != "") {
    input.style.borderBottomLeftRadius = "0";
    input.style.borderBottomRightRadius = "0";
  } else {
    input.style.borderBottomLeftRadius = "20px";
    input.style.borderBottomRightRadius = "20px";
  }

  if (filter.trim() != "") {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
