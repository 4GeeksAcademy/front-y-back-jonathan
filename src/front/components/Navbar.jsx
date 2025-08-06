import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Jony Oner DEV</span>
				</Link>
				<div className="ml-auto">
					<Link to="/login">
						{store.isAuth ? null :<button className="btn btn-success">Login</button>}
					</Link>
					{store.isAuth ? <button className="btn btn-warning">Logout</button>: null}
				</div>
			</div>
		</nav>
	);
};