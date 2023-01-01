//  npm install react-hook-form

import React from 'react'
import { userForm } from 'react'

const reactHookForm = () => {
    const { register, handleSubmite, 
        watch, formState: {errors}} = useForm();
  return (
    <form onSubmit={handleSubmite(onSubkit)}>
        <input defaultValue="test" {...register} />
    </form>
  )
}

export default reactHookForm