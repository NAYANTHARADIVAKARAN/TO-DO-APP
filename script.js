
function validate(callback) {
    let uname = document.getElementById("Username").value;
  let pword = document.getElementById("Password").value;
    if (uname == "admin" && pword == "12345") {
        document.querySelector("form").action = "home.html";
        return true
    }
    else{
         if (uname!= "admin"){
            callback('uerror')
    }
         if(pword!="12345"){
           callback('perror')
    }
    alert("invalid credentials")
    return false
}
}
function error(val){
    document.getElementById(val).innerHTML="invalid" 
}

  let call=document.getElementById("toDo")
  call.onclick=display()
  
  function display() {
    const xhr=new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200){
             const obj=JSON.parse(this.responseText);
             createTable(obj);
        }
    };
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos",true);
    xhr.send();
  }
  
  function createTable(obj){
   
    let table ="<tr><th>Id</th><th>Task</th><th>Status</th></tr>";
    for(let i=0;i<obj.length;i++)
    {       
        table+="<tr>";
        if(obj[i].completed==true){
            table+="<td>"+obj[i].id+"</td><td>"+obj[i].title+"</td><td><input type=checkbox class=\"form-check-input\"  checked disabled></td>";
        }else{
            table+="<td>"+obj[i].id+"</td><td>"+obj[i].title+"</td><td><input type=checkbox class=\"form-check-input\" id=checkbox onclick=count()></td>";  
        }
        
        table+="</tr>";
    }
    table+="</table>";
    document.getElementById("toDoList").innerHTML=table;
  }
  
  
      
  function count()
  {
      let count= document.querySelectorAll('input[id="checkbox"]:checked').length;
      checkCount(count);
  }
  
  function checkCount(count){
      let promise = new Promise(function (resolve,reject){
          if(count==5){
              resolve(count);
          }
          else{reject(count);}
      });
  
      promise.then(
          function(count){
              console.log(count);
              alert("Congrats. 5 Tasks have been Successfully Completed");
          },
          function (count){
              console.log(count);
          }
      );
  }
  
  