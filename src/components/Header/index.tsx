import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "../../interfaces";
import { logoutRequestAction } from "../../redux/user/actions";

const Header: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: AppState) => state.users.user);
  const [isShowNav, setIsShowNav] = useState(false);
  const onLogout = () => {
    dispatch(logoutRequestAction());
  };
  return (
    <div className="bg-gray-400 font-sans leading-normal tracking-normal">
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 w-full z-10 top-0">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/" className="text-white no-underline hover:text-white hover:no-underline" >
            <span className="text-2xl pl-2"><i className="em em-grinning"></i>Authenticate App</span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button onClick={() => setIsShowNav(!isShowNav)} className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>

        <div className={`w-full flex-grow lg:items-center lg:w-auto lg:block pt-6 lg:pt-0 ${isShowNav ? "" : "hidden"} `} >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link to="/" className="inline-block py-2 px-4 text-gray-400 hover:text-white no-underline">Home</Link>
            </li>
            {user ?
              (
                <>
                  <li className="mr-3">
                    <Link to="#" className="inline-block no-underline text-gray-400 hover:text-white hover:text-underline py-2 px-4">{user}</Link>
                  </li>
                  <li className="mr-3">
                    <button onClick={onLogout} className="inline-block no-underline text-gray-400 hover:text-white hover:text-underline py-2 px-4">Sign Out</button>
                  </li>
                </>
              ) :
              (
                <Link to="/login" className="inline-block no-underline text-gray-400 hover:text-white hover:text-underline py-2 px-4">Login</Link>
              )
            }
            <li className="mr-3">
              <Link to="/mainpage" className="inline-block no-underline text-gray-400 hover:text-white hover:text-underline py-2 px-4">Main Page</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
