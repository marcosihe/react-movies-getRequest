import React from "react";
import { Link } from 'react-router-dom';

const PageWrapper = (props) => {
  return (
    <div>
      <div id="preloader">
        <img
          className="logo"
          src="images/logo1.png"
          alt=""
          width="119"
          height="58"
        />
        <div id="status">
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="login-wrapper" id="login-content">
        <div className="login-content">
          <Link to="" className="close">
            x
          </Link>
          <h3>Login</h3>
          <form method="post" action="#">
            <div className="row">
              <label for="username">
                Username:
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Hugh Jackman"
                  pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                  required="required"
                />
              </label>
            </div>

            <div className="row">
              <label for="password">
                Password:
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="******"
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
                />
              </label>
            </div>
            <div className="row">
              <div className="remember">
                <div>
                  <input type="checkbox" name="remember" value="Remember me" />
                  <span>Remember me</span>
                </div>
                <Link to="">Forget password ?</Link>
              </div>
            </div>
            <div className="row">
              <button type="submit">Login</button>
            </div>
          </form>
          <div className="row">
            <p>Or via social</p>
            <div className="social-btn-2">
              <Link className="fb" to="">
                <i className="ion-social-facebook"></i>Facebook
              </Link>
              <Link className="tw" to="">
                <i className="ion-social-twitter"></i>twitter
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="login-wrapper" id="signup-content">
        <div className="login-content">
          <Link to="" className="close">
            x
          </Link>
          <h3>sign up</h3>
          <form method="post" action="#">
            <div className="row">
              <label for="username-2">
                Username:
                <input
                  type="text"
                  name="username"
                  id="username-2"
                  placeholder="Hugh Jackman"
                  pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                  required="required"
                />
              </label>
            </div>

            <div className="row">
              <label for="email-2">
                your email:
                <input
                  type="password"
                  name="email"
                  id="email-2"
                  placeholder=""
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
                />
              </label>
            </div>
            <div className="row">
              <label for="password-2">
                Password:
                <input
                  type="password"
                  name="password"
                  id="password-2"
                  placeholder=""
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
                />
              </label>
            </div>
            <div className="row">
              <label for="repassword-2">
                re-type Password:
                <input
                  type="password"
                  name="password"
                  id="repassword-2"
                  placeholder=""
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
                />
              </label>
            </div>
            <div className="row">
              <button type="submit">sign up</button>
            </div>
          </form>
        </div>
      </div>

      <header className="ht-header">
        <div className="container">
          <nav className="navbar navbar-default navbar-custom">
            <div className="navbar-header logo">
              <div
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <div id="nav-icon1">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <Link href="index-2.html">
                <img
                  className="logo"
                  src="images/logo1.png"
                  alt=""
                  width="119"
                  height="58"
                />
              </Link>
            </div>
            <div
              className="collapse navbar-collapse flex-parent"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav flex-child-menu menu-left">
                <li className="hidden">
                  <Link href="#page-top"></Link>
                </li>
                <li className="dropdown first">
                  <Link
                    className="btn btn-default dropdown-toggle lv1"
                    data-toggle="dropdown"
                  >
                    Home <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </Link>
                  <ul className="dropdown-menu level1">
                    <li>
                      <Link href="index-2.html">Home 01</Link>
                    </li>
                    <li>
                      <Link href="homev2.html">Home 02</Link>
                    </li>
                    <li>
                      <Link href="homev3.html">Home 03</Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown first">
                  <Link
                    className="btn btn-default dropdown-toggle lv1"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    movies
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </Link>
                  <ul className="dropdown-menu level1">
                    <li className="dropdown">
                      <Link
                        to=""
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Movie grid<i className="ion-ios-arrow-forward"></i>
                      </Link>
                      <ul className="dropdown-menu level2">
                        <li>
                          <Link href="moviegrid.html">Movie grid</Link>
                        </li>
                        <li>
                          <Link href="moviegridfw.html">movie grid full width</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="movielist.html">Movie list</Link>
                    </li>
                    <li>
                      <Link href="moviesingle.html">Movie single</Link>
                    </li>
                    <li className="it-last">
                      <Link href="seriessingle.html">Series single</Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown first">
                  <Link
                    className="btn btn-default dropdown-toggle lv1"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    celebrities{" "}
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </Link>
                  <ul className="dropdown-menu level1">
                    <li>
                      <Link href="celebritygrid01.html">celebrity grid 01</Link>
                    </li>
                    <li>
                      <Link href="celebritygrid02.html">celebrity grid 02 </Link>
                    </li>
                    <li>
                      <Link href="celebritylist.html">celebrity list</Link>
                    </li>
                    <li className="it-last">
                      <Link href="celebritysingle.html">celebrity single</Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown first">
                  <Link
                    className="btn btn-default dropdown-toggle lv1"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    news <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </Link>
                  <ul className="dropdown-menu level1">
                    <li>
                      <Link href="bloglist.html">blog List</Link>
                    </li>
                    <li>
                      <Link href="bloggrid.html">blog Grid</Link>
                    </li>
                    <li className="it-last">
                      <Link href="blogdetail.html">blog Detail</Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown first">
                  <Link
                    className="btn btn-default dropdown-toggle lv1"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    community{" "}
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </Link>
                  <ul className="dropdown-menu level1">
                    <li>
                      <Link href="userfavoritegrid.html">user favorite grid</Link>
                    </li>
                    <li>
                      <Link href="userfavoritelist.html">user favorite list</Link>
                    </li>
                    <li>
                      <Link href="userprofile.html">user profile</Link>
                    </li>
                    <li className="it-last">
                      <Link href="userrate.html">user rate</Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav flex-child-menu menu-right">
                <li className="dropdown first">
                  <Link
                    className="btn btn-default dropdown-toggle lv1"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    pages{" "}
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </Link>
                  <ul className="dropdown-menu level1">
                    <li>
                      <Link href="landing.html">Landing</Link>
                    </li>
                    <li>
                      <Link href="404.html">404 Page</Link>
                    </li>
                    <li className="it-last">
                      <Link href="comingsoon.html">Coming soon</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="">Help</Link>
                </li>
                <li className="loginLink">
                  <Link to="">LOG In</Link>
                </li>
                <li className="btn signupLink">
                  <Link to="">sign up</Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="top-search">
            <select>
              <option value="united">TV show</option>
              <option value="saab">Others</option>
            </select>
            <input
              type="text"
              placeholder="Search for a movie, TV Show or celebrity that you are looking for"
            />
          </div>
        </div>
      </header>

      <div className="hero common-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-ct">
                <h1> movie listing - list</h1>
                <ul className="breadcumb">
                  <li className="active">
                    <Link to="">Home</Link>
                  </li>
                  <li>
                    {" "}
                    <span className="ion-ios-arrow-right"></span> movie listing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-single movie_list">
        <div className="container">
          <div className="row ipad-width2">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="topbar-filter">
                <p>
                  Found <span>{props.moviesFound} movies</span> in total
                </p>
                <label>Sort by:</label>
                <select>
                  <option value="popularity">Popularity Descending</option>
                  <option value="popularity">Popularity Ascending</option>
                  <option value="rating">Rating Descending</option>
                  <option value="rating">Rating Ascending</option>
                  <option value="date">Release date Descending</option>
                  <option value="date">Release date Ascending</option>
                </select>
                <Link to="movielist.html" className="list">
                  <i className="ion-ios-list-outline active"></i>
                </Link>
                <Link to="moviegrid.html" className="grid">
                  <i className="ion-grid"></i>
                </Link>
              </div>

              {props.children}
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="sidebar">
                <div className="searh-form">
                  <h4 className="sb-title">Search for movie</h4>
                  <form className="form-style-1" action="#">
                    <div className="row">
                      <div className="col-md-12 form-it">
                        <label>Movie name</label>
                        <input type="text" placeholder="Enter keywords" />
                      </div>
                      <div className="col-md-12 form-it">
                        <label>Genres & Subgenres</label>
                        <div className="group-ip">
                          <select
                            name="skills"
                            multiple=""
                            className="ui fluid dropdown"
                          >
                            <option value="">Enter to filter genres</option>
                            <option value="Action1">Action 1</option>
                            <option value="Action2">Action 2</option>
                            <option value="Action3">Action 3</option>
                            <option value="Action4">Action 4</option>
                            <option value="Action5">Action 5</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12 form-it">
                        <label>Rating Range</label>

                        <select>
                          <option value="range">
                            -- Select the rating range below --
                          </option>
                          <option value="saab">
                            -- Select the rating range below --
                          </option>
                          <option value="saab">
                            -- Select the rating range below --
                          </option>
                          <option value="saab">
                            -- Select the rating range below --
                          </option>
                        </select>
                      </div>
                      <div className="col-md-12 form-it">
                        <label>Release Year</label>
                        <div className="row">
                          <div className="col-md-6">
                            <select>
                              <option value="range">From</option>
                              <option value="number">10</option>
                              <option value="number">20</option>
                              <option value="number">30</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <select>
                              <option value="range">To</option>
                              <option value="number">20</option>
                              <option value="number">30</option>
                              <option value="number">40</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 ">
                        <input
                          className="submit"
                          type="submit"
                          value="submit"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="ads">
                  <img src="images/uploads/ads1.png" alt="" />
                </div>
                <div className="sb-facebook sb-it">
                  <h4 className="sb-title">Find us on Facebook</h4>
                  
                </div>
                <div className="sb-twitter sb-it">
                  <h4 className="sb-title">Tweet to us</h4>
                  <div className="slick-tw">
                    <div className="tweet item" id=""></div>
                    <div className="tweet item" id=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="ht-footer">
        <div className="container">
          <div className="flex-parent-ft">
            <div className="flex-child-ft item1">
              <Link href="index-2.html">
                <img className="logo" src="images/logo1.png" alt="" />
              </Link>
              <p>
                5th Avenue st, manhattan
                <br />
                New York, NY 10001
              </p>
              <p>
                Call us: <Link to="">(+54) 9 381 6703322</Link>
              </p>
            </div>
            <div className="flex-child-ft item2">
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link to="">About</Link>
                </li>
                <li>
                  <Link to="">Blockbuster</Link>
                </li>
                <li>
                  <Link to="">Contact Us</Link>
                </li>
                <li>
                  <Link to="">Forums</Link>
                </li>
                <li>
                  <Link to="">Blog</Link>
                </li>
                <li>
                  <Link to="">Help Center</Link>
                </li>
              </ul>
            </div>
            <div className="flex-child-ft item3">
              <h4>Legal</h4>
              <ul>
                <li>
                  <Link to="">Terms of Use</Link>
                </li>
                <li>
                  <Link to="">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="">Security</Link>
                </li>
              </ul>
            </div>
            <div className="flex-child-ft item4">
              <h4>Account</h4>
              <ul>
                <li>
                  <Link to="">My Account</Link>
                </li>
                <li>
                  <Link to="">Watchlist</Link>
                </li>
                <li>
                  <Link to="">Collections</Link>
                </li>
                <li>
                  <Link to="">User Guide</Link>
                </li>
              </ul>
            </div>
            <div className="flex-child-ft item5">
              <h4>Newsletter</h4>
              <p>
                Subscribe to our newsletter system now <br /> to get latest news
                from us.
              </p>
              <form action="#">
                <input type="text" placeholder="Enter your email..." />
              </form>
              <Link to="" className="btn">
                Subscribe now <i className="ion-ios-arrow-forward"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="ft-copyright">
          <div className="ft-left">
            <p>
              <Link to="/">
                Marcos E. Herrera
              </Link>
            </p>
          </div>
          <div className="backtotop">
            <p>
              <Link to="" id="back-to-top">
                Back to top <i className="ion-ios-arrow-thin-up"></i>
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageWrapper;
