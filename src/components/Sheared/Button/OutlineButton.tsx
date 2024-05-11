const OutlineButton = ({ title, color }: { title: string; color?: string }) => {
  const buttonColor = color ? color : "#1F41BB";
  return (
    <span
      style={{ border: `2px solid ${buttonColor}`, color: buttonColor }}
      className={`py-[13px]  rounded-lg font-bold block text-center cursor-pointer`}
    >
      {title}
    </span>
  );
};

export default OutlineButton;
