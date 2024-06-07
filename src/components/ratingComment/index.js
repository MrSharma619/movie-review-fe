import { Avatar } from "@mui/material";

const RatingComment = ({ review }) => {

    const date = new Date(review.userJoinedOn);
    const date1 = new Date(review.createdOn);

    const options = { year: 'numeric', month: 'long' };
    const userJoinedOnFullMonthYear = date.toLocaleDateString('en-US', options);

    const options1 = { year: 'numeric', month: 'long', day: 'numeric' };
    const reviewCreatedOnfullDate = date1.toLocaleDateString('en-US', options1);

    //console.log('review', review);

  return (
    <div>
      <article>
        <div className="flex items-center mb-4">
          <Avatar>{review.userName.substring(0, 1).toUpperCase()}</Avatar>
          <div className="font-medium dark:text-white ms-3">
            <span>
              {review.userName}
              <span
                className="block text-sm text-gray-500 dark:text-gray-400"
              >
                Joined on {userJoinedOnFullMonthYear}
              </span>
            </span>
          </div>
        </div>

        {/* individual rating stars begin */}

        <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
          <svg
            className={review.rating > 0 ? "w-4 h-4 text-yellow-300 me-1" : "w-4 h-4 text-gray-300 me-1"}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className={review.rating > 1 ? "w-4 h-4 text-yellow-300 me-1" : "w-4 h-4 text-gray-300 me-1"}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className={review.rating > 2 ? "w-4 h-4 text-yellow-300 me-1" : "w-4 h-4 text-gray-300 me-1"}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className={review.rating > 3 ? "w-4 h-4 text-yellow-300 me-1" : "w-4 h-4 text-gray-300 me-1"}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className={review.rating > 4 ? "w-4 h-4 text-yellow-300 me-1" : "w-4 h-4 text-gray-300 me-1"}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          
        </div>

{/* individual rating stars end */}


        <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
          <p>
            Reviewed on{" "} 
            <span>{reviewCreatedOnfullDate}</span>
          </p>

        </footer>

        <p className="mb-2 text-gray-200">
          {review.body}
        </p>
        
        
      </article>
    </div>
  );
};

export default RatingComment;
