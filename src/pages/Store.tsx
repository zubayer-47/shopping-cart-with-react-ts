import { useSelector } from "react-redux";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { storeSelector } from "../features/store/storeSlice";

export default function Store() {
  const { data } = useSelector(storeSelector);
  return (
    <>
      <Nav />

      <div className="max-w-4xl mx-auto mt-2">
        <h1 className="text-2xl">Store</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
          {data?.length &&
            data.map(({ id, name, price, thumbnail, totalOrder }) => (
              <Card
                key={id}
                id={id}
                name={name}
                price={price}
                thumbnail={thumbnail}
                totalOrder={totalOrder}
              />
            ))}
        </div>
      </div>
    </>
  );
}
