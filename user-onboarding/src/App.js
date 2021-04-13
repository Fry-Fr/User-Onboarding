import React, { useState } from 'react'
import Form from './components/Form'
import './App.css'

const initialFormData = {
  name:'',
  email:'',
  password:'',
  termsOfService:''
}

function App() {
const [ userList, setUserList ] = useState([])
const [ formData, setFormData ] = useState(initialFormData)

const updateForm = (name, value) => {
  setFormData({
    ...formData, [name]:value
  })
}

const submitForm = () => {
  setUserList([...userList, formData])
  setFormData(initialFormData)
}

  return (
    <div className="App">
      <Form formData={formData} update={updateForm} submit={submitForm}/>
    </div>
  )
}

export default App;
