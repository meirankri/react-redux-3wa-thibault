import React from 'react'
import {connect} from 'react-redux'

class detailsUser extends React.Component {
    constructor(){
        super()
        this.info = {
            email: "",
            password: ""
        }
    }

    submitForm(e){
        e.preventDefault()
    }

    onChangeInfo(value, type) {
        this.info[type] = value
        
    }
    
    render() {
        console.log('redux user', this.props.profil.user)
        
        return (
            <div>
                <h1>mon profil</h1>
                <form onSubmit={(e)=>{
                    this.submitForm(e)
                }}>
                    
                    <label>Email</label>
                    <input
                        type="email"
                        onChange={(e)=> {
                            this.onChangeInfo(e.currentTarget.value, 'email')
                        }}
                    />
                    <label>password</label>
                     <input
                        type="password"
                        onChange={(e)=> {
                            this.onChangeInfo(e.currentTarget.value, 'password')
                        }}
                    />
                    <button>modifier mot de passe</button>
                </form>
            </div>
        )
    }
    
}

const mapStateToProps = (store) => {
	return {
		profil: store.user
	}
}



export default connect(mapStateToProps)(detailsUser)