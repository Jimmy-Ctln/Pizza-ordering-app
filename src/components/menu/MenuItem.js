export const MenuItem = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <img className="max-w-auto max-h-24 block mx-auto" src={"/pizza.png"} alt="pizza" />
      </div>
      <h4 className="font-semibold text-xl my-4">Peperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet. In autem eaque non internos quos aut quos
        aliquam ut delectus.
      </p>
      <button className="bg-primary mt-4 text-white rounded-full px-8 py-2">
        Add to cart $12
      </button>
    </div>
  );
};
