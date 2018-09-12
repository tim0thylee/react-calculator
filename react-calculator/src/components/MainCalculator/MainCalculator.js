import React, {Component} from "react";
import "./MainCalculator.css";
import math from "mathjs";

class Display extends Component {
    render () {
        console.log(this.props.data)
        let string = this.props.data.join("")
        return <h2>{string}</h2>
    }
}
class MainCalculator extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputExpresssion: "",
            operations: [],
            totalCalculation: "0",
        }
    
    }
  
    numberClicked (event) {
        const value = event.target.getAttribute("value");
       
        // const joined = this.state.operations.concat(value);

        switch (value) {
            case "C": this.setState({
                operations: [],
                totalCalculation: "0"
            })
            break;
            case "=": this.calculateOperations()
            break;
            default: this.setState({operations: [...this.state.operations, value]})//this.setState({operations: joined})
        }
    };


    calculateOperations () {
        let results = this.state.operations.join("")
        if(results.indexOf("%")){
            let modCalculator = results.split("%");
            let equals = math.mod(modCalculator[0], modCalculator[1]);
            this.setState({totalCalculation: equals})
        }
        else {
            results = String(math.eval(results));
            this.setState({totalCalculation: results})
        }

    };
    render () {
        return (
            <div id="MainCalculator">
                <div id="viewDiv">
                    <div id="totalCalculation">
                        <h1>{this.state.totalCalculation}</h1>
                    </div>
                    <div id="inputExpression">
                        <Display data={this.state.operations}/>
                    </div>
                </div>
                <div id="calculatorPad">
                    <div className="button-row">
                        <button className="extra-buttons no-left-border" value="C" onClick={this.numberClicked.bind(this)}>C</button>
                        <button className="extra-buttons" value="-" onClick={this.numberClicked.bind(this)}>+/-</button>
                        <button className="extra-buttons" value="%" onClick={this.numberClicked.bind(this)}>%</button>
                        <button className="operator-button" value="/" label="/" onClick={this.numberClicked.bind(this)}>÷</button>
                    </div>
                    <div className="button-row">
                        <button className="numericals-button no-left-border" value="7" onClick={this.numberClicked.bind(this)}>7</button>
                        <button className="numericals-button" value="8" onClick={this.numberClicked.bind(this)}>8</button>
                        <button className="numericals-button" value="9" onClick={this.numberClicked.bind(this)}>9</button>
                        <button className="operator-button" value="*" label="x" onClick={this.numberClicked.bind(this)}>x</button>
                    </div>
                    <div className="button-row">
                        <button className="numericals-button no-left-border" value="4" onClick={this.numberClicked.bind(this)}>4</button>
                        <button className="numericals-button" value="5" onClick={this.numberClicked.bind(this)}>5</button>
                        <button className="numericals-button" value="6" onClick={this.numberClicked.bind(this)}>6</button>
                        <button className="operator-button" value="-" onClick={this.numberClicked.bind(this)}>-</button>
                    </div>
                    <div className="button-row">
                        <button className="numericals-button no-left-border" value="1" onClick={this.numberClicked.bind(this)}>1</button>
                        <button className="numericals-button" value="2" onClick={this.numberClicked.bind(this)}>2</button>
                        <button className="numericals-button" value="3" onClick={this.numberClicked.bind(this)}>3</button>
                        <button className="operator-button" value="+" onClick={this.numberClicked.bind(this)}>+</button>
                    </div>
                    <div className="button-row">
                        <button id="zeroButton" className="no-left-border" value="0" onClick={this.numberClicked.bind(this)}>0</button>
                        <button className="numericals-button comma-button" value="." onClick={this.numberClicked.bind(this)}>.</button>
                        <button className="operator-button equal-button" value="=" onClick={this.numberClicked.bind(this)}>=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainCalculator;
