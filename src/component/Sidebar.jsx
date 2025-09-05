import { Link, Links } from "react-router-dom";
import NexoIcon from "./DefaultComponent/NexoIcon";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar h-dvh bg-theme-nexo-content rounded-2xl  max-w-56 w-full overflow-y-hidden  space-y-3">
        <div className="flex items-center justify-center p-2 border-b">
          <a href="#" className="max-w-32 block  ">
            <img src="./Images/Logo/Logo1.png" alt="Logo" />
          </a>
        </div>

        <div className=" overflow-y-auto no-scrollbar px-3">
          <nav>
            <ul>
              <li className="space-y-2">
                <div className="bg-gray-200 cursor-pointer hover:bg-theme-nexo-secondary hover:text-white rounded-md flex justify-between items-center p-2">
                  <div className="flex items-center gap-2">
                    <NexoIcon name="MdShoppingCart" />
                    مدیریت فروشگاه
                  </div>
                  <NexoIcon name="BiChevronDown" />
                </div>
                <ul className="px-2">
                  <li>
                    <Link
                      to={"#"}
                      className="menu-item bg-theme-nexo-content group nexo_button"
                    >
                      <h3 className="">افزودن مرکز</h3>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
