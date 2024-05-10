const PrimaryButton = ({ title }: { title: string }) => {
  return (
    <span className="py-4 px-16 rounded-lg font-bold bg-[#1F41BB] text-white">
      {title}
    </span>
  );
};

export default PrimaryButton;
