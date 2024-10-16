
 
document.getElementById('addTask').addEventListener('click',function(){
   const text=document.getElementById('taskInput')
    const newList=taskInput.value
    
        if(newList !==''){
            const list=document.getElementById('list')
            const li=document.createElement('li')
            list.textContent=newList

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Elimina'
            deleteBtn.addEventListener('click', function() {
                list.removeChild(li)
            });
    
            li.appendChild(deleteBtn)
            list.appendChild(li)  
            taskInput.value = ''   
        }
})
   
