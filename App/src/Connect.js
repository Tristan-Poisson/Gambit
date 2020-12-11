import ReactDOM from 'react-dom';
import './Main.css';
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Connect extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : "",
            type : ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleSubmit(event) {
        alert('Merci de votre reponse')
        event.preventDefault();
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]:value
        });
    }
    render(){
        return(

            <div class="Connect">
                <form id="connect" onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Mot de passe
                        <input
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange} />
                    </label>
                    <input name="type" type="radio" value="prof" onChange={this.handleInputChange}/>
                    <label>Prof</label>
                    <input name="type" type="radio" value="eleve" onChange={this.handleInputChange}/>
                    <label>Élève</label>
                </form>
            </div>
        );
    }
}

export default Connect
