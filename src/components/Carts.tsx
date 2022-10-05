import { useDispatch, useSelector } from "react-redux";
import { cartStatus, storeSelector } from "../features/store/storeSlice";
import Cart from "./Cart";

export default function Carts() {
  const { carts } = useSelector(storeSelector);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(cartStatus());
  };

  const handleClose = () => {
    dispatch(cartStatus());
  };

  const totalPrice = carts.reduce(
    (total, curr) => (total += curr.price * curr.totalOrder),
    0
  );

  return (
    <>
      <div
        onClick={handleClick}
        className="fixed top-0 right-0 w-full h-full bg-black/50 cursor-pointer"
      ></div>
      <div className="absolute right-0 bottom-0 top-0 w-full md:w-[300px] lg:w-[400px] bg-white flex flex-col gap-2 z-20 rounded-tl-md rounded-bl-md">
        <button
          onClick={handleClose}
          className="text-4xl w-7 ml-auto mr-2 rounded text-gray-700 hover:text-gray-500"
        >
          &times;
        </button>
        {carts?.length ? (
          <>
            {carts.map((cart) => (
              <Cart key={cart?.id} cart={cart} />
            ))}

            <p className="ml-auto text-lg mr-5">Total Price: {totalPrice}</p>
          </>
        ) : (
          <p className="mx-auto text-gray-600">Don't Have Any Cart Yet</p>
        )}
      </div>
    </>
  );
}
