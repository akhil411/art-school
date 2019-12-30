import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import "./style.css";
import Posts from "./Posts/Posts";
import API from './../../utils/API';
import Information from './../Information/Information';
import Avatar from '@material-ui/core/Avatar';

export const NewsContext = React.createContext();

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
          text: "",
          user:"",
          news: [],
          weather:[],
          posts:[]
        };
  }

  componentDidMount() {
        this.loadNews();
        this.loadWeather();
        this.loadPosts();
      }
    
      loadNews = () => {
        API.getNews()
          .then(res =>
            this.setState({ news: res.data})
          )
          .catch(err => console.log(err));
      };

      loadWeather = () => {
        API.getWeather()
          .then(res =>
            this.setState({ weather: res.data})
          )
          .catch(err => console.log(err));
      };


      onChange = e => {
        this.setState({ text: e.target.value });
      };

    onSubmit = e => {
        e.preventDefault();
        API.createPosts({text:this.state.text, user:this.props.auth.user.name})
        .then(res =>
            window.location.reload()
        )
        .catch(err => console.log(err));
      };

      loadPosts = () => {
        API.getPosts()
          .then(res =>{{
            console.log(res.data)
            this.setState({ posts: res.data})};
        }
          )
          .catch(err => console.log(err));
      };




  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    const  role  = user.role;
    
    return (
        <div className="dashboard-container">
            <div className="row row-main">
                    <div className="col-md-2">
                    <div className="left-section">
                        <div className="icon">
                           <Avatar className="avatar-icon">{user.name.charAt(0).toUpperCase()}{user.name.charAt(1).toUpperCase()}</Avatar>
                        </div>
                        <div className="user-name">
                           <h4>Hi, {user.name.split(" ")[0]}</h4>
                        </div>
                        {(() => {
                        switch (role) {
                          case 1:
                            return (
                              <div>
                                <Link to="/dashboard/manage-users">
                                  <h5>Manage Users</h5>
                                </Link>
                                <Link to="/">
                                  <h5>Manage Website</h5>
                                </Link>
                              </div>
                            );
                          case 2:
                            return (
                              <div>
                                <Link to="/register">
                                  <h5>Manage Reports</h5>
                                </Link>
                              </div>
                            );
                          case 3:
                            return (
                              <div>
                                <Link to="/register">
                                  <h5>View Reports</h5>
                                </Link>
                              </div>
                            );
                          case 4:
                            return (
                              <div>
                                <Link to="/register">
                                  <h5>Manage Reports</h5>
                                </Link>
                                <Link to="/register">
                                  <h5>Manage Website</h5>
                                </Link>
                              </div>
                            );
                          default:
                            return (
                              <div></div>
                            );
                            
                          }
                        })()}
                      
                        <button
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                            onClick={this.onLogoutClick}
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                            Logout
                        </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blog-submit">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit}>
                                            <textarea onChange={this.onChange} value={this.state.text} className="form-control" rows="4" id="comment" placeholder="Whats up!"></textarea>
                                            <hr></hr>
                                            <input type="file" name="pic" accept="image/*"></input>
                                            <input type="submit"></input>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Posts username={user.name} posts={this.state.posts}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <NewsContext.Provider value={this.state}>
                            <Information />
                        </NewsContext.Provider>
                    </div>
                </div>
            </div>
    );
  }
}

Dashboard.contextType = NewsContext;

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);