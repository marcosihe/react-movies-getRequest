import React from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => {
    const {title, rate, director, stars, date, duration, img} = props;
    return (
        <div className="movie-item-style-2">
                <img src={img} alt="" />
                <div className="mv-item-infor">
                  <h6>
                    <a href="moviesingle.html">
                      {title}
                    </a>
                  </h6>
                  <p className="rate">
                    <i className="ion-android-star"></i>
                    {rate} /10
                  </p>
                  <p className="describe">
                    {props.children}
                  </p>
                  <p className="run-time">
                    {" "}
                    Run Time: {duration}’ . <span>MMPA: PG-13 </span> .{" "}
                    <span>Release: {date}</span>
                  </p>
                  <p>
                    Director: <Link to="">{director}</Link>
                  </p>
                  <p>
                    Stars: <Link to="">{stars}</Link>
                  </p>
                </div>
              </div>
    )
}

export default Movie
