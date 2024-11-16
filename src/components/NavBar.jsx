import { Link, NavLink } from "react-router-dom";
import userIcon from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const NavBar = () => {
    const {user, logOut} = useContext(AuthContext);
    return (
        <div className="flex justify-between items-center">
            <div>{user && user.email}</div>
            <div className="nav space-x-5">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/career'>Career</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
            <div className="login flex gap-2 items-center">
                <div className="">
                    <img src={userIcon} alt="" />
                </div>
                {
                    user && user?.email ? (
                        <button onClick={logOut} className="btn btn-neutral rounded-none">Logout</button>
                    )
                    :
                    <Link to='/auth/login' className="btn btn-neutral rounded-none">Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;