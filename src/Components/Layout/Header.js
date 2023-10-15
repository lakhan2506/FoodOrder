import {Fragment} from "react";
import classes from './Header.module.css'
import MealsImage from '../../assests/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) =>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onCartShown}/>
            </header>
            <div>
                <img src={MealsImage} className={classes['main-image']} alt = 'Delisious food table'/>
            </div>
        </Fragment>
    )
};

export default Header;