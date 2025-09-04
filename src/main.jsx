import { createRoot } from 'react-dom/client'
import "./style/App.css"
import Sidebar from './component/Sidebar'
import Content from './component/Content'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(<>
    <BrowserRouter>
       <div className=' nexo_app bg-theme-nexo-primary'>
        <div className='flex gap-3'>
            <Sidebar/>
        <Content/>
        </div>
        

    </div>
    </BrowserRouter>
 
    </>
  
)
