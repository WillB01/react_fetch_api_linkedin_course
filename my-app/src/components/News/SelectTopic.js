import React, {Component} from 'react';
import News from './News';

class SelectTopic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
          };
      
          this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.sendTopic(event.target.value);
        console.log(event.target.value);
       
      }
    
 

    render() {
        return(
            <div>

                <label>
                Pick your favorite news:
                
                <select className="browser-default" value={this.state.value} onChange={this.handleChange}>
                    <option value="cbs-news">CBS</option>
                    <option value="buzzfeed">BUZZFEED</option>
                    <option value="business-insider">BUSINESS INSIDER</option>
                    <option value="independent">INDEPENDENT</option>
                </select>
                </label>
            </div>

            
        )
    }
}

export default SelectTopic;