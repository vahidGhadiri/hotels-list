import { FC } from "react";

interface OverviewProps {
  description?: string;
}

const Overview: FC<OverviewProps> = ({ description }) => {
  return (
    <p className="text-neutral mb-4 text-caption-2 text-start">{description}</p>
  );
};

export default Overview;
