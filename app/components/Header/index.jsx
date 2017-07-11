import React from 'react';
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types';
import  {Button,Input,Row,Col} from 'antd';

class Header extends React.Component{
    constructor(){
        super();
        this.state={
            hidden:true,
            hint:'',
        }
    }
    handleAdd(e){
        e.preventDefault();
        const inputNode = findDOMNode(this.refs.memo_input);
        const text = inputNode.value.trim();
        if(text.length>20){
            this.setState({
                hidden:false,
                hint:'请输入20字以内'
            })
        }else if(text !== ''){
            this.props.onAdd(text);
            this.setState({
                hidden:true
            })
            inputNode.value = '';
        }else{
            this.setState({
                hidden:false,
                hint:'请输入内容'
            })
        }

    }
    render(){
        return(
            <header>
                <section>
                    <form>
                        <Row>
                            <Col span={4} style={{textAlign:"right"}}>
                                <label htmlFor="new-todo">备忘录</label>
                            </Col>
                            <Col span={12}>
                                <Input
                                    ref="memo_input"
                                    type="text"
                                    placeholder="新建事项(20字以内)"
                                    id="new-todo"
                                />
                            </Col>
                            <Col span={8}>
                                <Button onClick={e=>this.handleAdd(e)}>添加</Button>
                                <Button>搜索</Button>
                            </Col>
                        </Row>
                    </form>
                </section>
                <div className="hint"
                style={{
                    display:this.state.hidden ?'none' :'inlink-block',
                }}>
                    <div>
                        {this.state.hint}
                    </div>
                </div>
            </header>
        )
    }
}
Header.propTypes={
    onAdd: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
};
export default Header;