import React, {useEffect} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Ecommerce from './pages/Ecommerce';
import Orders from './pages/Orders';
import Kanban from './pages/Kanban';
import Editor from './pages/Editor';
import { Calender } from './pages';
import ColorPicker from './pages/ColorPicker';
import Area from './pages/Charts/Area';
import Bar from './pages/Charts/Bar';
import Pie from './pages/Charts/Pie';
import Financial from './pages/Charts/Financial';
import ColorMapping from './pages/Charts/ColorMapping';
import Pyramid from './pages/Charts/Pyramid';
import Stacked from './pages/Charts/Stacked';
import Line from './pages/Charts/Line';
import { useStateContext } from './context/ContextProvider';
import Employees from './pages/Employees';
import Customers from './pages/Customers';


const App = () => {
  const {activeMenu} = useStateContext()
  return (
    <div>
      <Router>
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
               <Sidebar />
            </div>
              ): (
              <div className='w-0 dark:bg-secondary-dark-bg'> 
                <Sidebar />
              </div>
          )}
          <div className={`dark:bg-main-bg bg-main-bg min-h-screen  w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
             </div>
          
          <div>
            <Routes>
              {/*Dashboard*/}
              <Route path='/' element={<Ecommerce />} />
              <Route path='/ecommerce' element={<Ecommerce />} />
              
              {/*Pages*/}
              <Route path='/orders' element={<Orders />} />
              <Route path='/employees' element={<Employees />} />
              <Route path='/customers' element={<Customers />} />

              {/*Apps*/}
              <Route path='/kanban' element={<Kanban />} />
              <Route path='/editor' element={<Editor />} />
              <Route path='/calendar' element={<Calender />} />
              <Route path='/colo-picker' element={<ColorPicker />} />

              
              {/*Charts*/}
              <Route path='/line' element={<Line />} />
              <Route path='/area' element={<Area />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/financial' element={<Financial />} />
              <Route path='/color-maping' element={<ColorMapping />} />
              <Route path='/pyramid' element={<Pyramid />} />
              <Route path='/stacked' element={<Stacked />} />
            </Routes>
            </div>
            </div>
        </div>
      </Router>
  </div>
  )
}

export default App