import React from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Home() {
  
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

  return (
    <div className="Home_text">
      <h1 className="premiere">Premiere coming soon</h1>
      <Slider {...sliderSettings}>
        <div>
          <img src="https://inkaraganda.kz/wp-content/uploads/2023/11/berkut.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/Y9mP-PFn3Vs/hqdefault.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="https://img.kapital.kz/tP-NAP1uRf0/rs:auto:1200:627:1:0/g:sm/bG9jYWw6Ly8vYS9mLzAvOC8yL2QyMjJiMTI0NzI4YzdiOTg3NGNhYTE2YjZjNy5qcGc" alt="Image 3" />
        </div>
        <div>
          <img src="https://img.prosports.kz/news/content//202205/209991_1339ebf2d5458f28320988d1fa2d915b.jpg" alt="Image 4" />
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/uUQnBJtKr5k/maxresdefault.jpg" alt="Image 5" />
        </div>
        <div>
          <img src="https://zakon-img1.object.pscloud.io/a50f8b4d0d2149d6861bbcd34e5ba579.jpeg" alt="Image 6" />
        </div>
      </Slider>

      <div className="center_text">
        <h3>
          Welcome to MOVIE - your source for everything related to the world of
          cinema! MOVIE is an informational movie website that offers you a unique
          opportunity to immerse yourself in the magic of filmmaking and discover
          all about your favorite industry.
        </h3>
        <br />
        <h1>On MOVIE, you will find:</h1>
        <hr />
      </div>
      <div className="T1">
        <h1>The Latest News</h1>
        <p>
          We keep you updated on all events in the world of movies, providing
          fresh news, interviews with actors and directors, and analysis of the
          most anticipated releases.
        </p>
      </div>
      <hr />
      <div className="T2">
        <h1>Movie Reviews</h1>
        <p>
          Our experts offer in-depth analyses and reviews of the latest cinematic
          masterpieces to help you choose which movies are worth watching.
        </p>
      </div>
      <hr />
      <div className="T1">
        <h1>Exclusive Content</h1>
        <p>
          MOVIE provides access to unique video interviews, behind-the-scenes
          footage, trailers, and other exclusive content that will immerse you in
          the world of movies.
        </p>
      </div>
      <hr />
      <div className="T2">
        <h1>Actor and Director Filmographies</h1>
        <p>
          We have detailed pages with information about actors and directors so
          you can explore their careers and keep track of their latest works.
        </p>
      </div>
      <hr />
      <div className="T1">
        <h1>Discussions and Community</h1>
        <p>
          MOVIE also offers a platform for discussing movies with other fans,
          sharing your impressions, and providing reviews of films.
        </p>
      </div>
      <hr />
      <div className="center_text">
        <h3>
          Come to MOVIE to dive into the world of movies and enjoy a rich
          cinematic culture!
        </h3>
      </div>
    </div>
  );
}

export default Home;
