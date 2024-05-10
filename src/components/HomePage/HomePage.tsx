// import HomePageImage from "@/../../public/Images/home_page_image.png";
import HomePageImage from "@/../../public/Images/home_page_image.png";
import Image from "next/image";
import PrimaryButton from "../Sheared/Button/PrimaryButton";
import OutlineButton from "../Sheared/Button/OutlineButton";
import Link from "next/link";

const HomePage = () => {
  return (
    <div style={{border:"1px solid red"}}  className="my-12 px-5 h-full relative">
      <Image
        className="z-10"
        height={422}
        width={390}
        src={HomePageImage}
        alt="This is home page image"
      />
      <div>
        <h1
          style={{ lineHeight: "1.4" }}
          className="text-center text-[#1F41BB] text-3xl font-bold drop-shadow-2xl"
        >
          Discover Your <br /> Dream Job here
        </h1>
        <p className="text-center text-xs mt-6 text-black font-medium">
          Explore all the existing job roles based on your <br /> interest and
          study major
        </p>
      </div>
      <div className="mt-20 mb-8">
        <Link href={"/auth/login"}> <PrimaryButton title="Login" /></Link>
        <Link href={"/auth/register"}>  <OutlineButton title="Register" /></Link>
      
      </div>
      
    </div>
  );
};

export default HomePage;
