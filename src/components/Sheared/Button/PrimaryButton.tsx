const PrimaryButton = ({ title }: { title: string }) => {
  return (
    <span className="py-[15px] cursor-pointer rounded-lg font-bold bg-[#1F41BB] text-white w-full block text-center">
      {title}
    </span>
  );
};

export default PrimaryButton;
