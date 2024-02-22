import React from "react";
import { MyContextType } from "../Types/Types";

const MyContext = React.createContext<MyContextType | []>([]);;

export default MyContext;