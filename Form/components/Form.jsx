/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'


function Form() {
    const [fields,setFields] = useState({
        FirstName:'',
        LastName:'',
        Email:'',
        PhoneNumber:''
    });

    const [submitted, setSubmitted] = useState(0)
    const [validate , setValidate] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (fields.FirstName && fields.LastName && fields.Email && fields.PhoneNumber){
          setValidate(true);
        }
      };



  return (
    <div id="Form-Container">
        <div id="Form">
        <form onSubmit={handleSubmit}>
        {submitted && validate?<div id="Message">Registered Successfully!!</div>:null}
        <input type="text" placeholder='FirstName' value={fields.FirstName} onChange={(e) => setFields({ ...fields, FirstName: e.target.value })}/>
        {submitted && !fields.FirstName? <span>Enter Your FirstName</span>:null}
        <input type="text" placeholder='LastName' value={fields.LastName}  onChange={(e) => setFields({ ...fields, LastName: e.target.value })}/>
        {submitted && !fields.LastName? <span>Enter Your LastName</span>:null}
        <input type="text" placeholder='Email' value={fields.Email} onChange={(e) => setFields({ ...fields, Email: e.target.value })}/>
        {submitted && !fields.Email? <span>Enter Your Email</span>:null}
        <input type="text" placeholder='PhoneNumber' value={fields.PhoneNumber} onChange={(e) => setFields({ ...fields, PhoneNumber: e.target.value })}/>
        {submitted && !fields.PhoneNumber? <span>Enter Your PhoneNumber</span>:null}
        <button>Register</button>
        </form>
        </div>        
    </div>
  )
}

export default Form
