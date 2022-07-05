
var save = document.getElementById('add');
var clearAll = document.getElementById("clear-all");


// this activates the add button
save.onclick = function addAndDrop() {
     
      var taskInput = document.getElementById("input").value;
      var orderedList = document.getElementById("lists");
      var list = document.createElement("li");

      var span = document.createElement("span");
      var txt = document.createTextNode(taskInput);
      span.classList.add('span');

      span.appendChild(txt);

      var del = document.createElement('button');
      var trashIcon = document.createTextNode('del');
      del.classList.add('delBtn');

      del.appendChild(trashIcon);

      if (taskInput === '') {
         alert('You must write something!');
      } else {

      list.appendChild(span);
      list.appendChild(del);
      
      orderedList.appendChild(list);

      }

      //this activates the del button
      function delet() {
            list.style.display  = 'none';
      }
      
      del.onclick = delet;
      console.log('list');


      clearAll.onclick = function clear() {
         //  lists.style.display = 'none';
          orderedList.innerHTML = "";
         document.getElementById("input").innerHTML.value = '';
        }
   }

   
// this activites the Clear All btn
   


  

  


