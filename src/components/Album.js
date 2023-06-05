import React from "react";
import "../style/album.css";
// import img from "../images/pizza.png";
// import img1 from "../images/pizza-background.jpg";

class Album extends React.Component {
  intervalId = null;
  state = {
    image: [
      { url: "/images/biblio/restaurant.jpg" },
      { url: "/images/biblio/pizza-background.jpg" },
      { url: "/images/biblio/woman.jpg" },
      { url: "/images/biblio/salmon.jpg" },
    ],
    currentIndex: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      let newIndex =
        this.state.currentIndex === this.state.image.length - 1
          ? 0
          : this.state.currentIndex + 1;

      this.setState({ currentIndex: newIndex });
    }, 3000);
  }

  renderImage(imagePath) {
    return (
      <img src={imagePath} className="d-block w-100 h-50 carousel-image" />
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const currentImage = this.state.image[this.state.currentIndex].url;
    {
      console.log(this.state.image[0].url);
    }

    return (
      <div className="album">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              {this.renderImage(currentImage)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Album;
