import React from 'react' 
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Badge, Card, CardGroup, Carousel } from "react-bootstrap";
import html from '../images/html.svg'; 
import css from '../images/css.svg';
import javascript from '../images/javascript.svg';
import react from '../images/react.svg';
import Next from '../components/Next'; 
import Assessment1CodeSolution from '../pages/Assessment1CodeSolution.js'

const Assessment1 = () => {
  return (
    <div className='Assessment1'> 
      <header className="Assessment1-header">
        <h1> Assessment 1 : Frontend Engineer Technical Assessment Review </h1>
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
      <div className="Assessment1-content"> 
      <p className='AssessmentInfo'> 
        Lorem.ipsum Un jeu ludique, intergénérationnel, pédagogique et cérébral qui fait 
        appel à des qualités d’observation et de concentration.
      </p> 
      <div className='CodeSolution'> 
        <code className='CodeOutput'> 
        <Assessment1CodeSolution/>
        <Assessment1CodeSolution/> 
        <Assessment1CodeSolution/>

        </code>
      </div>

      <div> 
        <Next/>
      </div>

      </div>
   
    </div>
  )
}

export default Assessment1
