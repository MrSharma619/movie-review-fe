import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import ReviewForm from "../reviewForm/reviewForm";
import api, { setAuthHeader } from "../../axios/apiConfig";
import "./style.css";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import RatingTab from "../ratingsTab";
import RatingComment from "../ratingComment";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const [rating, setRating] = useState(0);

  const [movie, setMovie] = useState({});

  //const [initialRating, setInitialRating] = useState(0);

  const reviewText = useRef();
  //const starRating = useRef();

  const token = useSelector((state) => state.token.value);
  const navigate = useNavigate();

  let params = useParams();
  const imdbId = params.imdbId;

  //console.log(imdbId);

  const addReview = async (e, rating) => {
    e.preventDefault();

    if (token.length > 0) {
      const reviewBody = reviewText.current;
      //const rating = starRating;

      try {
        // console.log(rating);
        // console.log(reviewBody.value);

        setAuthHeader(token, api);

        const response = await api.post("/api/reviews", {
          rating: rating,
          reviewBody: reviewBody.value,
          imdbId: imdbId,
        });

        //const updatedReviewIds = [...reviewIds, response.data.id];

        const updatedReviews = [...reviews, response.data];

        reviewBody.value = ""; //clear text area after this
        setRating(0); //clear stars after this

        //setInitialRating(0);        //clear stars after this

        //setReviewIds(updatedReviewIds);
        //setReviewIds(prevReviewIds => [...prevReviewIds, response.data.id]);

        setReviews(updatedReviews);
      } catch (error) {
        console.log("Reviews-addReview: ", error);
      }
    } else {
      toast.error("Please login first...");

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };

  const getReviewsForMovie = async (imdbId) => {
    try {
      const response = await api.get(`/api/movies/imdb/${imdbId}/reviews`);

      //console.log(response.data);

      if (response.data && response.data.length > 0) {
        setReviews(response.data);
      }
    } catch (error) {
      console.log("Reviews-getReviewsForMovie: ", error);
    }
  };

  const getMovieData = async (imdbId) => {

    //console.log("hi");

    try {
      const response = await api.get(`/api/movies/imdb/${imdbId}`);

      //console.log(response.data);

      setMovie(response.data);

      //setReviewIds(response.data.reviewIds);
    } catch (error) {
      console.log("App-getMovieData: ", error);
    }
  };

  useEffect(() => {
    getMovieData(imdbId);

    getReviewsForMovie(imdbId);
  }, [imdbId]);

  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img
            className="review-movie-poster"
            src={movie?.poster ? movie?.poster : "/no-poster-found.jpg"}
            alt="movie"
          />
        </Col>

        <Col style={{ overflowY: "scroll", maxHeight: "550px" }}>
            {
              <>
                <Row>
                  <Col>
                    <ReviewForm
                      rating={rating}
                      setRating={setRating}
                      //starRating={starRating}
                      //initialRating={initialRating}
                      handleSubmit={addReview}
                      reviewText={reviewText}
                      labelText="Write a review?"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </>
            }

            <RatingTab reviews={reviews} />

            <br></br>
            <hr />

            {reviews?.map((review) => {
              return (
                <React.Fragment key={review.id}>
                  <Row>
                    <Col>
                      <RatingComment review={review} />{" "}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <hr />
                    </Col>
                  </Row>
                </React.Fragment>
              );
            })}
          
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
