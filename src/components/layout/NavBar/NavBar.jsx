import { Link } from "react-router"
import NavLinkButton from "./components/NavLinkButton"
import styles from "./NavBar.module.css"

export default function NavBar() {
  return (
    <header className={styles.header}>
        <Link className={styles.Link} to="/">fimy</Link>

        <nav className={styles.nav}>
            <NavLinkButton to="/">Главная</NavLinkButton>
            <NavLinkButton to="/Budget">Бюджет</NavLinkButton>
            <NavLinkButton to="/History">История</NavLinkButton>
            <NavLinkButton to="/Stats">Статистика</NavLinkButton>
        </nav>

        <Link className={styles.Link} to="/Profile">Профиль</Link>
    </header>
  )
}
