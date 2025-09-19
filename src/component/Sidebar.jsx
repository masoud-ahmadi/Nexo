import NexoIcon from "./DefaultComponent/NexoIcon";
import {Link} from "react-router";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar h-dvh bg-theme-nexo-content rounded-2xl  max-w-56 w-full overflow-y-hidden  space-y-3">
        <div className="flex items-center justify-center p-2 border-b">
          <a href="#" className="max-w-32 block  ">
            <img src="../../public/Images/Logo/Logo1.png" alt="Logo" />
          </a>
        </div>

        <div className=" overflow-y-auto no-scrollbar px-3">
          <nav>
            <ul>
              <li className="space-y-2">
                <div className="">
                  <Link to={"user"} className="flex items-center gap-2 bg-gray-200 cursor-pointer hover:bg-theme-nexo-secondary hover:text-white rounded-md justify-between  p-2">
                    مدیریت فروشگاه
                  </Link>

                </div>
                <ul className="px-2">

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
