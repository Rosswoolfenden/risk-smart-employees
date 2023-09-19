import './App.css'
import EmployeeTable from './Components/Employees/EmployeeTable';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopBar from './Components/Navigation/Topbar';
import Employees from './Components/Pages/Employees';
function App() {

	return (
		<div >
			<header>
				<TopBar />
			</header>
			<main className='flex flex-col mt-12 justify-center'>
				<h1 className='flex justify-center text-3xl mr-12 ml-12 text-white font-bold '>
					Employee Table
				</h1>

				<div className='text-3xl mt-20 mr-20 ml-20  text-white font-bold'>
					<Employees />
				</div>
					
				
			</main>
			
		</div>
	)
}

export default App
