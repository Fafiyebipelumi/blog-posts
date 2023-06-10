import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom'
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import { FC } from "react"
import Posts from "./pages/Posts"
import PostDetails from "./components/PostDetails"

const App: FC = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  )
}

export default App
