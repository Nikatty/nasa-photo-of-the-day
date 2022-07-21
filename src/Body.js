import react from 'react';

function Body(props) {
    const {hdurl} = props
    return (
        <>
            <img className = 'img' src = {hdurl}></img>
        </>
              
          )
        }
        
    
    export default Body