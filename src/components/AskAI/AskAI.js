import React from "react";
import axios from 'axios';
import './askai.css';
import { Container, Row, Col } from "react-bootstrap";

class AskAI extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            context: [
                {'system': ''},
            ],
            prompt: "",
        }
    }

    fetchContext = (context) => {
        this.setState({
            context: context,
        });
    }

    updateContext = (prompt, agent) => {
        let context = [...this.state.context];
        if(agent === 'user'){
            context.push({'user': prompt});
        } else {
            context.push({'assistant': prompt});
        }

        this.setState({
            context: context
        })
    } 

    fetchChatResponse = (event) => {
        event.preventDefault();
        const prompt = this.state.prompt;
        let objContext = {...this.state.context};
        let context = objContext.context;
        
        axios.post('http://127.0.0.1:5000/askai', {
            prompt: prompt,
            context: context,
        }).then((response) =>{
            this.setState({
                context: response?.data,
                prompt: ""
            })
        }).catch(error => console.log(error));
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:5000/askai').then(response => {
            this.fetchContext(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <Container className="chat-container">
                <h3 className="chat-title">Ask Anything about Yumo</h3>
                <ul className="chat-messages">
                    {Array.isArray(this.state.context.context) ? this.state.context.context.map((cntx, idx) => {
                        const role = cntx['role'];
                        const dialogue = cntx['content'];
    
                        if (role === 'user')
                            return <li className="user-message" key={idx}>{dialogue}</li>
                        else if (role === 'assistant')
                            return (
                                <li className="ai-message" key={idx}>
                                {dialogue}
                                    {/* <input 
                                        type="text" 
                                        value={`Yumo: ${dialogue}`} 
                                        readOnly 
                                    /> */}
                                </li>
                            )
                        return <></>;
                    }) : <></>}
                </ul>
                <div className="chat-input-section">
                    <form onSubmit={this.fetchChatResponse}>
                        <input
                            type="text"
                            value={this.state.prompt}
                            onChange={(e) => this.setState({ prompt: e.target.value })}
                            placeholder="Seems like you're curious about Yumo..." required
                        />
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </Container>
        );
    }
    
}



export default AskAI;
