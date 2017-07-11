import { Row,Col} from 'antd';
import React from 'react';
import { IndexLink } from 'react-router';
import NavLink from './navLink';

export default class Navigation extends React.Component{
    render(){
        return(
            <div className="navigation">
                <Row type="flex" align="middle" justify="space-around">
                    <Col span={6}>
                        <IndexLink to="/" activeClassName="active">
                            全部
                        </IndexLink>
                    </Col>
                    <Col span={6}>
                        <NavLink to="/todo">
                            新建事项
                        </NavLink>
                    </Col>
                    <Col span={6}>
                        <NavLink to="/doing">
                            正在进行
                        </NavLink>
                    </Col>
                    <Col span={6}>
                        <NavLink to="/done">
                            已完成
                        </NavLink>
                    </Col>
                </Row>
            </div>
        )
    }
}