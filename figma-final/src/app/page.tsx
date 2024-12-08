import Header from "@/components/Header";
import FeaturedCar from "@/components/FeaturedCar";
import CarDetails from "@/components/CarDetails";
import Reviews from "@/components/Reviews";
import RecommendedCars from "@/components/RecomendedCar";
import Footer from "@/components/Footer";
import Card from "@/components/Card"
import Pick from "@/components/Pick";

const CarDetailPage = () => {
  return (
    <div className="max-w-screen-md mx-auto">
      <Header />
      <FeaturedCar />
      <Pick />
      {/* <CarDetails /> */}
      {/* <Reviews /> */}
      <RecommendedCars />
      {/* <Card /> */}
      <Footer />
    </div>
  );
};

export default CarDetailPage;
