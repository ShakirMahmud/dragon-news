import { Link, NavLink } from "react-router-dom";
import userIcon from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className="flex justify-between items-center">
            <div className="text-lg">{user && user.displayName}</div>
            <div className="nav space-x-5">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/career'>Career</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
            <div className="login flex gap-2 items-center">
                <div className="">
                    {
                        user && user?.email ?
                            <div className="flex flex-col items-center mr-3">
                                <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
                                <p>{user.email}</p>
                            </div>
                            :
                            (<img src={userIcon} alt="" />)
                    }
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