// import HomePageImage from "@/../../public/Images/home_page_image.png";
import HomePageImage from "@/../../public/Images/home_page_image.png";
import Image from "next/image";
import PrimaryButton from "../Sheared/Button/PrimaryButton";
import OutlineButton from "../Sheared/Button/OutlineButton";

const HomePage = () => {
  return (
    <div className="my-12 px-5 relative">
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
      <div className="mt-20">
        <PrimaryButton title="Login" />
        <OutlineButton title="Register" />
      </div>
      <div className="h-[635px] w-[635px] rounded-full bg-[#F8F9FF] absolute top-[-400px] right-[-327] z-[-1] "></div>
      <div
        style={{
          border: "2px solid #F1F4FF",
        }}
        className="h-[372px] w-[372px] absolute rotate-45 top-[350px] right-[170px] z-[-1]"
      ></div>
    </div>
  );
};

export default HomePage;