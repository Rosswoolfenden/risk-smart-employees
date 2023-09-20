import useGetEmployees from '../../hooks/useGetEmployees';
import EmployeeRow from './EmployeeRow';
import LoadingRow from './LoadingRow';

const EmployeeTable = () => {
    const {employees, loading, error } =  useGetEmployees();

    return (
        <div className='overflow-x-auto '>
            <table className='table bg-gray-800'>
                <thead>
                    <tr>
                    </tr>
                    <th>Edit</th>
                    <th>Employee Id</th>
                    <th>First Name</th>
                    <th>Family Name</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Known as</th>
                    <th>Date Joined</th>
                    <th>SACK THEM</th>
                </thead>
                <tbody>

                    {error &&
                        <h1>
                            ERROR
                        </h1>
                    }
                    {loading &&
                        <>
                            <LoadingRow />
                            <LoadingRow />
                            <LoadingRow />
                            <LoadingRow />
                        </>

                    }
                    {!loading  && !error && employees && employees.map( (employee, index)  => (
                        <EmployeeRow
                            employee={employee}
                            index={index} 
                        />
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeTable;