import Link from "next/link";
import OutlineButton from "../Sheared/Button/OutlineButton";
import PrimaryButton from "../Sheared/Button/PrimaryButton";
import CandidateOption from "./CandidateOption/CandidateOption";

const VotePage = () => {
  return (
    <div>
      <div className="">
        <h1
          style={{ lineHeight: "1.4" }}
          className="text-center text-[#1F41BB] text-3xl font-extrabold drop-shadow-2xl"
        >
          Vote for Your <br /> Favorite Feature!
        </h1>
        <p className="text-center text-[16px]  my-2 text-black font-medium">
          Please click to select your candidate
        </p>
      </div>
      <div className="flex justify-center mt-5">
        <CandidateOption />
      </div>
      <div className="grid grid-cols-2 gap-2 mt-6">
        <Link href={"/"}>
          <OutlineButton title="Cancle Vote" color="#ff2c2c" />
        </Link>
        <PrimaryButton title="Submit Vote" />
      </div>
    </div>
  );
};

export default VotePage;
