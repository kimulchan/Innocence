
function AddEtc({match}){
    const {category,language}=match.params;
    let placeholderText;
    let pathText;
    if(category==undefined){
        placeholderText="category"
        pathText=""
    }

    else if(language==undefined){
        placeholderText="language"
        pathText=`${category}에`
    }
    else {
        placeholderText="lecture"
        pathText=`${category}/${language}에`
    }
    return (
        <>
            <input></input>
        </>
    );
}

export default AddEtc;