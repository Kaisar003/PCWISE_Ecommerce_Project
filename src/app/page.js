import Navbar2 from "./component/navBar";
import Footer1 from "./component/footer";
import Hero from "./component/home-page/hero";
import Category from "./component/home-page/productCategory";
import Card from "./component/home-page/productsCard";
import About from "./component/home-page/aboutUs";
import Feedback from "./component/home-page/feedback";
import productsData from "./products/productsData/data.json";
import PSWISEAI from "./component/AI-ChatBot/page";
import AIChatBtn from "./component/ui/aiChatBtn";

export default function Home() {
  return (
    <>
      <main>
        <Navbar2 />
        <Hero />
        <Category />
        <div className="max-w-full mx-auto p-5 sm:p-10 md:p-16">
          <h2 className="font-semibold text-7xl my-24">Best sellers</h2>
          <div className="mb-4 grid gap-4 sm:grid-cols-1 md:mb-8 lg:grid-cols-2 xl:grid-cols-3">
            {productsData.products.slice(0, 6).map(product => (
              <Card
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                specs={product.specs}
                price={product.price}
                rating={product.rating}
                comments={product.comments}
                delivery={product.delivery}
                imageUrl={product.imageUrl}
                inStock={product.quantity}
              />
            ))}
          </div>
        </div>
        <About />
        <Feedback />
        <AIChatBtn />
        <PSWISEAI />
        <Footer1 />
      </main>
    </>
  );
}
