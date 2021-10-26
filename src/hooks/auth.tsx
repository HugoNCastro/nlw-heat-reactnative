import React, { createContext, useContext, useState } from 'react';
import * as AuthSessions from 'expo-auth-session';



type User = {
  id: string;
  avatar_url: string;
  name: string;
  login: string;

}

type AuthContextData = {
  user: User | null;
  isSignining: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthProviderProps = {
  children: React.ReactNode;
}

type AuthResponse = {
  token: string;
  user: User;
}

type AuthorizationResponse = {
  params: {
    code?:string;
  }
}


const CLIENT_ID = 'eab6d6f25928cf931472'
const SCOPE = 'read:user'

export const AuthContext = createContext({} as AuthContextData); 

function AuthProvider({ children }: AuthProviderProps){
  const [ isSignining, setIsSignining ] = useState(false);
  const [ user, setUser ] = useState<User | null>(null);
  


  
  async function signIn() {
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`
    const { params } = await AuthSessions.startAsync({ authUrl }) as AuthorizationResponse;
    console.log(params)
  }

  async function signOut() {
    
  }

return(
  <AuthContext.Provider value={{
    signIn,
    signOut,
    user,
    isSignining
  }}>
    { children }
  </AuthContext.Provider>
)
}

function useAuth(){
  const context = useContext(AuthContext);
  return context
}

export { 
  AuthProvider,
  useAuth,
}