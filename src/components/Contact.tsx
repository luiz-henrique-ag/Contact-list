import { ContactModel } from "../models/contact.model"
import "../App.css"

export default function Contact( {name, phone, description }: ContactModel){
  return(
    <div className="card">
      <div className="card-img"></div>
      <div className="card-body">
        <p className="card-body-name">{name}</p>
        <p className="card-body-phone">{phone}</p>
        <p className="card-body-description">{description}</p>
      </div>
    </div>
  )
}