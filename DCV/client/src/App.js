import Auth from "./components/Auth";
import Main from "./components/Main";
import { Cookies, useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const email = cookies.Email;
  const authToken = cookies.AuthToken;

  return (
    <div>
      {!authToken && <Auth />}
      {authToken && <Main />}
    </div>
  );
}

export default App;
