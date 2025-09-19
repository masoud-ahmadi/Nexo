import Sidebar from "../component/Sidebar.jsx";
import Content from "../component/Content.jsx";


const MasterLayout = () => {
    return (<>
        <div className=' nexo_app bg-theme-nexo-primary'>
            <div className='flex gap-3'>
                <Sidebar/>
                <Content/>
            </div>
        </div>
    </>)
}

export default MasterLayout