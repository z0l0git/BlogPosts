const [color, setColor] = useState("");

const menuData = ["Design", "Travel", "Fashion", "Technology", "Branding"];
export const PostsHeader = () => {
  const [color, setColor] = useState("");

  const menuData = ["Design", "Travel", "Fashion", "Technology", "Branding"];
  return (
    <div>
      <h2 className="md:block hidden text-[24px] font-[700]">All Blog Posts</h2>
      <div className="text-[#495057] font-[700] text-[20px] flex justify-between">
        <div className="flex gap-[20px]">
          {menuData.map((item, index) => {
            return (
              <p
                id={index}
                className={`cursor-pointer ${
                  color === item ? "text-green-500" : ""
                }`}
                key={index}
                onClick={() => {
                  setColor(item);
                }}
              >
                {item}
              </p>
            );
          })}
        </div>
        <div>
          <p>View All</p>
        </div>
      </div>
    </div>
  );
};
