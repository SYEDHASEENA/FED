import React, {Component} from react;
class Counter extends Component{
    constructor(){
        this.state{
            count=0
        }
        this.increment=this.increment.bind(this)
        
        this.decrement=this.decrement.bind(this)
        increment=()=>{
            this.setState(prevValue=>({count:prevValue.count+1}));
        }
        decrement=()=>{
            this.setState(prevValue=>({count:prevValue.count-1}));
        }
    }
    render(){
         <div class="mycounter">

        <button onClick={this.increment()}>+</button>

        <button onClick={this.decrement()}>-</button>
        </div>
    }
}
export default Counter;