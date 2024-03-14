import React from "react";
import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Badge, Card, CardGroup, Carousel } from "react-bootstrap";
import TopBar from "./components/TopBar";
import html from "./images/html.svg";
import css from "./images/css.svg";
import javascript from "./images/javascript.svg";
import react from "./images/react.svg";
import Code from "./images/NextCode.png";
import Assessment1 from "./pages/Assessment1";
import Assessment2 from "./pages/Assessment2";
import Assessment3 from "./pages/Assessment3";
import Assessment4 from "./pages/Assessment4";
import Assessment5 from "./pages/Assessment5";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";  
import Error from "./components/Error";
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <>
      <TopBar />
      <div className="App">
        <header className="App-header">
          <h1> Frontend Engineer Technical Assessment Review </h1> 
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("GeeksForGeeks")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Welcomes You")
                .start();
            }}
          />           
          <div className="Stacks">
            <Carousel>
              <Carousel.Item>
                <img src={html} className="Stacks-logo" alt="logo" />
                <Carousel.Caption>
                  <p>
                    <code>HTML</code>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={css} className="Stacks-logo" alt="logo" />
                <Carousel.Caption>
                  <p>
                    <code>CSS</code>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={javascript} className="Stacks-logo" alt="logo" />
                <Carousel.Caption>
                  <p>
                    <code>JavaScript</code>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={react} className="Stacks-logo" alt="logo" />
                <Carousel.Caption>
                  <p>
                    <code>React</code>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <div className="html">
              <img src={html} className="Stacks-logo" alt="logo" />
              <p>
                <code>HTML</code>
              </p>
            </div>
            <div className="css">
              <img src={css} className="Stacks-logo" alt="logo" />
              <p>
                <code>CSS</code>
              </p>
            </div>
            <div className="javascript">
              <img src={javascript} className="Stacks-logo" alt="logo" />
              <p>
                <code>JavaScript</code>
              </p>
            </div>
            <div className="react">
              <img src={react} className="Stacks-logo" alt="logo" />
              <p>
                <code>React</code>
              </p>
            </div>
          </div>
        </header>
        <div className="App-content"> 
        <CardGroup>
            <Card style={{ borderRadius: '15px', margin: '10px', border: 'none' }}> 
            <Badge pill bg="warning" text="dark" outline> Level : Beginner </Badge>
              <Card.Img variant="top" img src={Code} alt="Illustration d'article" />
              <Card.Body>
                <Card.Title> Assessment1 </Card.Title>
                <Card.Text> 
                    <strong> Frontend Engineer Technical Assessment Review </strong> : A HTML, CSS Assessment for Frontend Engineer Role.
                </Card.Text> 
                <Link href= "/Assessment1"> See More... </Link> 
                <Route exact path="/" element={<Assessment1/>} />
              </Card.Body>
              <Card.Footer>
                <small className="text-muted"> From HackerRank</small>
              </Card.Footer>
            </Card>
            <Card style={{ borderRadius: '15px', margin: '10px', border: 'none' }}>
            <Badge pill bg="danger" text="primary" outline> Niveau :  </Badge>
              <Card.Img variant="top" img src={Code} alt="Illustration d'article" />
              <Card.Body>
                <Card.Title> Assessment2 </Card.Title>
                <Card.Text> 
                <strong> Frontend Engineer Technical Assessment Review </strong> : A HTML, CSS and JavaScript Assessment for Frontend Engineer Role.{' '}
                </Card.Text> 
                <Route exact path="/" element={<Assessment2/>} />
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">From HackerRank</small>
              </Card.Footer>
            </Card>
            <Card style={{ borderRadius: '15px', margin: '10px', border: 'none' }}> 
            <Badge pill bg="primary" text="light" outline> Niveau :  </Badge>
              <Card.Img variant="top" img src={Code} alt="Illustration d'article" />
              <Card.Body>
                <Card.Title> Assessment3 </Card.Title>
                <Card.Text> 
                    <strong> Frontend Engineer Technical Assessment Review </strong> : A HTML, CSS, JavaScript and React Assessment for Frontend Engineer Role.
                </Card.Text> 
                <Route exact path="/" element={<Assessment3/>} />
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">From HackerRank</small>
              </Card.Footer>
            </Card>
            <Card style={{ borderRadius: '15px', margin: '10px', border: 'none' }}> 
            <Badge pill bg="primary" text="light" outline> Niveau :  </Badge>
              <Card.Img variant="top" img src={Code} alt="Illustration d'article" />
              <Card.Body>
                <Card.Title> Assessment4 </Card.Title>
                <Card.Text> 
                    <strong> Frontend Engineer Technical Assessment Review </strong> : A JavaScript Algorithm Assessment for Frontend Engineer Role.
                </Card.Text> 
                <Route exact path="/" element={<Assessment4/>} />
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">From Turing.com</small>
              </Card.Footer>
            </Card> 
            <Card style={{ borderRadius: '15px', margin: '10px', border: 'none' }}> 
            <Badge pill bg="light" text="dark" outline> Niveau :  </Badge>
              <Card.Img variant="top" img src={Code} alt="Illustration d'article" />
              <Card.Body>
                <Card.Title> Assessment5 </Card.Title>
                <Card.Text> 
                    <strong> Frontend Engineer Technical Assessment Review </strong> : A JavaScript Algorithm Assessment for Frontend Engineer Role.
                </Card.Text> 
                <Route exact path="/" element={<Assessment5/>} />
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">From Turing.com</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </div>
    </>
  );
}

export default App;
