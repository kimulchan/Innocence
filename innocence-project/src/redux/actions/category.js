export const ADD_CATEGORY="ADD_CATEGORY";

export const addcategory = (category)=>{
    return {
        type:ADD_CATEGORY,
        category:category
    }
}