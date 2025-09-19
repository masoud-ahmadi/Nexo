import { createRoot } from 'react-dom/client'
import "./style/App.css"

createRoot(document.getElementById('root')).render(<>
       <div className=' nexo_app bg-theme-nexo-primary'>
            <div className='flex gap-3'>
                <Sidebar/>
                <Content/>
            </div>
        </div>
    </>
  
)
