import { useState } from "react";
import { composeClassNames } from "@utils";

interface TabsProps {
  onTabChange: (tab: string) => void;
  defaultTab?: string;
  className?: string;
  tabs: string[];
}

const Tabs = ({ tabs, onTabChange, defaultTab, className }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className={composeClassNames(["flex mb-4", className])}>
      {tabs.map((tab) => (
        <div
          key={tab}
          className={composeClassNames([
            activeTab === tab
              ? "text-primary border-b-2 border-orange-500"
              : "text-neutral",
            "pb-1 px-4 text-sm font-medium cursor-pointer",
          ])}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
