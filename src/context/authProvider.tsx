import { User, getAuth } from "firebase/auth";
import { useEffect, useState, ReactNode } from "react";
import { AuthContext } from "./authContext";
import PropTypes from 'prop-types';

type Props = {
    children?: ReactNode
};
const AuthProvider: React.FC<Props> = (props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const login = auth.onAuthStateChanged(data => {
      console.log('로그인 상태 : ', data);
      setUser(data);
    });
    return login;
  }, []);

  return <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};
  
export default AuthProvider;