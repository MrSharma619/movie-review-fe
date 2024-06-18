import { useSelector } from "react-redux";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Watchlist = () => {
  const navigate = useNavigate();

  const getRandomItem = () => {
    const imagesWhenNotLoggedIn = [
      "https://comics2film.com/images/1056/594/1/black-panther-chadwick-boseman-marvel.jpg",
      "https://resizing.flixster.com/KzzoF-1afmcDUIn__ykJWc5p__c=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11550244_v_h9_am.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTQ5ODk1NDg2NF5BMl5BanBnXkFtZTcwMTM5OTEyNw@@._V1_.jpg",
      "https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-1gr7p9_eb324509.jpeg?region=0%2C42%2C630%2C355",
      "https://facts.net/wp-content/uploads/2023/10/42-facts-about-the-movie-the-notebook-1697791193.jpg",
    ];

    // Get a random index between 0 and the length of the array minus 1
    const randomIndex = Math.floor(
      Math.random() * imagesWhenNotLoggedIn.length
    );

    // console.log(randomIndex);

    // console.log(imagesWhenNotLoggedIn[randomIndex]);

    // Return the item at the random index
    return imagesWhenNotLoggedIn[randomIndex];
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const token = useSelector((state) => state.token.value);

  if (token.length > 0) {
    return <h1>hi</h1>;
  }

  return (
    <div className="d-flex-watchlist">
      <div className="flex-fill text-watchlist-div-parent">
        <div className="text-watchlist-div">
          <span>One Watchlist</span>
          <br></br>

          <span>to rule them all...</span>

          <br></br>
          <br></br>

          <span>
            Even if it's not on{" "}
            <span className="gold-text-watchlist">GOLD</span>
          </span>
        </div>

        <br></br>

        <button onClick={handleLoginRedirect} className="rainbow-btn">
          Please login now!
        </button>
      </div>
      <div className="flex-fill img-watchlist-div">
        <img
          className="img-watchlist"
          src={getRandomItem()}
          alt="dynamic watchlist page"
        />
      </div>
    </div>
  );
};

export default Watchlist;
