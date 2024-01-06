import { PRODUCT_ADD, PRODUCT_DELETE, PRODUCT_EDIT, PRODUCT_FAILUER, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionType"
import axios from "axios"
export const loadAction=()=>{
    return {type:PRODUCT_REQUEST}
}

export const errAction=(payload)=>{
    return {type:PRODUCT_FAILUER,payload}
}
export const getAction=(payload)=>{
    return {type:PRODUCT_SUCCESS,payload}
}
export const deleteAction=(payload)=>{
    return {type:PRODUCT_DELETE,payload}
}
export const postAction=(payload)=>{
    return {type:PRODUCT_ADD,payload}
}
export const editAction=(payload)=>{
    return {type:PRODUCT_EDIT,payload}
}

export const getProduct=(payload)=>(dispatch)=>{
 axios.get(`http://localhost:9090/Product`)
 .then((res)=>{
    console.log(res.data)
 }).catch((err)=>{
    console.log(err)
 })

}
//123