import { Fragment } from "react";

import mealsImage from '../../assets/meals.jpg';
import styles from './Header.module.css';

const Header = props => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button> {/* just for now - we don't have card component yet*/}
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt='A table full of food' />
            </div>
        </Fragment>
    );
};

export default Header;
