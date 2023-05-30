const { Link } = require("react-router-dom");
const Navbar = () => {
    return (
    <nav style={{ textAlign: "center", marginTop: "20px" }}>
    <Link to="/" style={{ padding: "10px" }}>
    Home
        </Link>
    <Link to="/cards" style={{ padding: "10px" }}>
    menu
    </Link>
    <Link to="/address" style={{ padding: "10px" }}>
    address
    </Link>
    <Link to="/payment" style={{ padding: "10px" }}>
    payment
    </Link>
    </nav>
    );
};
export default Navbar;