 import React from 'react';

 import axios from 'axios';

 export default class PersonList extends React.Component {
    state = {
        name: '',
        persons:[]
        /*tecnico: {
            "name": "",
            "username": "",
            "email": "",
            "address": {
                "street": "",
                "suite": "",
                "city": "",
                "zipcode": "",
                "geo": {
                     "lat": "",
                    "lng": ""
                }
            }
        }*/
    }

    handleChange = event => {
        this.setState({name: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name
        };

        axios.post('https://jsonplaceholder.typicode.com/users', { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
                //this.setState({tecnico: res.data}) ;//= res.data;
                //console.log(this.state.tecnico.username);
        });

        //const tecnico = {
        //    this.state.tecnico: res.data
        //}

    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const persons = res.data;
                this.setState({persons});
            })
    }

    render(){
        /*return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>a
                        Nombre Persona
                        <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <label>
                        Nombre de usuario
                        <input type="text" >{this.state.tecnico.username}</input>
                    </label>
                    <button type='submit'>Buscar</button>
                </form>
            </div>
        )*/
        
        return(
            <div>
                <form onSubmit={this.componentDidMount}>
                <ul>
                    {this.state.persons.map((person, index) => <li key={index}>{person.name}</li>)}
                </ul>
                <button type='submit'>Buscar</button>
                </form>
            </div>
        )
    }
 }