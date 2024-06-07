import "./style.css";

const RatingTab = ({ reviews }) => {
  const totalReviews = reviews?.length;

  const averageRating =
    reviews?.reduce((total, next) => total + next.rating, 0) / totalReviews;

  const total5StarReviews = reviews?.filter(
    (review) => review.rating === 5
  ).length;
  const total4StarReviews = reviews?.filter(
    (review) => review.rating === 4
  ).length;
  const total3StarReviews = reviews?.filter(
    (review) => review.rating === 3
  ).length;
  const total2StarReviews = reviews?.filter(
    (review) => review.rating === 2
  ).length;
  const total1StarReviews = reviews?.filter(
    (review) => review.rating === 1
  ).length;

  //console.log(totalReviews);

  return (
    <div>
      <div className="flex items-center mb-2">
        {/* 5 star images begin here */}

        <div style={{ display: "flex" }}>
          <svg
            className={
              averageRating > 0
                ? "w-4 h-4 text-yellow-300 me-1"
                : "w-4 h-4 text-gray-300 me-1"
            }
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className={
              averageRating > 1
                ? "w-4 h-4 text-yellow-300 me-1"
                : "w-4 h-4 text-gray-300 me-1"
            }
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className={
              averageRating > 2
                ? "w-4 h-4 text-yellow-300 me-1"
                : "w-4 h-4 text-gray-300 me-1"
            }
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className={
              averageRating > 3
                ? "w-4 h-4 text-yellow-300 me-1"
                : "w-4 h-4 text-gray-300 me-1"
            }
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className={
              averageRating > 4
                ? "w-4 h-4 text-yellow-300 me-1"
                : "w-4 h-4 text-gray-300 me-1"
            }
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>

        {/* 5 star images till here */}

        {averageRating ? (
          <div className="rating-text">
            <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              {averageRating}
            </span>
            <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              out of
            </span>
            <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              5
            </span>
          </div>
        ) : <></>}
      </div>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {totalReviews} global rating(s)
      </p>
      <div className="flex items-center mt-4">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          5 star
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div
            className="h-5 bg-yellow-300 rounded"
            style={{
              width: `${
                totalReviews === 0
                  ? 0
                  : (total5StarReviews * 100) / totalReviews
              }%`,
            }}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {`${
            totalReviews === 0 ? 0 : (total5StarReviews * 100) / totalReviews
          }%`}
        </span>
      </div>
      <div className="flex items-center mt-4">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          4 star
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div
            className="h-5 bg-yellow-300 rounded"
            style={{
              width: `${
                totalReviews === 0
                  ? 0
                  : (total4StarReviews * 100) / totalReviews
              }%`,
            }}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {`${
            totalReviews === 0 ? 0 : (total4StarReviews * 100) / totalReviews
          }%`}
        </span>
      </div>
      <div className="flex items-center mt-4">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          3 star
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div
            className="h-5 bg-yellow-300 rounded"
            style={{
              width: `${
                totalReviews === 0
                  ? 0
                  : (total3StarReviews * 100) / totalReviews
              }%`,
            }}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {`${
            totalReviews === 0 ? 0 : (total3StarReviews * 100) / totalReviews
          }%`}
        </span>
      </div>
      <div className="flex items-center mt-4">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          2 star
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div
            className="h-5 bg-yellow-300 rounded"
            style={{
              width: `${
                totalReviews === 0
                  ? 0
                  : (total2StarReviews * 100) / totalReviews
              }%`,
            }}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {`${
            totalReviews === 0 ? 0 : (total2StarReviews * 100) / totalReviews
          }%`}
        </span>
      </div>
      <div className="flex items-center mt-4">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          1 star
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div
            className="h-5 bg-yellow-300 rounded"
            style={{
              width: `${
                totalReviews === 0
                  ? 0
                  : (total1StarReviews * 100) / totalReviews
              }%`,
            }}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {`${
            totalReviews === 0 ? 0 : (total1StarReviews * 100) / totalReviews
          }%`}
        </span>
      </div>
    </div>
  );
};

export default RatingTab;
