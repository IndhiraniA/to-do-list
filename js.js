// Create a "close" button and append it to each list item
var mylist = document.getElementsByTagName("LI");  //getElementsByTagName()method is used to tag the element in the list
var i;
for (i = 0; i < mylist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7"); //u00D7 is a "x" multiplication symbol
  span.className = "close";
  span.appendChild(txt);                     //using appendchild()method append the mul symbol in the list.The appendChild() method allows you to add a node
                                             //to the end of the list of child to parent.
  mylist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
  ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
  alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
  }
}

//Clearing the list
function removeAll(){
  var lst = document.getElementsByTagName("ul");
    lst[0].innerHTML = "";
}
