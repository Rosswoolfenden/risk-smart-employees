import { useEffect, useState } from "react";

const useCreateNewEmployee = () => {

    const [ first, setFirst ] = useState();
    const [ last, setLast ] = useState();
    const [ emailAdress, setEmail ] = useState();
    const [ nickname, setNickname ] = useState();
    const [ job, setJob ] = useState();
    const [ error, setError ] = useState<string | null>();
    const [ createEmployee, setCreateEmployee ] = useState(false);

    const [ succsess, setSuccsess ] = useState<boolean | null>(null);

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

    const postData = { 
        first, last, emailAdress, nickname, job
    }

    useEffect(() => {
        if(createEmployee === false) return;
        if(!first || !last || !emailAdress || !job) setError('Please complete all needed feilds.');

    }, [ createEmployee ])
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
        error 
    }
}

export default useCreateNewEmployee;
