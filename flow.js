var recipeCheck = localStorage.getItem('recipeCheck');
var dayCount = 0;
console.log("Initial: " + dayCount);
if(!dayCount)
{
    dayCount = 0;
}
if(!recipeCheck) 
{
    recipeCheck = 0;
}
function updateDayCount()
{
    if (dayCount == 7)
    {
        localStorage.setItem('dayCounter', 0);
    }
    else
    {
        localStorage.setItem('dayCounter', ++dayCount);
    }
}
function addViews(num) 
{
    localStorage.setItem('recipeViews', num);
    recipeCheck = num;
}
function myFunction() 
{
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) 
    {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) 
      {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) 
        {
          tr[i].style.display = "";
        } else 
        {
          tr[i].style.display = "none";
        }
      }
    }
  }

function saveMeal(meal) 
{
    if(meal == 1)
    {
        addViews(1);
    }
    else if(meal == 2)
    {
        addViews(2);
    }
    else if(meal == 3)
    {
        addViews(3);
    }
    else if(meal == 4)
    {
        addViews(4);
    }
    else if(meal == 5)
    {
        addViews(5);
    }
    else if(meal == 6)
    {
        addViews(6);
    }
    else if(meal == 7)
    {
        addViews(7);
    }
    else if(meal == 8)
    {
        addViews(8);
    }
    else if(meal == 9)
    {
        addViews(9);
    }
    else if(meal == 10)
    {
        addViews(10);
    }
    else if(meal == 11)
    {
        addViews(11);
    }
    else if(meal == 12)
    {
        addViews(12);
    }
}
recipeCheck = localStorage.getItem('recipeViews');
function addItem()
{
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}

function removeItem()
{
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);
}

function updateList()
{
    if (recipeCheck == 1)
    {

    }
    else if (recipeCheck == 2)
    {

    }
    else if (recipeCheck == 3)
    {
        
    }
    else if (recipeCheck == 4)
    {
        
    }
    else if (recipeCheck == 5)
    {
        
    }
    else if (recipeCheck == 6)
    {
        
    }
    else if (recipeCheck == 7)
    {
        
    }
    else if (recipeCheck == 8)
    {
        
    }
    else if (recipeCheck == 9)
    {
        
    }
    else if (recipeCheck == 10)
    {
        
    }
    else if (recipeCheck == 11)
    {
        
    }
    else if (recipeCheck == 12)
    {
        
    }
}

function update()
{
    var table = document.getElementById("userTable");
    if (dayCount==0){
        var row = table.insertRow(1);
        row.id = "rowMaster";        
    }
    if (dayCount ==  7)
    {
        var row = table.insertRow(1);
        row.id = "rowMaster";
        dayCount=0;
    }
    console.log("Oncall: " + dayCount);
    if (recipeCheck == 1)
    {
        var row = document.getElementById("rowMaster");
        var cell = row.insertCell(0);
        cell.innerHTML = "Meatball Nirvana";
    }
    else if (recipeCheck == 2)
    {
        var row = document.getElementById("rowMaster");
        var cell = row.insertCell(dayCount);
        cell.innerHTML = "Stuffed Green Peppers I";
    }
    else if (recipeCheck == 3)
    {
        var row = document.getElementById("rowMaster");
        var cell = row.insertCell(dayCount);
        cell.innerHTML = "Gourmet Mushroom Risotto";
    }
    else if (recipeCheck == 4)
    {
        var row = document.getElementById("rowMaster");
        var cell = row.insertCell(dayCount);
        cell.innerHTML = "Easy Slow Cooker French Dip";
    }
    else if (recipeCheck == 5)
    {
        var row = document.getElementById("rowMaster");
        var cell = row.insertCell(dayCount);
        cell.innerHTML = "Marinated Grilled Shrimp";
    }
    else if (recipeCheck == 6)
    {
        var row = document.getElementById("rowMaster");
        var cell = row.insertCell(dayCount);
        cell.innerHTML = "Burrito Pie";
    }
    else if (recipeCheck == 7)
    {
        var row = document.getElementById("rowMaster");
        var cell = row.insertCell(dayCount);
        cell.innerHTML = "Baked Salmon II";
    }
    else if (recipeCheck == 8)
    {
        var row = document.getElementById("rowMaster");
        var cell = row.insertCell(dayCount);
        cell.innerHTML = "Baked Dijon Salmon";
    }
    else if (recipeCheck == 9)
    {
        var row = document.getElementById("rowMaster");
        var cell = row.insertCell(dayCount);
        cell.innerHTML = "Hamburger Steak with Onions and Gravy";
    }
    else if (recipeCheck == 10)
    {
        var row = document.getElementById("rowMaster");
        var cell = row.insertCell(dayCount);
        cell.innerHTML = "Rempel Family Meatloaf";
    }
    else if (recipeCheck == 11)
    {
        var row = document.getElementById("rowMaster");
        var cell = row.insertCell(dayCount);
        cell.innerHTML = "BBQ Pork for Sandwiches";
    }
    else if (recipeCheck == 12)
    {
        var row = document.getElementById("rowMaster");
        var cell = row.insertCell(dayCount);
        cell.innerHTML = "Bow Ties with Sausage, Tomatoes and Cream";
    }
    updateDayCount();
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
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





