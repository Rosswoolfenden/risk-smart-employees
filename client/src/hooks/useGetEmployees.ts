import { useQuery } from "@apollo/client";
import Employees from "../graphql/queries/employeeQuery";
import { useEffect, useState } from "react";
import { Employee } from "../types";
import dayjs from 'dayjs';

const useGetEmployees = () => {
    const { loading, error, data } = useQuery(Employees, {});
    const [ employees, setEmployees ] = useState<Employee[]>([]);

    useEffect(() => { 
        if(loading || error) return;

        const employeeList:  Employee[] = [];
        data.employees.forEach( (entry: any) => {
            const employee = {
                eid: entry.eid,
                firstName: entry.firstName,
                familyName: entry.familyName,
                dateJoined: dayjs(entry.dateJoined.formatted).toString(),
                knowAs: entry.knowAs,
                position: entry.position,
                email: entry.email
            }
            employeeList.push(employee);
        });
        
        setEmployees(employeeList);
    }, [data, loading, error]);

    return {
        employees,
        loading,
        error,
    }
}   

export default useGetEmployees;
