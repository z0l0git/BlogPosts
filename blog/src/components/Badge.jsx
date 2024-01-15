export const Badge = (props) => {
  const { text = "" } = props;
  return (
    <div className="px-[10px] py-[4px] bg-[#4B6BFB] rounded-[6px] text-[#fff] font-[500] w-fit">
      <p>{text}</p>
    </div>
  );
};
