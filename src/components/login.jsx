import React from 'react';
import {Link} from 'react-router-dom';
import {signin} from '../api/api'

class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : '',
            token : '',
            success: '',
            error: null
        }
       
    }
    onChangeInfo(value, info) {
        this.setState({[info]: value})
        
    }
    submitForm(e){
        e.preventDefault()
        signin(this.state)
        .then((res) => {
            if (res.status == 200){
                localStorage.setItem('token', res.token)
                this.setState({success : "vous etes connecté avec le token "+localStorage.getItem('token')})
            }else if(res.status === 422){
                this.setState({error : "l'email ou le mot de passe de sont pas correctes"})
   
            }
        })
    }
    
    render() {
        return (
            <div>
                <Link to="/">go to resume</Link>
                <h1>Ma page Profil</h1>
                {this.state.error && this.state.error }
               {this.state.success.length === 0 ? <form onSubmit={(e)=>{
                    this.submitForm(e)
                }}>
                    
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
                    <button>Se logger</button>
                </form> : this.state.success}
                
            </div>
        )
    }
    
}

export default login

