function add() {
  var data = document.getElementById("input").value.trim();
  var ulist = document.createElement("li");
  ulist.innerHTML =
    data + "<button onclick='del(event)'>Delete</button>" + "<hr>";
  if (data !== "") {
    input.value = "";
    u_1.append(ulist);
  }
  if (data === "") {
    alert("Enter the Text");
  }
}
function clr() {
  var result = window.confirm("Clear the All to-do List");
  if (result) {
    input.value = "";
    document.getElementById("u_1").innerHTML = "";
  }
}
function del(event) {
  event.target.parentElement.remove();
}
