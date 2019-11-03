import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import CriticConsensus from "./CriticConsensus.jsx";
import MoreInfo from "./MoreInfo.jsx";
import Poster from "./Poster.jsx";
import VideoPlayer from "./VideoPlayer.jsx";
import styles from "../styles/App.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      consensus: "",
      potatoPercentage: 0,
      potatoAverageRating: 0,
      potatoReviewCount: 0,
      freshPotatos: 0,
      spoiledPotatos: 0,
      audiencePercentage: 0,
      audienceAverageRating: 0,
      audienceReviewCount: 0,
      videoUrl: "",
      imgUrl: "",
      videoScene: "",
      isOpen: false
    };
    this.getMovie = this.getMovie.bind(this);
    this.openModal = this.openModal.bind(this);
    this.getMovieTest = this.getMovieTest.bind(this);
  }

  openModal() {
    this.setState({
      isOpen: true
    });
  }

  async getMovieTest() {
    try {
      let response = await axios.get("/api/movie?title=tilde");
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async getMovie(params) {
    let title = window.location.search.slice(7) || params;
    title = title.split("+").join(" ");

    try {
      let response = await axios.get(
        "http://localhost:3003/api/movie",
        {
          params: {
            title: title
          }
        }
      );
      this.setState({
        title: response.data.title,
        consensus: response.data.criticConsensus,
        potatoPercentage: response.data.potatoMeter.percentage,
        potatoAverageRating: response.data.potatoMeter.averageRating,
        potatoReviewCount: response.data.potatoMeter.totalCount,
        freshPotatos: response.data.potatoMeter.fresh,
        spoiledPotatos: response.data.potatoMeter.spoiled,
        audiencePercentage: response.data.audienceScore.percentage,
        audienceAverageRating: response.data.audienceScore.averageRating,
        audienceReviewCount: response.data.audienceScore.totalCount,
        videoUrl: response.data.videoUrl,
        imgUrl: response.data.imgUrl,
        videoScene: response.data.videoScene
      });
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  componentDidMount() {
    this.getMovie("jean+shorts+mustache");
  }

  showHideStyle() {
    return this.state.isOpen
      ? styles.modalDisplayBlock
      : styles.modalDisplayNone;
  }

  render() {
    return (
      <div
        style={styles.parentDiv}
        onClick={() => {
          if (this.state.isOpen === true) {
            this.setState({
              isOpen: false,
              videoUrl: ""
            });
            setTimeout(() => {
              this.getMovie("jean+shorts+mustache");
            }, 100);
          }
        }}
      >
        <VideoPlayer
          videoUrl={this.state.videoUrl}
          onClick={this.openModal}
          videoScene={this.state.videoScene}
          openModal={this.openModal}
        />
        <div style={this.showHideStyle()}>
          <div style={styles.modalMain}>
            <div>
              <div>
                <iframe
                  src={
                    this.state.videoUrl.replace("watch?v=", "embed/") +
                    "?showinfo=0&modestbranding=1&autoplay=1&rel=0&iv_load_policy=3"
                  }
                  width="1090px"
                  height="600px"
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.posterCriticContainer}>
          <div onClick={this.openModal}>
            <Poster imgUrl={this.state.imgUrl} />
          </div>
          <CriticConsensus
            consensus={this.state.consensus}
            title={this.state.title}
            potatoPercentage={this.state.potatoPercentage}
            audiencePercentage={this.state.audiencePercentage}
            potatoReviewCount={this.state.potatoReviewCount}
            audienceReviewCount={this.state.audienceReviewCount}
            potatoAverageRating={this.state.potatoAverageRating}
            freshPotatos={this.state.freshPotatos}
            spoiledPotatos={this.state.spoiledPotatos}
            audienceAverageRating={this.state.audienceAverageRating}
          />
        </div>
      </div>
    );
  }
}

export default App;
