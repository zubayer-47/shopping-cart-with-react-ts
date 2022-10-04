import { useAppDispatch } from "../app/hooks";
import { incrementQuantity } from "../features/store/storeSlice";

export default function Card() {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(incrementQuantity());
  };
  return (
    <div>
      <img
        className="object-cover h-64 sm:h-96 md:h-80 lg:h-64 w-full select-none"
        src="https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80"
        alt="header"
      />

      <div className="flex justify-between items-center mt-3">
        <h1 className="text-lg">Book</h1>
        <span>$10.99</span>
      </div>

      <button
        className="bg-violet-600 hover:bg-violet-700 text-white w-full py-2 mt-5 select-none"
        onClick={handleClick}
      >
        + Add To Cart
      </button>
    </div>
  );
}
