import React, {createContext, useEffect, useState} from 'react';
import './App.css';
import Header from "../layout/Header";
import {Route, Routes} from "react-router-dom";
import MainPage from "../../pages/MainPage";
import LoginPage from "../../pages/LoginPage";
import ServicePage from "../../pages/ServicePage";
import {AppContext} from "./context";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
    const [isAuth, setIsAuth] = useState(false);

    const token = localStorage.getItem('jwt');

    useEffect(() => {
        if (token) {
            setIsAuth(true);
        }
    }, [token]);

  return (
      <AppContext.Provider value={{isAuth, setIsAuth}} >
        <div className="App">
          <Header />
            <main>
                <Routes>
                    <Route index element={<MainPage/>}/>
                    <Route path="/login" element={
                        <ProtectedRoute isOnlyAuth>
                            <LoginPage/>
                        </ProtectedRoute>
                    }/>
                    <Route path="/service" element={
                        <ProtectedRoute>
                         <ServicePage/>
                        </ProtectedRoute>
                    }/>
                </Routes>
            </main>
        </div>
      </AppContext.Provider>
  );
}

export default App;
