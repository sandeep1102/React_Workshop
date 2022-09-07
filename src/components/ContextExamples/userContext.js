import React from "react";

// const UserContext = React.createContext()
const UserContext = React.createContext("Nitesh")

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}

export default UserContext