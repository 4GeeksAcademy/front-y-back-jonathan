import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { logout } from "../services/userServices";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	const navigate = useNavigate();

	const handleLogout = async () => {
		const success = await logout();
		if (success) {
			dispatch({ type: "LOGOUT" });
			navigate("/login");
		}
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">HOME</span>
				</Link>
				<div className="ml-auto">
					{store.isAuth ? (
						<button className="btn btn-warning" onClick={handleLogout}>Logout</button>
					) : (
						<Link to="/login" className="btn btn-success">
							Login
						</Link>
					)}
				</div>
			</div>
		</nav>
	);
};