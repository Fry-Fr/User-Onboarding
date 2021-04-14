import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Friends from './components/Friends'
import * as yup from 'yup'
import schema from './validation'
import axios from 'axios'
import './App.css'

const initialFormData = {
  name:'',
  email:'',
  password:'',
  termsOfService:false
}

const initialDisabled = true

function App() {
const [ userList, setUserList ] = useState([])
const [ formData, setFormData ] = useState(initialFormData)
const [ formErrors, setFormErrors ] = useState('')
const [ disabled, setDisabled ] = useState(initialDisabled)

const updateForm = (name, value) => {
  yup
  .reach(schema, name)
  .isValid(value)
  .then( res => {
    setFormErrors({
      ...formErrors,
      [name]:''
    })
  })
  .catch( err => {
    setFormErrors({
      ...formErrors,
      [name]:err.errors[0]
    })
  })  

  setFormData({
    ...formData, [name]:value
  })
}

const postUserList = (newUserList) => {
  axios.post('https://reqres.in/api/users', newUserList)
    .then( response => {
      console.log(`HTTP POST response status: ${response.status}`)
      setUserList([...userList, response.data])
      setFormData(initialFormData)
    })
    .catch( err => {
      console.log(err.errors)
      setFormData(initialFormData)
    })
}

const submitForm = () => {
  const newUserList = {
    name: formData.name,
    email: formData.email,
    password: formData.password,
    termsOfService: formData.termsOfService
  }
  postUserList(newUserList)
}

useEffect( () => {
  schema.isValid(formData)
  .then( valid => {
    setDisabled(!valid)
  })
},[formData])

  return (
    <div className="App">
      <Form formData={formData} update={updateForm} submit={submitForm} disabled={disabled}/>
      {userList ? <Friends users={userList}/> : undefined}
    </div>
  )
}

export default App;
