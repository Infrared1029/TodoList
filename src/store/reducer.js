const initialState = {
    todoList: [
        // {
        //     id: 1,
        //     text: 'my first todo, yay!',
        //     checked: false
        // },
        // {
        //     id: 2,
        //     text: 'my second todo, yay!',
        //     checked: false
        // },
    ],

    createTodo: false,
    newTodo: null,
    counter: 0,
}


const reducer = (state=initialState, action) => {

    switch(action.type){
        case('TOGGLE_TODO'):{
            const newTodoList = [...state.todoList]
            // newTodoList[action.payload.id - 1].checked = !state.todoList[action.payload.id - 1].checked
            for(const todo of newTodoList){
                if(todo.id === action.payload.id){
                    todo.checked = !todo.checked
                    return {...state,
                        todoList: newTodoList
                     }
                }
            }
            break;
        }

        case('CREATE_TODO'):{

             return {
                 ...state,
                 createTodo: true,
             }

            }
        case('CANCEL'):{


        
             return {
                 ...state,
                 createTodo: false,
             }
            }
        case('UPDATE_NEW_TODO'):{


        return {
            ...state,
            newTodo: action.event.target.value
        }
    }
        case('ADD_TODO'):{
        
        const todoList = [...state.todoList]
        if (state.newTodo){
        todoList.push({id: state.counter + 1, text: state.newTodo, checked: false})
        return {
            ...state,
            todoList: todoList,
            newTodo: null,
            createTodo: false,
            counter: ++state.counter
                }
             }else{
                alert('Enter Something :/')
                return state
            }   
        }
    

        case('DELETE_TODO'):{
        const todoList = [...state.todoList]

        const index = todoList.findIndex((todo) => todo.id === action.id)
        todoList.splice(index, 1)
        return {
            ...state,
            todoList: todoList
        }
        }
            




            }

       

            
            return state;
    }

   



export default reducer;