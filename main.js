//getting the form variables
const addForm=document.getElementById('form');
const auth=document.querySelector('.auth');
const itemList=document.getElementById('items');
const filter=document.getElementById('filter');




//add eventListener

addForm.addEventListener('submit',addTodo);

itemList.addEventListener('click',removeTodo);

filter.addEventListener('keyup',filterTodo);



//functions

// function for adding new todo-item 
function addTodo(e){
    e.preventDefault();

    checkingTodo();

}
function removeTodo(e){
    e.preventDefault();
    if(e.target.classList.contains('btn-danger')){
        if(confirm('Are you Sure?')){
            const li=e.target.parentElement;
            itemList.removeChild(li);
            
        }
    }
}

// function for checking if the todo item that input by the user is valid
function checkingTodo(){
    
    //getting the user input
    const userTodo=document.getElementById('formInput').value;
    
    if(userTodo == ""){
        error();
    }else{
        success();
        creatingTodo();
    }
    return;

}

function filterTodo(e){
    e.preventDefault();

    const text=e.target.value.toLowerCase();
    const items=itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        const itemName=item.firstChild.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display='flex';
        }else{
            item.style.display='none';
        }
    })

    
}


function creatingTodo(){

    const userTodo=document.getElementById('formInput').value;

    const li =document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(userTodo));

    const btnDelete=document.createElement('button');
    btnDelete.className='btn btn-danger';
    btnDelete.appendChild(document.createTextNode('x'));

    li.appendChild(btnDelete);

    itemList.appendChild(li);
}

function error(){

    auth.classList.add('checker');
    auth.style.backgroundColor='rgba(184, 48, 48, 0.936)';
    auth.innerHTML=`<h3>Empty Input</h3>`;

    if(auth.style.display == 'none'){
        auth.style.display='flex';
    }
    setTimeout(()=>{
        auth.style.display='none'
    },3000);
    
}

function success(){
    auth.classList.add('checker');
    auth.style.backgroundColor='rgb(12,182, 12)';
    auth.innerHTML=`<h3>Successfully Added</h3>`;

    if(auth.style.display == 'none'){
        auth.style.display='flex';
    }
    setTimeout(()=>{
        auth.style.display='none'
    },3000);
}