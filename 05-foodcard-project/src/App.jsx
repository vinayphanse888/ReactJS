import Card from "./components/Card";

const App = () => {
  const foodItems = [
    {
      image: "https://i.pinimg.com/1200x/95/ae/be/95aebe4f4f23854beb99bab1d64a4ee5.jpg",
      name: "Vegetable Burger",
      price: "₹199",
      rating: "2.5k+"
    },
    {
      image: "https://i.pinimg.com/736x/cf/63/7d/cf637da6ea699845769cc6c26ac8935b.jpg",
      name: "Cheese Pizza",
      price: "₹349",
      rating: "4.1k+"
    },
    {
      image: "https://i.pinimg.com/736x/27/24/3b/27243b6b21f40408d7ba973f8181739e.jpg",
      name: "French Fries",
      price: "₹149",
      rating: "3.8k+"
    },
    {
      image: "https://i.pinimg.com/736x/f8/e1/e8/f8e1e8d2876096125f594b1d84187a84.jpg",
      name: "Pasta",
      price: "₹299",
      rating: "2.9k+"
    },
    {
      image: "https://i.pinimg.com/736x/ce/d6/ce/ced6ce367d5bf2597d56db08b852cf1d.jpg",
      name: "Sandwich",
      price: "₹179",
      rating: "3.2k+"
    },
    {
      image: "https://i.pinimg.com/1200x/e8/35/ed/e835ed89023c2a6d2d1933321d59efc4.jpg",
      name: "Momos",
      price: "₹200",
      rating: "1.7k+"
    },
    {
      image: "https://i.pinimg.com/1200x/8c/9b/6b/8c9b6bbc78fba8f6992125c5b04ce934.jpg",
      name: "Fried Chicken",
      price: "₹399",
      rating: "4.8k+"
    },
    {
      image: "https://i.pinimg.com/736x/33/78/b9/3378b99fdb71d83ccd2204fe4d7fdcb8.jpg",
      name: "Chole Bhature",
      price: "₹150",
      rating: "2.1k+"
    },
    {
      image: "https://i.pinimg.com/736x/6e/2a/29/6e2a29913761a463f22cf632e051f6bf.jpg",
      name: "Noodles",
      price: "₹259",
      rating: "3.6k+"
    },
    {
      image: "https://i.pinimg.com/1200x/51/04/81/5104819b6ec0785ee9fe1275084c0cfe.jpg",
      name: "Ice Cream",
      price: "₹129",
      rating: "5.0k+"
    }
  ];

  return (
    <div className="parent">
      {foodItems.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          name={item.name}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </div>
  );
};

export default App;
