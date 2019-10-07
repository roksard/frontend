import React, { Component} from "react";
import "./App.css";

class App extends Component{
    componentDidMount() {
        const resolve1 = () => console.log("resolve");
        const reject1 = () => console.log("reject");
        new Promise((resolve, reject) => {
            if (1===2) {
                resolve();
            } else {
                reject();
            }
        })
            .then(resolve1, reject1)
            .catch(() => console.log("catch"));
    }

    render() {
        return (
            <div className="App">
                <h1> Hello, World1! </h1>
            </div>
        );
    }
}

export default App;