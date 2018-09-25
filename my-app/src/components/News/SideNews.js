import React, {Component} from 'react';
import axios from 'axios';
import Error from './Error';
import SingleSide from './SingleSide';
import SelectTopic from './SelectTopic';

class SideNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenews: [],
            error: false,
        };
    }

    newsTopic = 'cbs-news';
    componentDidMount() {
        const url =`https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=57997461113b4af3be7f439d1e8781cc`;
       
        axios.get(url)
            .then((response) => {
                this.setState({
                    sidenews: response.data.articles
                })
            })
            .catch((error) => {
                this.setState({
                    error: true
                });
            });
    }
    searchApts(e) {
    
       this.newsTopic = e;
       this.componentDidMount();
      }

    renderItems() {
        if(!this.state.error){
            return this.state.sidenews.map((item) => (
                <SingleSide key={item.url} 
                           item={item} />
            ));
        } else {
            return <Error />
        }
       
    }

    render() {
        return(
            <div>
                {/* <SelectTopic sendTopic={this.searchApts.bind(this)}/> */}
                {this.renderItems()}
            </div>
        );
    }
}

export default SideNews;