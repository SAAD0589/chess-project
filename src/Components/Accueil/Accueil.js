import React from 'react';
import "../css/style.css"
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Accueil() {
    return (
      <div className='AcceuilBody '>
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="pictures/bg5.jpg"
          alt="First slide"
        />
         <Carousel.Caption className='CarouselCaption '>
                    <div className='para'>
                      <h1 class="h1">Professional Chess <span class="club">Club</span></h1>
                      <p>learn and play with the best </p>
                      <button className=' btn ReadMe1 btn-fluid w-25'>Read More</button>
                    </div>
                    
                  </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="pictures/bg6.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className='CarouselCaption'>
                    <div className='para'>
                      <h1 class="h1">Play <span class="Competitivly">Competitivly</span> </h1>
                      <p>become a chess champion by playing and defeating the best of the best </p>
                      <button className='ReadMe2 btn btn-outline-dark w-25 '>Read More</button>
                    </div>

                  </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="pictures/bg7.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className='CarouselCaption'>
                    <div className='para'>
                      <h1 class="h1"> learn from the <span class="professionals">professionals</span></h1>
                      <p>
                        our site prevides you with the best cours to lurn effectivly and quickly 
                      </p>
                      <button className='btn bg-warning btn-fluid w-25'>Read More</button>
                    </div>
                    
                  </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


              <section id="learn" class="pt-5">
                <div class="container">
                      <div class="row align-items-center justify-content-between">
                          <div class="col-md">
                            <img src='pictures/test2.png' class="img-fluid" alt="" />
                          </div>
                        <div class="col-md p-5">
                            <h2>Learn about chess </h2>
                            <p class="lead">
                            Chess is a board game between two players. It is sometimes called international chess or Western chess to distinguish it from related games
                            </p>
                            <p>
                            The current form of the game emerged in Spain and the rest of Southern Europe during the second half 
                            of the 15th century after evolving from chaturanga, a similar but much older game of Indian origin. Today, 
                            chess is one of the world's most popular games, played by millions of people worldwide.
                            </p>
                            <a href="https://en.wikipedia.org/wiki/Chess" target="_blanck" class="btn btn-light mt-3">
                            <i class="bi bi-chevron-right"></i> Read More
                            </a>
                        </div>
                      </div>
                </div>
              </section>


              <section class="  Courses  ">
                <div class=" cotainer text-dark text-center   p-5">
                  <h2 class="h2Video">Featured Courses</h2>
                  <div class="row CoursRow g-5 p-5  "> 
                  <div className='col-12 col-md-6 col-lg-4'>
                  <Card >
                    <Card.Img variant="top" src="pictures/cours5.jpg" />
                    <Card.Body>
                      <Card.Title>beginner</Card.Title>
                      <Card.Text>
                      for players who never played the game and want to get the basics <br></br> <br></br>
                          $29.99
                      </Card.Text>
                      <Button variant="primary">check details</Button>
                    </Card.Body>
                  </Card>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4'>
                  <Card >
                    <Card.Img variant="top" src="pictures/cours6.jpg" />
                    <Card.Body>
                      <Card.Title>intermediate</Card.Title>
                      <Card.Text>
                      for players who know the basics of the game and want to improve <br></br> <br></br>
                        $69.99
                      </Card.Text>
                      <Button variant="primary">check details</Button>
                    </Card.Body>
                  </Card>
                  </div>
                  <div className='col-12 col-md-6 col-lg-4'>
                  <Card >
                    <Card.Img variant="top" src="pictures/cours2.jpg" />
                    <Card.Body>
                      <Card.Title>advanced</Card.Title>
                      <Card.Text>
                      for players who are in a good level but want to play on a professionals level  <br></br> <br></br>
                        $99.99
                      </Card.Text>
                      <Button variant="primary">check details</Button>
                    </Card.Body>
                  </Card>
                  </div>
                  </div>
                 
                
                </div>
              </section>

              
              <section >
                <h3 class="h2Video pt-3">quick tutorial </h3> 
                  <div class="container video mt-3">
                    <iframe width="60%" height="380px " 
                    src="https://www.youtube.com/embed/ej_fnsdsksA" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe>
                  </div>
              </section>
              <footer class="p-3 mt-5 bg-black text-light text-center position-relative">
                  <div class="container">
                      <p class="lead">Copyright &copy; 2023 chess Site </p>
                  </div>
              </footer>
             

             
      </div>
        
    );
}

export default Accueil;