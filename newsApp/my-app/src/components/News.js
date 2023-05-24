import React, { Component } from 'react'

import NewsItem from './NewsItem'
export class News extends Component {

  constructor(){
    super();
    this.state = {
      articles : [],
      loading  : false
    }
  }

  async componentDidMount() {
    try {
      let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=18c202d4151d4ac6ac2dabe02c3f7060";
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch news articles.");
      }
      let parsedData = await response.json();
      console.log(parsedData);
      this.setState({ articles: parsedData.articles });
    } catch (error) {
      console.log(error);
      // Handle error state or display an error message to the user
    }
  }
  

  render() {
    const { articles, loading } = this.state;
  
    return (
      <div className='container my-3'>
        <h2>News - Top Headlines</h2>
        <div className='row'>
          {loading ? (
            <p>Loading...</p>
          ) : (
            articles.map((element) => (
              <div className='col-md-4' key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}
export default News