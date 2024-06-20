import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";

const WatchlistNotFound = () => {
  return (
    <div className="lg:flex" style={{ justifyContent: "center" }}>
      <div className="d-flex-notfound">
        <div className="p-2 flex-fill">
          <DoNotDisturbIcon sx={{ fontSize: "200px" }} />
        </div>
        <div className="p-2 flex-fill">
          <div className="text1-notfound">Nothing to see here - yet</div>

          <div className="text2-notfound">
            When you add movies to your watchlist, they will show up here
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchlistNotFound;
