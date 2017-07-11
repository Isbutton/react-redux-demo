export const ADD_TODO = 'Add_Todo';
export const CHANGE_TODO_TO_DOING = 'Change_Todo_To_Doing';
export const CHANGE_DOING_TO_DONE = 'Change_Doing_To_Done';
export const CHANGE_DONE_TO_DOING = 'Change_Done_To_Doing';
export const CHANGE_DOING_TO_TODO = 'Change_Doing_To_Todo';
export const SEARCH = 'Search';
export const DELETE_TODO = 'Delete_Todo';

export function addTodo(text) {
    return{
        type:ADD_TODO,
        text
    }
}
export function search(text) {
    return{
        type:SEARCH,
        text
    }
}
export function deleteTodo(index) {
    return{
        type:DELETE_TODO,
        index
    }
}
export function changeTodoToDoing(index) {
    return{
        type:CHANGE_TODO_TO_DOING,
        index
    }
}
export function changeDoingToDone(index) {
    return{
        type:CHANGE_DOING_TO_DONE,
        index
    }
}
export function changeDoneToDoing(index) {
    return{
        type:CHANGE_DONE_TO_DOING,
        index
    }
}
export function changeDoingToTodo(index) {
    return{
        type:CHANGE_DOING_TO_TODO,
        index
    }
}