import PropTypes from 'prop-types';
import React from 'react';
import {Collapse,Row,Col,Icon,Button} from 'antd';

class ListDoingMemos extends React.Component{
    constructor(props){
        super(props);
        this.handleToTodo = this.handleToTodo.bind(this);
        this.handleToDone = this.handleToDone.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }
    handleDel(e){
        const delIndex = e.target.getAttribute('data-key');
        this.props.onDel(delIndex);
    }
    handleToTodo(e){
        const Index = e.target.getAttribute('data-key');
        this.props.onDoingToTodo(Index);
    }
    handleToDone(e){
        const Index = e.target.getAttribute('data-key');
        this.props.onDoingToDone(Index);
    }
    render(){
        let number = 0;
        this.props.todolist.map((item)=>{
            if(item.doing){
                number+=1;
            }
            return true;
        });
        const Panel = Collapse.Panel;
        const header =(
            <Row>
                <Col span={22}>正在进行</Col>
                <Col span={2}><Button size="small" shape="circle">{number}</Button></Col>
            </Row>
        );
        return(
            <div>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                    <Panel header={header} key="1">
                        <ul>{
                            this.props.todolist.map((item,i)=>{
                                if(item.doing){
                                    return(
                                        <li key={i}>
                                            <Row>
                                                <Col span={2}>
                                                    <Icon type="arrow-up"
                                                          data-key={i}
                                                          onClick={this.handleToTodo}
                                                    />
                                                </Col>
                                                <Col span={2}>
                                                    <Icon type="arrow-down"
                                                          data-key={i}
                                                          onClick={this.handleToDone}/>
                                                </Col>
                                                <Col span={18}>
                                                    <p>{item.todo}</p>
                                                </Col>
                                                <Col span={2}>
                                                    <Icon type="close-circle"
                                                          data-key={i}
                                                          onClick ={this.handleDel}
                                                    />
                                                </Col>
                                            </Row>
                                        </li>
                                    );
                                }
                                return true;
                            })
                        }
                        </ul>
                    </Panel>
                </Collapse>
            </div>
        )
    }
}
ListDoingMemos.propTypes = {
    todolist: PropTypes.arrayOf(PropTypes.shape({
        todo: PropTypes.string.isRequired,
        istodo: PropTypes.bool.isRequired,
        doing: PropTypes.bool.isRequired,
        done: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
    onDoingToDone: PropTypes.func.isRequired,
    onDoingToTodo: PropTypes.func.isRequired,
    onDel: PropTypes.func.isRequired,
};
export default ListDoingMemos;