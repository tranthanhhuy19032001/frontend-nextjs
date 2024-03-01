import React from "react";

interface MenuItemProps {
  data: {
    icon: React.ReactNode; // Assuming your icon is a React Node
    to: string;
    title: string;
    separate?: boolean;
  };
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ data, onClick }) => {
  return (
    <button className="block" onClick={onClick}>
      {data.title}
    </button>
  );
};

export default MenuItem;
