import React, {useState , useCallback} from 'react'
import Count from './Count'
import Title from './Title';
import Button from './Button'

function AgeSalary() {
    const [age,setAge] = useState(25)
    const [salary,setSalary] = useState(5000)
    
    const incremntAge = useCallback(() => {
        setAge( age + 1)
    }, [age]) 

    const incrementSalary =useCallback(() => {
        setSalary(salary + 5000)
    },[salary]) 
    return (
        <div>
            <Title/>
            <Count text = "Age" count = {age}/>
            <Button text="Age" handleClick = {incremntAge}/> 
            <Count text = "Salary" count = {salary} />
            <Button text = "Salary" handleClick = {incrementSalary} />
        </div>
  );
}

export default AgeSalary
