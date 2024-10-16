//_______________ Dom part start
let headInput =document.querySelector('.headInput')
let todoList = document.querySelector('.todoList');
//________________ Function part start
let handleBtb=()=>{
    if(headInput.value === ''){
        alert('Enter your value');
    }
    else{
        //_____________ creatr Element 
        let singelTodo = document.createElement('div');
        let singleTodoinput =document.createElement('input');
        let editeBtn =document.createElement('button');
        let removeBtn =document.createElement('button');
        //___________________ making child 
        todoList.appendChild(singelTodo);
        singelTodo.appendChild(singleTodoinput)
        singelTodo.appendChild(editeBtn)
        singelTodo.appendChild(removeBtn)
        //______________ adding class name
        singelTodo.classList.add('singelTodo')
        editeBtn.classList.add('editBtn')
        removeBtn.classList.add('removeBtn')
        //_______________ adding content to the tags
        editeBtn.innerHTML='Edit';
        removeBtn.innerHTML='Delet'

        //____________ adding data input field
        singleTodoinput.value=headInput.value;
        headInput.value='';

        //______________ setting input attributes
        singleTodoinput.setAttribute('readonly', 'readonly')
        //_____________ deleting data
        removeBtn.addEventListener('click', ()=>{
            singelTodo.remove()
        })
        //_________ Edite button 
        editeBtn.addEventListener('click', ()=>{
            if(editeBtn.innerHTML==='Edit'){
                editeBtn.innerHTML='Save'
                editeBtn.style="background:green; color:white;"
                singleTodoinput.removeAttribute('readonly', 'readonly')
            }
            else{
                 editeBtn.innerHTML='Edit'
                editeBtn.style="background:#F3C623; color:black;"
                singleTodoinput.setAttribute('readonly', 'readonly')
            }
        })
    }
}
// __________ Enter button click
let entetBtn=(item)=>{
    
    if(item.key=== "Enter"){
        handleBtb()
    }
}