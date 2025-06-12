const todoList = [];

function renderTodoList(){
    let renderHTML = '';

    for(let i = 0;i < todoList.length ; i++){
        const todoObject = todoList[i];
        //DESTRUCTURING

        //const name = todoObject.name;
        const {name} = todoObject
        //const dueDate = todoObject.dueDate;
        const {dueDate} = todoObject
        const html = `
                <div>${name}</div>
                <div>${dueDate} </div>
                <button onclick = "
                todoList.splice(${i},1);
                renderTodoList();
                " class = "delete-todo-button">Delete</button>
            
            `;
        renderHTML = renderHTML + html;
    }
    console.log(renderHTML);

    document.querySelector('.js-todo-list').innerHTML = renderHTML;

}

renderTodoList();


function addTodo(){
            //accessing input data
            const inputElement = document.querySelector('.js-name-input');
            const name = inputElement.value;

            const dateInputElement = document.querySelector('.js-due-date-input')
            const dueDate = dateInputElement.value;


            //adding to name variable to todoList array
            todoList.push({
                //name: name,
                //dueDate:dueDate
                //shorthND PROPERTY FOR ABOVE 
                name,
                dueDate
            });
            console.log(todoList);  

            //after clickng add button, clear input data
            inputElement.value = '';

            //calling merged html function

            renderTodoList();

        }



 