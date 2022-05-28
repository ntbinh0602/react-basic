import React from "react";
import { withRouter } from "react-router-dom";
import './Demo.scss'
import Color from "../HOC/Color";
import logo from '../../assets/images/removebg-preview.png';
import {connect} from 'react-redux'

class Home extends React.Component {
    //Chức năng chuyển trang
    // componentDidMount() {
    //     setTimeout(()=> {
    //         this.props.history.push('/todo')
    //     },3000)
    // }

    handleDeleteUser = (user) => {
        console.log('Check user delete:',user)
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.addUserRedux();
    }

    render() {
        console.log('Check props:', this.props.dataRedux)
        let listUsers = this.props.dataRedux
        return (
            <>
            <div className="homepage-title">Hello ACE. This is HomePage</div>
            <div>
                <img src={logo} width="300px"/>
            </div>
            <div className='list-user-homepage'>
                {listUsers && listUsers.length > 0 &&
                listUsers.map((item,index) => {
                    return (
                            <div key={item.id} className='list-user-homepage-item'>
                                {index + 1} - {item.name} 
                                <span onClick={() => this.handleDeleteUser(item)}>  x  </span>
                            </div>
                            
                    )
                })
                }
                <button onClick={() => this.handleCreateUser()}>Add new</button>
            </div>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {dataRedux: state.users}
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch ({type: 'DELETE_USER', payload: userDelete}),
        addUserRedux: () => dispatch({type: 'CREATE_USER'}),
    }
}

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));