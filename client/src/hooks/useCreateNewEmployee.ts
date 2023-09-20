import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import NewEmployee from "../graphql/mutations/newEmployee";

const useCreateNewEmployee = () => {
    const [ first, setFirst ] = useState();
    const [ last, setLast ] = useState();
    const [ emailAdress, setEmail ] = useState();
    const [ nickname, setNickname ] = useState();
    const [ job, setJob ] = useState();
    const [ error, setError ] = useState<string | null>(null);
    const [ createEmployee, setCreateEmployee ] = useState(false);
    const [ succsess, setSuccsess ] = useState<boolean | null>(null);

    const [addEmployee, {
        loading,
        error: graphqlError,
        data,
    }] = useMutation(NewEmployee, {});

    const handleFnChange = (e: any) => {
        setFirst(e.target.value);
    }

    const handleLnChange = (e: any) => {
        setLast(e.target.value);
    }
    const handleNicknameChange = (e: any) => {
        setNickname(e.target.value);
    }

    const handleJobChange = (e: any) => {
        setJob(e.target.value);
    }

    const handleEmailChange = (e: any) => { 
        setEmail(e.target.value);
    }

    useEffect(() => {
        if(createEmployee === false) return;
        if(!first || !last || !emailAdress || !job) {
            setError('Please complete all needed feilds.');
        } 
        if(!nickname) setNickname(first);

        addEmployee({variables : {
                firstName: first,
                familyName: last,
                email: emailAdress,
                knowAs: nickname,
                position: job
            }
        });

    }, [ createEmployee ]);


    useEffect(() => { 
        if(graphqlError ) {
            console.log('There was an error')    
            return;
        }
        if(data) {
            console.log("THIS WAS A SUCCSESS");
            setSuccsess(true);
        }
    }, [data, graphqlError, loading]);

    return {
        handleJobChange,
        handleNicknameChange,
        handleFnChange,
        handleLnChange,
        handleEmailChange,
        first, 
        last, 
        emailAdress, 
        nickname, 
        job,
        setCreateEmployee,
        error,
        succsess, 
        loading
    }
}

export default useCreateNewEmployee;
