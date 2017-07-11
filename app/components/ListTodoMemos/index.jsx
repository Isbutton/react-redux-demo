import PropTypes from 'prop-types';
import React from 'react';
import {Collapse,Row,Col,Icon,Button} from 'antd';

class ListTodoMemos extends React.Component{
    constructor(props){
        super(props);
        this.handleToDoing = this.handleToDoing.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }
    handleDel(e){
        const delIndex = e.target.getAttribute('data-key');
        this.props.onDel(delIndex);
    }
    handleToDoing(e){
        const Index = e.target.getAttribute('data-key');
        this.props.onTodoToDoing(Index);
    }
    render(){
        let number = 0;
        this.props.todolist.map((item)=>{
            if(item.istodo){
                number+=1;
            }
            return true;
        });
        const Panel = Collapse.Panel;
        const header =(
            <Row>
                <Col span={22}>新建事项</Col>
                <Col span={2}><Button size="small" shape="circle">{number}</Button></Col>
            </Row>
        );
        return(
            <div>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                    <Panel header={header} key="1">
                        <ul>{
                            this.props.todolist.map((item,i)=>{
                                if(item.istodo){
                                    return(
                                        <li key={i}>
                                            <Row>
                                                <Col span={2}>
                                                    <Icon type="arrow-up"
                                                          data-key={i}
                                                          style={{color:'#fff'}}
                                                    />
                                                </Col>
                                                <Col span={2}>
                                                    <Icon type="arrow-down"
                                                          data-key={i}
                                                          onClick={this.handleToDoing}/>
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
ListTodoMemos.propTypes = {
    todolist: PropTypes.arrayOf(PropTypes.shape({
        todo: PropTypes.string.isRequired,
        istodo: PropTypes.bool.isRequired,
        doing: PropTypes.bool.isRequired,
        done: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
    onTodoToDoing: PropTypes.func.isRequired,
    onDel: PropTypes.func.isRequired,
};
export default ListTodoMemos;