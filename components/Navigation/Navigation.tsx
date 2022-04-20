import Logo from '../../assets/dummy-logo.svg';
import styles from './Navigation.module.css';

export const Navigation = () => {
    return (
        <header className={styles.header}>
            <Logo className={styles.logo} />
            <nav>
                <a href="">Auto body</a>
                <a href="">Towing</a>
                <a href="">Shop</a>
                <a href="">Contact</a>
            </nav>
        </header>
    )
}