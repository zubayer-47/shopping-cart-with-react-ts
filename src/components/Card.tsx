import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../app/hooks";
import {
  addToCart,
  decrementCart,
  incrementCart,
  removeCart,
  storeSelector,
} from "../features/store/storeSlice";

import { SingleCardType } from "../interfaces/Cart";
import { formateCurrency } from "../utils/formatCurrency";

export default function Card({
  id,
  name,
  price,
  thumbnail,
  totalOrder,
}: SingleCardType) {
  const { carts } = useSelector(storeSelector);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (carts.find((cart) => cart.id === id)?.id) {
      console.log("true");
      dispatch(incrementCart({ id, name, price, thumbnail, totalOrder }));
    } else {
      console.log("false");
      dispatch(addToCart({ id, name, price, thumbnail, totalOrder: 1 }));
    }
  };

  const handleDecrementCart = () => {
    if (carts.find((cart) => cart.id === id)?.id) {
      dispatch(decrementCart({ id, name, price, thumbnail, totalOrder }));
    } else {
      dispatch(addToCart({ id, name, price, thumbnail, totalOrder: 1 }));
    }
  };

  const isCartExist = carts.find((c) => c.id === id);

  useEffect(() => {
    if (isCartExist?.totalOrder === 0) {
      dispatch(removeCart(id));
    }
  }, [isCartExist?.totalOrder, dispatch, id]);

  return (
    <div>
      <img
        className="object-cover h-64 sm:h-96 md:h-80 lg:h-64 w-full select-none"
        src={thumbnail}
        alt="header"
      />

      <div className="flex justify-between items-center mt-3">
        <h1 className="text-lg">{name}</h1>
        <span>{formateCurrency(price)}</span>
      </div>

      {isCartExist?.totalOrder && isCartExist?.totalOrder > 0 ? (
        <div className="flex justify-center items-center gap-5">
          <button
            className="bg-indigo-500 text-white text-xl px-3 rounded select-none focus:ring focus:ring-indigo-300"
            onClick={handleDecrementCart}
            disabled={isCartExist.totalOrder === 0}
          >
            -
          </button>
          <p className="text-sm">
            <span className="text-2xl">{isCartExist?.totalOrder}</span> in Cart
          </p>
          <button
            className="bg-indigo-500 text-white text-xl px-2 rounded select-none focus:ring focus:ring-indigo-300"
            onClick={handleClick}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="bg-violet-600 hover:bg-violet-700 text-white w-full py-2 mt-5 select-none"
          onClick={handleClick}
        >
          + Add To Cart
        </button>
      )}
    </div>
  );
}
