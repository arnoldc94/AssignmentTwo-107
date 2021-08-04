import logo from "./logo.svg";
import "./App.css";
import NavBar from './components/navbar';
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import Item from "./components/item";
import Header from "./components/header";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";


function App() {
  return (
    <div className="App">

      <Header></Header>

      <NavBar></NavBar>

      <Catalog></Catalog>

       <Item></Item>
       <Item></Item>
       <Item></Item>
       <Item></Item>
       <Item></Item>
       <Item></Item>
       <Item></Item>
       <Item></Item>
       <Item></Item>

      <Footer></Footer>
    </div>
  );
}

export default App;
