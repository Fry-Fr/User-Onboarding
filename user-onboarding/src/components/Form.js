import React from 'react'

export default function Form(props) {
    const { formData, update, submit } = props

    const onChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        update(name,value)
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
                <button>SUBMIT</button>

            </form>
        </div>
    )
}