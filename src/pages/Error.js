import React from 'react'
// import { Link } from 'react-router-dom';
// import Home from './home';
import { useNavigate } from 'react-router-dom';
function Error() {
  const navigate = useNavigate();
  return (
    <div className='error-background'>
      <button onClick={() => navigate(-1)}>⬅ Go back!</button>
      {/* <Link to={Home} className='error-link'>🔙 Get back to the home page!</Link> */}
    </div>
  )
}

export default Error;