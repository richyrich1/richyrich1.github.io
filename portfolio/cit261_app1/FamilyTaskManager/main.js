function fetchIssues () 
{
  var tasks = JSON.parse(localStorage.getItem('tasks'));
  var tasksList = document.getElementById('tasksList');
  
  tasksList.innerHTML = '';
  
  for (var i = 0; i < tasks.length; i++) 
  {
    var id = tasks[i].id;
    var desc = tasks[i].description;
    var severity = tasks[i].severity;
    var assignedTo = tasks[i].assignedTo;
    var status = tasks[i].status;
    
    tasksList.innerHTML +=   '<div class="tasksList">'+
                              '<hr>'+
                              '<form>' +
                              '<fieldset>' +
                              '<h6>Task ID: ' + id + '</h6>'+
                              '<p><span class="status"> Status: ' + status + '</span></p>'+
                              '<h3>Task: ' + desc + '</h3>'+
                              '<p><span class="severity">Task Priority: </span> ' + severity + ' '+'<br><br>'+
                              '<span class="assignedTo">Assigned To: </span> ' + assignedTo + '</p>'+
                              '<a href="#" class="done" onclick="setStatusDone(\''+id+'\')">Done!</a> '+
                              '<a href="#" class="delete" onclick="deleteTask(\''+id+'\')">Delete</a>'+
                              '</fieldset>'+
                              '</form>' +
                              '</div>';
  }
}

document.getElementById('taskInputForm').addEventListener('submit', saveTask);

function saveTask(e) 
{
  var taskId = chance.guid();
  var taskDesc = document.getElementById('taskDescInput').value;
  var taskSeverity = document.getElementById('taskSeverityInput').value;
  var taskAssignedTo = document.getElementById('taskAssignedToInput').value;
  var taskStatus = 'Open';
  var task = 
  {
    id: taskId,
    description: taskDesc,
    severity: taskSeverity,
    assignedTo: taskAssignedTo,
    status: taskStatus
  }
  
  if (localStorage.getItem('tasks') === null) 
  {
    var tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } 
  else 
  {
    var tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  document.getElementById('taskInputForm').reset();
 
  fetchIssues();
  
  e.preventDefault(); 
}

function setStatusDone (id) 
{
  var tasks = JSON.parse(localStorage.getItem('tasks'));
  
  for(var i = 0; i < tasks.length; i++) 
  {
    if (tasks[i].id == id) 
    {
      tasks[i].status = "Closed";
    }
  }
    
  localStorage.setItem('tasks', JSON.stringify(tasks));
  
  fetchIssues();
}

function deleteTask (id) 
{
  var tasks = JSON.parse(localStorage.getItem('tasks'));
  
  for(var i = 0; i < tasks.length; i++) 
  {
    if (tasks[i].id == id) 
    {
      tasks.splice(i, 1);
    }
  }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  
  fetchIssues();
}