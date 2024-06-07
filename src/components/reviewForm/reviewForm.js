import { Button, Form } from "react-bootstrap";
import StarRating from "../star/star";

const ReviewForm = ({ handleSubmit, reviewText, labelText, defaultValue, rating, setRating }) => {

  //console.log("hi again")

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{labelText}</Form.Label>

        <div>
          <StarRating
            //ref={starRating}
            rating={rating}
            setRating={setRating}
          />
        </div>

        <Form.Control
          ref={reviewText}
          as="textarea"
          rows={4}
          defaultValue={defaultValue}
        />
      </Form.Group>

      <Button variant="outline-info" onClick={(e) => handleSubmit(e, rating)}>
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;
