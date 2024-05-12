import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ReviewForm from "../reviewForm/reviewForm";
import api from "../../axios/apiConfig";
import "./style.css";

const Reviews = ({ getMovieData, movie }) => {
  const [reviews, setReviews] = useState([]);

  const [rating, setRating] = useState(0);
  //const [initialRating, setInitialRating] = useState(0);

  const reviewText = useRef();
  //const starRating = useRef();

  let params = useParams();
  const imdbId = params.imdbId;

  const addReview = async (e, rating) => {
    e.preventDefault();

    const reviewBody = reviewText.current;
    //const rating = starRating;

    try {
      // console.log(rating);
      // console.log(reviewBody.value);

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

  useEffect(() => {
    getMovieData(imdbId);

    getReviewsForMovie(imdbId);
  }, [getMovieData, imdbId]);

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

        <Col>
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

          {reviews?.map((review) => {
            return (
              <React.Fragment key={review.id}>
                <Row>
                  <Col>{review.body}</Col>
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
