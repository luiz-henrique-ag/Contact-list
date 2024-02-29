import http from "./http-common"
import { ContactModel } from "../models/contact.model"

class ContactDataService{
  getAll(){
    return http.get<Array<ContactModel>>("/contacts");
  }
  get(id: number){
    return http.get<ContactModel>(`/contacts/${id}`);
  }
  create(contact: ContactModel){
    return http.post<ContactModel>("/contacts", contact);
  }
  update(contact: ContactModel, id: number){
    return http.put<number>(`/contacts/${id}`, contact);
  }
  delete(id: number){
    return http.delete<number>(`/contacts/${id}`);
  }
  query(name: string) {
    return http.get<Array<ContactModel>>(`/contacts?query=${name}`);
  }
}

export default new ContactDataService();