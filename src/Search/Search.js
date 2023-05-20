import { Navigate } from "react-router-dom"
function Search({search,children}){
    if(search==false){
        return(
        <Navigate to='/movies' />
    )
    }
    return children
}export default Search