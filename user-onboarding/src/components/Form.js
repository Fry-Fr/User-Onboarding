import React from 'react'

export default function Form(props) {
    const { formData, update, submit, disabled } = props

    const onChange = (event) => {
        const { name, value, type, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        update(name,valueToUse)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        submit()
    }

    return (
        <div className='form'>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input value={formData.name} name="name" type="text" onChange={onChange}/>
                </label>
                
                <label>Email:
                    <input value={formData.email} name="email" type="email" onChange={onChange}/>
                </label>
                
                <label>Password:
                    <input value={formData.password} name="password" type="password" onChange={onChange}/>
                </label>

                <label>Terms Of Service:
                    <input checked={formData.termsOfService} name="termsOfService" type="checkbox" onChange={onChange}/>
                </label>
                <button disabled={disabled}>SUBMIT</button>

            </form>
        </div>
    )
}