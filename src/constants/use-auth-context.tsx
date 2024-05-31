import React, {useState} from 'react';

type InitialValuesProps = {
    currentStep: number
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const InilialValues: InitialValuesProps = {
    currentStep:1,
    setCurrentStep: () => undefined,
}

const authContext = React.createContext(InilialValues)
const {Provider} = authContext

export const authContextProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [currentStep, setCurrentStep] = useState<number>(
        InilialValues.currentStep
    )
     const values = {
        currentStep, 
        setCurrentStep,
        }
    return <Provider value={values}></Provider>
}
