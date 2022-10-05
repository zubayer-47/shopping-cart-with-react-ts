import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeCart } from "../features/store/storeSlice";
import { SingleCardType } from "../interfaces/Cart";
import { formateCurrency } from "../utils/formatCurrency";

interface CartPropTypes {
  cart: SingleCardType;
}

export default function Cart({ cart }: CartPropTypes) {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(removeCart(cart.id));
  };

  useEffect(() => {
    if (!cart.totalOrder) {
      dispatch(removeCart(cart.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart.totalOrder, dispatch]);

  return (
    <div className="flex items-center mx-2 md:mx-3">
      <img className="h-20 w-28 object-cover" src={cart.thumbnail} alt="cart" />

      <div className="grow ml-2">
        <p className=" md:text-lg">
          {cart.name}{" "}
          <span className="text-xs text-gray-500">x{cart.totalOrder}</span>
        </p>
        <span className="text-sm text-gray-600">
          {formateCurrency(cart.price)}
        </span>
      </div>

      <div className="flex grow justify-evenly">
        <span className="text-gray-600">{formateCurrency(cart.price)}</span>
        <button
          onClick={handleClose}
          className="border border-red-400 px-2 rounded text-red-500 hover:text-red-300"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
