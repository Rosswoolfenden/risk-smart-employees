import { useEffect } from 'react';
import './App.css'
import TopBar from './Components/Navigation/Topbar';
import Employees from './Components/Pages/Employees';

function App() {

	useEffect(() => { 
        document.title = 'Reynold Industrys'
    });
	
	return (
		<div >
			<header>
				<TopBar />
			</header>
			<main className='flex flex-col mt-12 justify-center'>
				<h1 className='flex justify-center text-3xl mr-12 ml-12 text-white font-bold '>
					Employee Table
				</h1>

				<div className='text-3xl mt-6 mr-20 ml-20 mb-20 text-white font-bold'>
					<Employees />
				</div>
			</main>
		</div>
	)
}

export default App
