import React from "react";
import PrimaryButton from "../Sheared/Button/PrimaryButton";
import OutlineButton from "../Sheared/Button/OutlineButton";
import Link from "next/link";
import IconGoogle from "../Sheared/Icon/IconGoogle";
import IconFacebook from "../Sheared/Icon/IconFacebook";
import IconApple from "../Sheared/Icon/IconApple";

const LoginPage = () => {
  const IconComponent = [
    <IconGoogle key={0} />,
    <IconFacebook key={1} />,
    <IconApple key={2} />,
  ];
  return (
    <div className=" px-10  w-full">
      <div className="mt -24">
        <h1
          style={{ lineHeight: "1.4" }}
          className="text-center text-[#1F41BB] text-3xl font-extrabold drop-shadow-2xl"
        >
          Login here
        </h1>
        <p className="text-center text-xl font-semibold mt-6 text-black font-medium">
          Welcome back <br /> you’ve been missed!
        </p>
      </div>
      <form action="" method="get">
        <div className="grid grid-cols-1 ">
          <label htmlFor="" className="my-2">
            Email
          </label>
          <input
            style={{
              outlineColor: "#1F41BB",
            }}
            className=" bg-[#F1F4FF] rounded-lg text-[16px] px-[15px] py-[15px] "
            placeholder="Input your email"
            type="email"
          />
        </div>
        <div className="grid grid-cols-1 ">
          <label htmlFor="" className="my-2">
            Password
          </label>
          <input
            style={{
              outlineColor: "#1F41BB",
            }}
            className=" bg-[#F1F4FF] rounded-lg text-[16px] px-[15px] py-[15px] "
            placeholder="Input your password"
          />
        </div>
        <p className="text-right my-7 cursor-pointer text-[#1F41BB] font-semibold underline text-[14px]">
          Forgot your password?
        </p>
        <div className="grid gap-3">
          <button type="submit">
            <PrimaryButton title="Sign In" />
          </button>
          <Link href={"/auth/register"}>
            <OutlineButton title="Create new account" />
          </Link>
        </div>
      </form>

      <div className="mt-14">
        <p className="text-[14px] text-center text-[#1F41BB] font-bold">
          Or continue with
        </p>
        <div className="flex justify-center items-center gap-2 mt-5">
          {IconComponent.map((element, index) => (
            <div className="bg-[#ECECEC] p-2 rounded-md" key={index}>
              {element}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
