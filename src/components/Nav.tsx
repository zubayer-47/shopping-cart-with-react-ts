import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { storeSelector } from "../features/store/storeSlice";

export default function Nav() {
  const { quantity } = useSelector(storeSelector);
  return (
    <div className="max-w-4xl mx-auto flex justify-between">
      <div className="flex items-center gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-violet-600 text-xl" : "font-normal text-xl"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-violet-600 text-xl" : "font-normal text-xl"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/store"
          className={({ isActive }) =>
            isActive ? "text-violet-600 text-xl" : "font-normal text-xl"
          }
        >
          Store
        </NavLink>
      </div>

      {quantity ? (
        <button className="relative mt-1 w-12 h-12 flex justify-center items-center border-2 border-indigo-400 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill="currentColor"
            className="w-7 text-indigo-700"
          >
            <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
          </svg>

          <div className="bg-red-500 rounded-full absolute h-6 w-6 bottom-0 right-0 translate-x-1 translate-y-1 text-white">
            {quantity}
          </div>
        </button>
      ) : null}
    </div>
  );
}
