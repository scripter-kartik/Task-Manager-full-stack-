import React, {use, useState} from "react";
import Navbar from "./components/Navbar";
import { data, Route, Routes, useNavigate} from "react-router-dom";

const App = () => {

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(() => {
    const stored = localStorage.getItem('currentUser');
    return stored ? JSON.parse(stored) : null;  
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
    else {
      localStorage.removeItem('currentUser');
    }
  },[currentUser])

  const handleAuthSubmit = data => {
   const user = {
      name: data.name || 'User',
      email: data.email,
      avatar : 
    };
   }
  }

  return (
    <Routes>
      <Route path="/" element={}/>
    </Routes>
  );
};

export default App;
