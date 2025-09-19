import ContentHeader from "./ContentHeader"
import {Outlet} from "react-router";

const Content =()=>{
    return<> 
    <div className="nexo_content bg-theme-nexo-content rounded-2xl border flex flex-col gap-3">
        <ContentHeader/>
        <div className="flex-1 ">
            <Outlet/>
        </div>
        <footer className={"shrink-0 border-t"}>
            masoud
        </footer>


    </div>
    </>
}

export default Content