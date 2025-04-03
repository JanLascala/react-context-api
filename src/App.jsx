import { BrowserRouter, Routes, Route } from "react-router-dom";
//layout import
import DefaultLayout from "./DefaultLayout/DefaultLayout";
//import context 
import CharacterContext from "./Context/PostsContext";
//import data
import mtvCartoons from "./Data/Characters";
//import pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Posts from "./Pages/Posts";
import Post from "./Components/Post";
function App() {

  return (
    <>
      <CharacterContext.Provider value={{ posts: mtvCartoons }}>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={Home} />
              <Route path="/posts" Component={Posts} />
              <Route path="/posts/:id" Component={Post} />
              <Route path="/about" Component={About} />

            </Route>
          </Routes>
        </BrowserRouter>
      </CharacterContext.Provider>
    </>
  )
}

export default App
