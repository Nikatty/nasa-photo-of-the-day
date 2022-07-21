import react from 'react';
function Header(props) {
    
        const {date, title} = props
        return (
            <>
              <p>Date: {date} </p>  
              <p>Photo of the Day: {title} </p>
            </>
                  
              )
            }
            
    export default Header