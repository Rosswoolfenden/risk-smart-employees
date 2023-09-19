import { useEffect } from "react";
import useGetEmployees from "../../hooks/useGetEmployees";
import EmployeeRow from "./EmployeeRow";

const EmployeeTable = () => {
    // eslint-disable-next-line
    const {employees, loading, error } =  useGetEmployees();

    useEffect(() => {
        console.log('data: ', employees);
        console.log('loading: ', loading);
        console.log('error: ', error);
    },  [employees, loading, error]);


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
                        <h1>
                            Loading
                        </h1>

                    }
                    {!loading  && !error && employees && employees.map( (employee)  => (
                        <EmployeeRow 
                            eid={employee.eid}
                            firstName={employee.firstName}
                            familyName={employee.familyName}
                            dateJoined={employee.dateJoined}
                            knowAs={employee.knowAs}
                            email={employee.email}
                            position={employee.position}
                        />
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeTable;