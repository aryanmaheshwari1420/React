import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";

import PropTypes from 'prop-types'

class News extends Component {

  static defaultProps ={
    country : 'in',
    pageSize : 8,
    category: 'science'
  }


  static propTypes ={
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=18c202d4151d4ac6ac2dabe02c3f7060&page=1&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch news articles.");
      }
      let parsedData = await response.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      });
    } catch (error) {
      console.log(error);
      // Handle error state or display an error message to the user
    }
  }

  handleOnNext = async () => {
    if (
      this.state.page + 1 <=
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=18c202d4151d4ac6ac2dabe02c3f7060&page=${
          this.state.page + 1
        }&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch news articles.");
        }
        let parsedData = await response.json();
        console.log(parsedData);
        this.setState({
          articles: parsedData.articles,
          page: this.state.page + 1,
          loading: false,
        });
      } catch (error) {
        console.log(error);
        // Handle error state or display an error message to the user
      }
    }
  };

  handleOnPrev = async () => {
    if (this.state.page > 1) {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=18c202d4151d4ac6ac2dabe02c3f7060&page=${
          this.state.page - 1
        }&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch news articles.");
        }
        let parsedData = await response.json();
        console.log(parsedData);
        this.setState({
          articles: parsedData.articles,
          page: this.state.page - 1,
          loading: false,
        });
      } catch (error) {
        console.log(error);
        // Handle error state or display an error message to the user
      }
    }
  };

  render() {
    const { articles, loading } = this.state;

    return (
      <div className="container my-3">
        <h1 className="text-center">News-Top Headlines</h1>
        {loading && <Spinner />}

        <div className="row">
          {!loading &&
            articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.handleOnPrev}
            className="btn btn-light"
          >
            ← Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleOnNext}
            className="btn btn-light"
          >
            Next →
          </button>
        </div>
      </div>
    );
  }
}

export default News;
