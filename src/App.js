
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import Router from "./routes/Router";



function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
