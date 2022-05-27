import React, {useEffect} from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


const App = () => {
  const activeMenu = true
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content="Setting" position="Top">
              <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background: 'blue', borderRadius: '50%'}}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
               sidebar
            </div>
              ): (
              <div className='w-0 dark:bg-secondary-dark-bg'> 
                sidebar w-0
              </div>
          )}
          <div className={`dark:bg-main-bg bg-main-bg min-h-screen  w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              navbar
             </div>
          </div>
          <div>
            <Routes>
              {/*Dashboard*/}
              <Route path='/' element="ECommerce" />
              <Route path='/ecommerce' element="ECommerce" />
              
              {/*Pages*/}
              <Route path='/orders' element="Orders" />
              <Route path='/employess' element="Employess" />
              <Route path='/customers' element="Customers" />

              {/*Apps*/}
              <Route path='/kanban' element="Kanban" />
              <Route path='/editor' element="editor" />
              <Route path='/calendar' element="calendar" />
              <Route path='/colo-picker' element="colo-picker" />

              
              {/*Charts*/}
              <Route path='/line' element="line" />
              <Route path='/area' element="area" />
              <Route path='/bar' element="bar" />
              <Route path='/pie' element="pie" />
              <Route path='/financial' element="financial" />
              <Route path='/color-maping' element="color-maping" />
              <Route path='/pyramid' element="pyramid" />
              <Route path='/stacked' element="stacked" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  </div>
  )
}

export default App