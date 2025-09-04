const Sidebar = () =>{
    return <>

<aside
  className="sidebar h-dvh bg-theme-nexo-content rounded-2xl  max-w-56 w-full overflow-y-hidden border-e  space-y-3"
>
  <div  className="flex items-center justify-center p-2 border-b"
  >
    <a href="#" className="max-w-32 block  ">
      
        <img  src="./Images/Logo/Logo1.png" alt="Logo" />
       
    

      
    </a>
  </div>

  <div
    className=" overflow-y-auto no-scrollbar px-3"
  >
    <nav>
      <ul>
        <li>
          <div className="bg-gray-200 ">
            <h3
              className="menu-group-title"
            >
              مدیریت فروشگاه
            </h3>
          </div>
          <ul className="">
          <li>
            <a
              href="#"
              className="menu-item group"
            >
              
              <span
                className="menu-item-text"
              >
                افزودن مرکز
              </span>

            </a>
          </li>

          
          
          </ul>
        </li>
      </ul>
      
    </nav>

    
    
  </div>
</aside>
</>

}

export default Sidebar