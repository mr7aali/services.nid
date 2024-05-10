// import HomePageImage from "@/../../public/Images/home_page_image.png";
import HomePageImage from "@/../../public/Images/home_page_image.png";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="my-12 px-5">
      <Image
        className="mx-"
        height={422}
        width={390}
        src={HomePageImage}
        alt="This is home page image"
      />
      <div>
        <h1 className="text-center">Discover Your Dream Job here</h1>
      </div>
    </div>
  );
};

export default HomePage;
