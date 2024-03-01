import React from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeaderProps {
  title: string;
  onBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBack }) => {
  return (
    <header className="">
      <button className="" onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className="">{title}</h4>
    </header>
  );
};

export default Header;
