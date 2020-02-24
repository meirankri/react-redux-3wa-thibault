import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import {getUserInfo} from '../actions'


export default function withAuth(ComponentToProtect) {
    class Auth extends Component {
        constructor() {
          super();
          this.state = {
            loading: true,
            redirect: false,
          };
        }
        
        componentDidMount() {
            const token = window.localStorage.getItem('token');
            if(token == null) {
              this.setState({loading: false , redirect: true})
            } else {
                axios.get('http://localhost:5000/api/user/checkToken', { headers: { 'x-access-token': token } }).then((res, err) => {
                    console.log(res.data);
                    
                    if (res.data.status === 200) {
                        if(this.props.profil.user === null) {
                            this.props.getUserInfo(res.data.user);
                        }
                        this.setState({ loading: false });
                    } else {
                         this.setState({ loading: false, redirect: true });
                    }
                    
                })
                .catch((err) => {
                    this.setState({ loading: false, redirect: true });
                });
            }
        }
        
        render() {
          const { loading, redirect } = this.state;
          if (loading) {
            return <div>Chargement</div>;
          }
          if (redirect) {
            return <Redirect to="/login" />;
          }
          return (
            <React.Fragment>
              <ComponentToProtect {...this.props} />
            </React.Fragment>
          );
        }
    }
    
      const mapStateToProps = (store) => {
        return {
          profil: store.user
        }
      }
    
      const mapDispatchToProps = {
          //function qui vient de action/index et qu'on appele dans la componenetdidmount avec this.props.getUserInfo(data.user)
        getUserInfo
      }
    
      return connect(mapStateToProps, mapDispatchToProps)(Auth)
}