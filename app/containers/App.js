/**
 * Created by qitmac000068 on 2017/7/7.
 */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { addTodo,search } from '../actions';

class App extends React.Component{
    constructor(){
        super();
    };
    render(){
        const {dispatch,todolist} = this.props;
        const allMemos = todolist.length;
        let [todoNum,doingNum,doneNum] = [0,0,0];
        todolist.forEach((item)=>{
           if(item.idtodo){
               todoNum +=1;
           }else if(item.doing){
               doingNum +=1;
           }else{
               doneNum +=1;
           }
        });
        return(
            <div>
                <Header
                    todolist={todolist}
                    onAdd={text=>dispatch(addTodo(text))}
                    onSearch={text=>dispatch(search(text))}
                />
                <Navigation
                    allMemos ={allMemos}
                    todoNum ={todoNum}
                    doingNum ={doingNum}
                    doneNum ={doneNum}
                />
                {this.props.children}
            </div>
        )
    }
}
App.propTypes = {
    todolist: PropTypes.arrayOf(PropTypes.shape({
        todo: PropTypes.string.isRequired,
        istodo: PropTypes.bool.isRequired,
        doing: PropTypes.bool.isRequired,
        done: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
};

const mapStateToProps = (state) => {
    return { todolist: state.todolist };
};

export default connect(mapStateToProps)(App);
