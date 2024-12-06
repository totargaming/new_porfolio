import React from "react";

interface MyComponentProps {
  items: Array<{ alt: string; className: string }>;
}

const SkillsFooter: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-left gap-7">
      {items &&
        items.map((val, indx) => (
          <div className="flex flex-col items-center p-4" key={indx}>
            <i className={`${val.className} text-7xl`}></i>
            <span className="mt-2 text-sm">{val.alt}</span>
          </div>
        ))}
    </div>
  );
};

export default SkillsFooter;