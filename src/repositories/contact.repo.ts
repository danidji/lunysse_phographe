import axios from "axios";
import { ContactFormType } from '../interfaces/contact.interfaces';


const instance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Accept": "*/*",
    "Content-Type": "application/json",
  },
  // timeout: 1000,
})


export const axiosSendMail = async (object: ContactFormType) => {
  const response = await instance.post("/contact", object);
  return response.data
}