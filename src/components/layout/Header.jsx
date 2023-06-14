import { Fragment } from 'react'
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css'
import banner from '../../assets/banner.webp'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onCartClick} />
      </header>
      <div className={classes['main-image']}>
        <img src={banner} alt="Delicious vegan dishes." />
      </div>
    </Fragment>
  )
}

export default Header
