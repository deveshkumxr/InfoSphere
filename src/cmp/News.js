import React, { Component } from 'react'
import NewsItem from './NewsItem'
import SpinnerGIF from './SpinnerGIF';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state={
            articles:[],
            page: 1,
            totalResults: null,
            loading: false,
        };
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - InfoSphere`
    }

    componentDidMount = async ()=>{
      this.fetchMoreData()
    }

    fetchMoreData = async ()=>{
      this.props.setProgress(20)
      let link=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=1117d952c1b544838e0efb0790c463c7&page=${this.state.page}&pageSize=6`
      await this.setState({loading: true})
      this.props.setProgress(40)
      let data=await fetch(link)
      this.props.setProgress(60)
      let parsedData=await data.json()
      this.props.setProgress(80)
      // await this.setState({page: this.state.page+1})
      await this.setState({articles: this.state.articles.concat(parsedData.articles), page: this.state.page+1, loading:false, totalResults: parsedData.totalResults})
      this.props.setProgress(100)
    }

    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  render() {
    return (
      <div className="container my-3">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1 style={{marginTop: '60px'}}>
            InfoSphere - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
            headlines{" "}
          </h1>
        </div>
        {/* {this.state.loading && <SpinnerGIF />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.totalResults !== this.state.articles.length}
          loader={<SpinnerGIF />}
        >
          <div className="row my-5">
            {this.state.articles.map((e) => {
              return (
                <div className="col-md-4">
                  <NewsItem
                    key={e.url}
                    title={e.title}
                    text={e.description}
                    imgURL={e.urlToImage}
                    newsURL={e.url}
                    date={e.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
