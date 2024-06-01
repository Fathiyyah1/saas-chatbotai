import React from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {}

const RegisterationFormStep = (props: Props) =>  {
    const {
        register,
        formState: {errors},
        setValue,
    } = useFormContext()
  return (
    <div>RegisterationFormStep</div>
  )
}

export default RegisterationFormStep