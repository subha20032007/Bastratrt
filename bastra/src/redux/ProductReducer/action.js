import { PRODUCT_ADD, PRODUCT_DELETE, PRODUCT_EDIT, PRODUCT_FAILUER, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionType"

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