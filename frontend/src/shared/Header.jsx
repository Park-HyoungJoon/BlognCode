import Logo from "../feactures/Logo"
import Navigation from "../feactures/Navigation"
import Search from "../feactures/Search"
import UserProfile from "../feactures/UserProfile"

const Header = () => {
    return (
        <header className="Header">
            <Logo />
            <Navigation />
            <Search />
            <UserProfile />
        </header>
    )
}

export default Header;