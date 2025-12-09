import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import AppRoute from "./route/AppRoute";
import "./App.css";
import { axiosInstance } from "./config/axiosInstance";
import { addUser } from "./features/user.slice";
import { addUserAction } from "./features/actions/userAction";
import { setTodos } from "./features/todo.silce";

const App = () => {
  let dispatch = useDispatch();
    const user = useSelector(state=>state.user)
    console.log(user)
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let response = await axiosInstance.get("/user/me");
        console.log(response);
       if (response.data?.user) {
        console.log(response.data?.user)
        dispatch(addUser(response.data.user));
         dispatch(setTodos(response.data.user.post))
      }
      } catch (error) {
        console.log("user not logged in");
      } finally {
        setLoading(false); 
      }
    };
    fetchUser();
  }, []);


    if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <AppRoute />
    </div>
  );
};

export default App;
