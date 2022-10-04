import Card from "../components/Card";
import Nav from "../components/Nav";

export default function Store() {
  return (
    <>
      <Nav />

      <div className="max-w-4xl mx-auto mt-2">
        <h1 className="text-2xl">Store</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
