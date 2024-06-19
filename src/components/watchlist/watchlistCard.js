import CloseIcon from "@mui/icons-material/Close";

const WatchlistCard = ({ handleRemoveWatchlist, watchlistMovie }) => {
  const date = new Date(watchlistMovie.releaseDate);
  const releaseYear = date.getFullYear();


  return (
    <div className="card-watchlist">
      <img
        className="card-watchlist-img-top"
        src={watchlistMovie.poster}
        alt="Card cap"
      />
      <div className="card-watchlist-body">
        <div className="card-watchlist-title">{watchlistMovie.title}</div>

        <div className="d-flex-watchlist-footer">
          <div className="year-text">{releaseYear}</div>
          <div
            className="remove-watchlist"
            title="Remove"
            onClick={(e) => handleRemoveWatchlist(e, watchlistMovie.imdbId)}
          >
            <CloseIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchlistCard;
