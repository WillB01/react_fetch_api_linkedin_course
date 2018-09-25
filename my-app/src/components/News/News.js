import React, {Component} from 'react';
import Error from './Error';
import NewSingle from './NewSingle';
import SelectTopic from './SelectTopic';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            error: false,
        };
    }

    newsTopic = 'cbs-news';
    componentDidMount() {
        const url =`https://newsapi.org/v2/top-headlines?sources=${this.newsTopic}&apiKey=57997461113b4af3be7f439d1e8781cc`;

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    news: data.articles
                });
                console.log(this.state.news);
              
            })
            .catch((error) => {
                this.setState({
                    error: true
                });
            });


    }
    searchApts(e) {
       this.setState({
        newsTopic: e
       });
       this.newsTopic = e;
       this.componentDidMount();
      }

    renderItems() {
     if(!this.state.error){
         return this.state.news.map((item) => (
            <NewSingle key={item.url} 
                       item={item} />
        ));
     } else {
         return <Error />
     }
        
    }

    render() {
        return(
            <div className="row">
                <SelectTopic sendTopic={this.searchApts.bind(this)}/>
                {this.renderItems()}
            </div>
        );
    }
}

export default News;