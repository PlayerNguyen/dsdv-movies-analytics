import React from 'react'
import styles from '../../assets/css/styles.module.css'
import images1 from '../../assets/images/Poster_movies/Django(2012).jpg'
import images2 from '../../assets/images/Poster_movies/The Wolf of Wall Street.jpg'
import images3 from '../../assets/images/Poster_movies/Interstellar(2014).jpg'
import images4 from '../../assets/images/Poster_movies/InsideOut(2015).jpg'
import images5 from '../../assets/images/Poster_movies/YourName.jpg'
import images6 from '../../assets/images/Poster_movies/TheGood(1996).jpg'

// import { CFormSelect } from '@coreui/react'

// import WidgetsBrand from '../widgets/WidgetsBrand'
// import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Home = () => {
  const [showlist, setShowlist] = React.useState(false)
  const handleListButtonClick = () => {
    setShowlist(!showlist)
  }
  const movieList = [
    { id: 1, title: 'Django' },
    { id: 2, title: 'The Wolf of Wall Street' },
    { id: 3, title: 'Interstellar' },
  ]
  return (
    <div>
      <h1 className={styles.Introduction}>Welcome!</h1>
      <p className={styles.text}>Top 5 Most Popular Movies</p>
      <div className={styles.imageContainer}>
        <figure className={styles.figure}>
          {/* Figure 1 */}
          <img src={images1} alt="Django" className={styles.image1} />
          {/* Figure 2 */}
          <img src={images2} alt="The Wolf of Wall Street" className={styles.image2} />
          {/* Figure 3 */}
          <img src={images3} alt="Interstellar" className={styles.image3} />
          {/* Figure 4 */}
          <img src={images4} alt="Inside Out" className={styles.image4} />
          {/* Figure 5 */}
          <img src={images5} alt="Your Name" className={styles.image5} />
          {/* Figure 6 */}
          <img src={images6} alt="The Good" className={styles.image6} />
        </figure>
      </div>
      <button onClick={handleListButtonClick}>{showlist ? 'Back' : 'Watch List'}</button>

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
