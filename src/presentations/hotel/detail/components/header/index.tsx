import { Icon } from "@components";

const DetailHeader = () => {
  return (
    <div className="absolute top-4 w-full px-4 flex justify-end z-20">
      <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
        <Icon name="Fave" />
      </span>
    </div>
  );
};

export default DetailHeader;
