import { ChangeEvent, FormEvent, ReactNode, useState } from "react"
import "../App.css"
import { ContactModel } from "../models/contact.model"
import Layout from "../layout/Layout"
import ContactDataService from "../service/contact.service"

export default function NewPage(){
  const [formData, setFormData] = useState<ContactModel>({
    name: "",
    description: "",
    phone: ""
  })
  const [status, setStatus] = useState<ReactNode>();

  function handleChange(event: ChangeEvent<HTMLInputElement>){
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name] : event.target.value
      }
    })
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    ContactDataService.create(formData).then(() => {
      setStatus(<h2 style={{ color: "green", textAlign: "center"}}>Contact succesfully created.</h2>)
    }).catch(() => {
      setStatus(<h2 style={{ color: "red", textAlign: "center" }}>Error</h2>)
    });
  }

  return(
    <Layout>
      <form className="form" onSubmit={handleSubmit} method="post">
        <input 
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={formData.name} 
        />
        <input 
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          value={formData.phone} 
        />
        <input 
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          value={formData.description} 
        />
        <button className="button">Save</button>
      </form>
      {status && <h2 style={{color: "green"}}>{status}</h2>}
    </Layout>
  )
}