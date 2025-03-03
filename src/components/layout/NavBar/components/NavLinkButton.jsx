import { NavLink } from "react-router"
import styles from "./NavLinkButton.module.css"

export default function NavLinkButton({children, to}) {
  return (
    <NavLink className={({isActive}) => isActive ? [styles.active, styles.NavLink].join(" ") : styles.NavLink} to={to}>
        {children}
    </NavLink>
  )
}
