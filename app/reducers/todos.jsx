import {
    ADD_TODO,
    DELETE_TODO,
    CHANGE_TODO_TO_DOING,
    CHANGE_DOING_TO_DONE,
    CHANGE_DONE_TO_DOING,
    CHANGE_DOING_TO_TODO,
    SEARCH,
} from '../actions';

let todos;
(()=>{
    if(localStorage.todos){
        todos = JSON.parse(localStorage.todos);
    }else {
        todos=[];
    }
})();

//reducer接受state和action并返回新的state
const todolist = (state = todos,action)=>{
    //根据不同的action.type对state进行不同的操作
    switch (action.type){
        case ADD_TODO:
            return[
                ...state,{
                    todo:action.text,
                    istodo:true,
                    doing:false,
                    done:false
                }
            ];
        case CHANGE_TODO_TO_DOING:
            localStorage.setItem('todos',JSON.stringify([
                ...state.slice(0,action.index),
                {
                    todo:state[action.index].todo,
                    istodo:false,
                    doing:true,
                    done:false
                },
                ...state.slice(parseInt(action.index)+1)
            ]));
            return[
                ...state.slice(0,action.index),
                {
                    todo:state[action.index].todo,
                    istodo:false,
                    doing:true,
                    done:false
                },
                ...state.slice(parseInt(action.index)+1)
            ];

        case CHANGE_DOING_TO_DONE:
            localStorage.setItem('todos',JSON.stringify([
                ...state.slice(0,action.index),
                {
                    todo:state[action.index].todo,
                    istodo:false,
                    doing:false,
                    done:true
                },
                ...state.slice(parseInt(action.index)+1)
            ]));
            return[
                ...state.slice(0,action.index),
                {
                    todo:state[action.index].todo,
                    istodo:false,
                    doing:false,
                    done:true
                },
                ...state.slice(parseInt(action.index)+1)
            ];

        case CHANGE_DONE_TO_DOING:
            localStorage.setItem('todos',JSON.stringify([
                ...state.slice(0,action.index),
                {
                    todo:state[action.index].todo,
                    istodo:false,
                    doing:true,
                    done:false
                },
                ...state.slice(parseInt(action.index)+1)
            ]));
            return[
                ...state.slice(0,action.index),
                {
                    todo:state[action.index].todo,
                    istodo:false,
                    doing:true,
                    done:false
                },
                ...state.slice(parseInt(action.index)+1)
            ];

        case CHANGE_DOING_TO_TODO:
            localStorage.setItem('todos',JSON.stringify([
                ...state.slice(0,action.index),
                {
                    todo:state[action.index].todo,
                    istodo:true,
                    doing:false,
                    done:false
                },
                ...state.slice(parseInt(action.index)+1)
            ]));
            return[
                ...state.slice(0,action.index),
                {
                    todo:state[action.index].todo,
                    istodo:true,
                    doing:false,
                    done:false
                },
                ...state.slice(parseInt(action.index)+1)
            ];

        case DELETE_TODO:
            localStorage.setItem('todos',JSON.stringify([
                ...state.slice(0,action.index),
                ...state.slice(parseInt(action.index)+1)
            ]));
            return[
                ...state.slice(0,action.index),
                ...state.slice(parseInt(action.index)+1)
            ];

        case SEARCH:
            let text = action.text;
            let reg = eval("/"+text+"/g");
            return state.filter(item=>{
                item.todo.match(reg);
            });
        //不知道action类型的返回默认state
        default:
            return state;
    }
};

export default todolist;