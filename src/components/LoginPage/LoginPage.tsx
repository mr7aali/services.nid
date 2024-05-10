import React from "react";
import PrimaryButton from "../Sheared/Button/PrimaryButton";

const LoginPage = () => {
  return (
    <div className=" px-10">
      <div className="mt-24">
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
            className=" bg-[#F1F4FF] rounded-lg text-[16px] px-[15px] py-[15px] "
            placeholder="Input your email"
          />
        </div>
        <div className="grid grid-cols-1 ">
          <label htmlFor="" className="my-2">
            Password
          </label>
          <input
            className=" bg-[#F1F4FF] rounded-lg text-[16px] px-[15px] py-[15px] "
            placeholder="Input your password"
          />
        </div>
        <p className="text-right my-7 text-[#1F41BB] font-semibold underline text-[14px]">Forgot your password?</p>
        <PrimaryButton title="Sign In"/>
      </form>
    </div>
  );
};

export default LoginPage;
