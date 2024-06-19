import Carousel from 'react-material-ui-carousel';
import './style.css';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import api, { setAuthHeader } from '../../axios/apiConfig';

const Hero = ({ movies }) => {

    const navigate = useNavigate();

    const token = useSelector((state) => state.token.value);

    function goToReviews(imdbId) {
        navigate(`/reviews/${imdbId}`);
    }

    async function addToWatchlist(e, imdbId) {
        e.preventDefault();

        if (token.length > 0) {

            try {
        
                setAuthHeader(token, api);
        
                const response = await api.post("/api/watchlist", {
                  imdbId: imdbId,
                });

                //console.log(response);

                if(response.status === 201){
                    toast.success("Watchlist updated successfully...");
                }
        
                
              } catch (error) {

                if(error.response.status === 409){
                    toast.error("Movie already there in your watchlist");
                }
                else{
                    console.log("Hero-addToWatchlist: ", error);
                }

            }

        }
        else {
            toast.error("Please login first...");

            setTimeout(() => {
                navigate("/login");
            }, 3000);
        }

    }

    //console.log("hero prb");

    //console.log(movies);

    return (
        <div className='movie-carousel-container'>
            <Carousel>
                {
                    movies.map((movie) => {
                        return (
                            <Paper key={movie.imdbId}>
                                <div className='movie-card-container'>
                                    <div className='movie-card' style={{ "--img": `url(${movie.backdropImages ? movie.backdropImages[0] : "/no-poster-found.jpg"})` }}>
                                        <div className='movie-detail'>
                                            <div className='movie-poster'>
                                                <img src={movie.poster ? movie.poster : "/no-poster-found.jpg"} alt='movie' />

                                            </div>

                                            <div className='movie-title'>
                                                <h4>{movie.title}</h4>

                                            </div>

                                            <div className='movie-buttons-container'>
                                                <Link to={`/trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                    <div className='play-button-icon-container'>
                                                        <FontAwesomeIcon
                                                            className='play-button-icon'
                                                            icon={faCirclePlay}
                                                        />

                                                    </div>
                                                </Link>

                                                <div className='movie-review-button-container'>

                                                    <Button className='btn-add-watchlist' variant='warning' onClick={(e) => addToWatchlist(e, movie.imdbId)}>
                                                        <div className="d-flex-add-watchlist">
                                                            <span><AddIcon /></span>
                                                            <span className='btn-watchlist-text'>Add to watchlist</span>

                                                        </div>

                                                    </Button>

                                                    <br></br>
                                                    <br></br>
                                                    <br></br>

                                                    <Button className='btn-reviews' variant='info' onClick={() => goToReviews(movie.imdbId)}>Reviews</Button>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </Paper>
                        )
                    })
                }

            </Carousel>
        </div>

    );
}

export default Hero;