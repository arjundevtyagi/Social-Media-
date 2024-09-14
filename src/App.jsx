import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/Post-list-store";   

function App() {

  const [selectedTab , setSelectedTab] = useState("Home");



  return (
  <PostListProvider>
    {/* all component written inside this treat as children
    and go to post list provider file to use context provider */}
    <div className="app-container">
    <Sidebar selectedTab = {selectedTab} setSelectedTab = {setSelectedTab} ></Sidebar>
    <div className="main-content">
        <Header></Header>
        {selectedTab === "Home" ?  (<PostList></PostList>) :   (<CreatePost></CreatePost>)}
      
       
        <Footer></Footer>
        </div>
    </div>
    </PostListProvider> 
  )
}

export default App


