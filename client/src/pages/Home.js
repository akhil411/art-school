import React, { Component } from "react";
import Login from "./../components/Login/Login";
import HeroImage from "./../components/HeroImage/HeroImage";
import { Col, Row, Container } from "../components/layout/Grid";
import Information from "./../components/Information/Information";
import API from "../utils/API";


export const NewsContext = React.createContext();

class Home extends Component {
    state = {
        news: [],
        weather:[]
      };
    
      componentDidMount() {
        this.loadNews();
        this.loadWeather();
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

  render() {
    return (
      <Container fluid>
        <Row>
            <Col size="md-12">
                <HeroImage />
            </Col>
        </Row>
        <Row>
            <Col size="md-6"> 
                <NewsContext.Provider value={this.state}>
                    <div>
                        <Information />
                    </div>
                </NewsContext.Provider>
            </Col>
            <Col size="md-6 login"> 
                <Login history= {this.props.history} />
            </Col>
        </Row>
      </Container>
    );
  };
};

Home.contextType = NewsContext;

export default Home;
