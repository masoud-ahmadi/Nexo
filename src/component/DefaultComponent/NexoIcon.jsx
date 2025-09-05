import React from "react";

// ایمپورت تمام کتابخانه‌های اصلی react-icons
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import * as GiIcons from "react-icons/gi";
import * as HiIcons from "react-icons/hi";
import * as IoIcons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";

// ایجاد Map کلی از همه آیکون‌ها
const libraries = {
  ...FaIcons,
  ...MdIcons,
  ...AiIcons,
  ...BiIcons,
  ...BsIcons,
  ...FiIcons,
  ...GiIcons,
  ...HiIcons,
  ...IoIcons,
  ...RiIcons,
  ...SiIcons,
  ...TbIcons,
};

const NexoIcon = ({ name, className="" ,iconSize="text-xl", ...props }) => {
  const IconComponent = libraries[name];

  if (!IconComponent) {
    console.warn(`آیکون ${name} پیدا نشد!`);
    return null;
  }

  return <IconComponent  className={`${className} ${iconSize ? iconSize:""} `} {...props} />;
};

export default NexoIcon;
