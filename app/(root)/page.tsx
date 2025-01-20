import ProductCarousel from "@/components/shared/product/product-carousel";
import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts ,getFeaturedProducts} from "@/lib/actions/product.actions";

//import { Button } from "@/components/ui/button";
const HomePage = async () => {
  const latestProducts =  await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();
  return (
    <div>
      {featuredProducts.length > 0 && <ProductCarousel data={featuredProducts} />}
  
      <ProductList title='Newest Arrivals' data={latestProducts} />
    </div>
  );
};


export default HomePage;