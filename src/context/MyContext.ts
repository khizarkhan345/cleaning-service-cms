import React from "react";
import { MyContextType } from "../Types/Types";

const myContext = {
    data: null,
    token: null,
    setToken: () => {},
    length: null
}
const MyContext = React.createContext<MyContextType>(myContext);;

export default MyContext;