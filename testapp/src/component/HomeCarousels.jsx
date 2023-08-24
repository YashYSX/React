import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function HomeCarousels() {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
        < img style={{width:"100%"}} src="https://c4.wallpaperflare.com/wallpaper/35/536/33/iron-man-marvel-comics-superhero-tony-stark-wallpaper-preview.jpg" alt="" />
        <Carousel.Caption>
          <h3>IRON MAN</h3>
          <p>Robert Downey Jr. portrays Tony Stark in the Marvel Cinematic Universe films Iron Man (2008), Iron Man 2 (2010), The Avengers (2012), Iron Man 3 (2013)</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:"100%"}} src="https://c4.wallpaperflare.com/wallpaper/607/632/959/iron-man-tony-stark-iron-man-3-robert-downey-jr-wallpaper-preview.jpg" alt="" />
        <Carousel.Caption>
          <h3>Ironman2</h3>
          <p>Robert Downey Jr. portrays Tony Stark in the Marvel Cinematic Universe films Iron Man (2008), Iron Man 2 (2010), The Avengers (2012), Iron Man 3 (2013)</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:"100%"}} src="https://c4.wallpaperflare.com/wallpaper/809/627/607/iron-man-2-tony-stark-robert-downey-jr-iron-man-wallpaper-preview.jpg" alt="" />
        <Carousel.Caption>
          <h3>iron man 3</h3>
          <p>
          Robert Downey Jr. portrays Tony Stark in the Marvel Cinematic Universe films Iron Man (2008), Iron Man 2 (2010), The Avengers (2012), Iron Man 3 (2013)
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default HomeCarousels