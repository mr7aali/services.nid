const OutlineButton = ({title}:{title:string}) => {
  return (
    <span style={{border:"2px solid #1F41BB"}} className="py-[13px]  rounded-lg font-bold  text-[0A0A0A] block text-center">
      {title}
    </span>
  );
};

export default OutlineButton;
