import { useAuthContextHook } from '@/constants/use-auth-context'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import TypeSelectionForm from './type-selection-form'

type Props = {}

const RegisterationFormStep = (props: Props) =>  {
    const {
        register,
        formState: {errors},
        setValue,
    } = useFormContext()
    const { currentStep } = useAuthContextHook()
    const [onOTP, setOnOTP] = useState<string>('')
    const [onUserType, setOnUserType] = useState<'owner' | 'student'>('owner')
    setValue('otp', onOTP)

    switch ( currentStep ) {
        case 1: return (
            <TypeSelectionForm register={register}
            userType={onUserType}
            setOnUserType={setOnUserType} />
        )
        case 2:
        case 3:
    }
  return (
    <div>RegisterationFormStep</div>
  )
}

export default RegisterationFormStep