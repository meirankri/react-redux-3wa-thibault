import React from 'react';
import DetailUser from './detailsUser';
import {Link, Redirect} from 'react-router-dom';
import {signup} from '../api/api'

class Profil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: '',
            error: ''
            
        }
        this.info = {
            firstName :  "",
            lastName : "",
            email : '',
            password :''
        }
    }
    onChangeInfo(value, type) {
        this.info[type] = value
        
    }
    submitForm(e){
        e.preventDefault()
        signup(this.info, this.state)
        .then((res) => {
            if(res.status == 200){
                this.setState({success: "vous etes enregistrer"})

            }else if(res.status == 422 ) {
                this.setState({error: "email deja existant"})

            }
        }
        )
    }
    
    render() {
        if(this.state.success.length > 0 ){
            return <Redirect to="/login" />
        }
        return (
            
            <div>
                <h1>Ma page Profil</h1>
                <div>
                {this.state.success.length > 0 ? this.state.success : this.state.error}
                </div>
                
                <form onSubmit={(e)=>{
                    this.submitForm(e)
                }}>
                    <label>Nom</label>
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(e)=> {
                            this.onChangeInfo(e.currentTarget.value, 'lastName')
                        }}
                    />
                    <label>Prénom</label>
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(e)=> {
                            this.onChangeInfo(e.currentTarget.value, 'firstName')
                        }}
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={(e)=> {
                            this.onChangeInfo(e.currentTarget.value, 'email')
                        }}
                    />
                    <label>password</label>
                     <input
                        type="password"
                        value={this.state.password}
                        onChange={(e)=> {
                            this.onChangeInfo(e.currentTarget.value, 'password')
                        }}
                    />
                    <button>S'enregister</button>
                </form>
                <DetailUser info={this.info} bonjour="bonjour" />
            </div>
        )
    }
    
}

export default Profil

