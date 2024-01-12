import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from '../../assets/css/styles.module.css'
import images1 from '../../assets/images/Poster_movies/Django(2012).jpg'
import images2 from '../../assets/images/Poster_movies/The Wolf of Wall Street.jpg'
import images3 from '../../assets/images/Poster_movies/Interstellar(2014).jpg'
import images4 from '../../assets/images/Poster_movies/InsideOut(2015).jpg'
import images5 from '../../assets/images/Poster_movies/YourName.jpg'
import images6 from '../../assets/images/Poster_movies/TheGood(1996).jpg'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

const Home = () => {
  const [showlist, setShowlist] = useState(false)

  const handleListButtonClick = () => {
    setShowlist(!showlist)
  }

  const movieList = [
    { id: 1, title: 'Django' },
    { id: 2, title: 'The Wolf of Wall Street' },
    { id: 3, title: 'Interstellar' },
    { id: 4, title: 'Inside Out' },
    { id: 5, title: 'Your Name' },
    { id: 6, title: 'The Good' },
  ]

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 10,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          focusOnSelect: false,
        },
      },
    ],
  }

  return (
    <div>
      <h1 className={styles.Introduction}>Welcome!</h1>
      <p className={styles.text}>Top 5 Most Popular Movies</p>

      <div className={styles.imageContainer}>
        <Slider {...sliderSettings}>
          <img src={images1} alt="Django" className={styles.image1} />
          <img src={images2} alt="The Wolf of Wall Street" className={styles.image2} />
          <img src={images3} alt="Interstellar" className={styles.image3} />
          <img src={images4} alt="Inside Out" className={styles.image4} />
          <img src={images5} alt="Your Name" className={styles.image5} />
          <img src={images6} alt="The Good" className={styles.image6} />
        </Slider>
      </div>

      {/*<button onClick={handleListButtonClick}>{showlist ? 'Back' : 'Watch List'}</button>*/}

      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={handleListButtonClick}>
          {showlist ? 'Back' : 'Watch List'}
        </Button>
      </Stack>
      {showlist && (
        <div>
          <h2>List of Movies</h2>
          <ul>
            {movieList.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Home
