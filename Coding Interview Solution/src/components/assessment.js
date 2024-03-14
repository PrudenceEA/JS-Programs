import React from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Card, CardGroup } from 'react-bootstrap';


const assessment = () => {
  return (
    <> 
    <div>
        <CardGroup>
            <Card style={{ borderRadius: '15px', margin: '10px', border: 'none' }}> 
            <Badge bg="none" text="primary" outline> Niveau :  </Badge>
              <Card.Img variant="top" img src={Code} alt="Illustration d'article" />
              <Card.Body>
                <Card.Title> Assessment1 </Card.Title>
                <Card.Text> 
                    <strong> Frontend Engineer Technical Assessment Review </strong> : This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <a href="https://www.journaldunet.com/solutions/seo-referencement/" class="btn btn-primary" target="_blank">Lire la suite </a>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card style={{ borderRadius: '15px', margin: '10px', border: 'none' }}>
            <Badge bg="none" text="primary" outline> Niveau :  </Badge>
              <Card.Img variant="top" img src={Code} alt="Illustration d'article" />
              <Card.Body>
                <Card.Title> Assessment2 </Card.Title>
                <Card.Text> 
                <strong> Frontend Engineer Technical Assessment Review </strong> : This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
                <a href="https://www.journaldunet.com/solutions/seo-referencement/" class="btn btn-primary" target="_blank">Lire la suite </a>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card style={{ borderRadius: '15px', margin: '10px', border: 'none' }}> 
            <Badge bg="none" text="primary" outline> Niveau :  </Badge>
              <Card.Img variant="top" img src={Code} alt="Illustration d'article" />
              <Card.Body>
                <Card.Title> Assessment3 </Card.Title>
                <Card.Text> 
                    <strong> Frontend Engineer Technical Assessment Review </strong> : This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
                <a href="https://www.journaldunet.com/solutions/seo-referencement/" class="btn btn-primary" target="_blank">Lire la suite </a>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card style={{ borderRadius: '15px', margin: '10px', border: 'none' }}> 
            <Badge bg="none" text="primary" outline> Niveau :  </Badge>
              <Card.Img variant="top" img src={Code} alt="Illustration d'article" />
              <Card.Body>
                <Card.Title> Assessment4 </Card.Title>
                <Card.Text> 
                    <strong> Frontend Engineer Technical Assessment Review </strong> : This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
                <a href="https://www.journaldunet.com/solutions/seo-referencement/" class="btn btn-primary" target="_blank">Lire la suite </a>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card> 
            <Card style={{ borderRadius: '15px', margin: '10px', border: 'none' }}> 
            <Badge bg="none" text="primary" outline> Niveau :  </Badge>
              <Card.Img variant="top" img src={Code} alt="Illustration d'article" />
              <Card.Body>
                <Card.Title> Assessment5 </Card.Title>
                <Card.Text> 
                    <strong> Frontend Engineer Technical Assessment Review </strong> : This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
                <a href="https://www.journaldunet.com/solutions/seo-referencement/" class="btn btn-primary" target="_blank">Lire la suite </a>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
    </div>
    </>
  )
}

export default assessment
