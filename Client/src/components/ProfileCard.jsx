import { useState } from "react";
import check from "../assets/check.svg";
import copy from "../assets/copy.svg";

const ProfileCard = ({ linkName, icon, link }) => {
  const [textcp, setTextcp] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    setTextcp(true);
  };
  return (
    <div className="border border-gray-700 bg-gray-800 md:w-1/3 rounded-md px-2 flex items-center justify-between  gap-x-2 w-full h-16">
      <img src={icon} alt="" className=" h-6 px-2" />
      <p className="font-medium text-blue-500 md:text-xl text-lg ">
        {linkName}
      </p>
      {textcp == false ? (
        <img
          src={copy}
          onClick={copyToClipboard}
          alt=""
          className="text-white h-6 px-2"
        />
      ) : (
        <img
          onClick={() => setTextcp(false)}
          src={check}
          alt=""
          className="text-white h-6 px-2"
        />
      )}
    </div>
  );
};

export default ProfileCard;
