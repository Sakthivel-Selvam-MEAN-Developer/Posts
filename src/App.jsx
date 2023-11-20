import { useState } from 'react'
import './App.css'
import { Main } from './components/main/main'
import { NavBar } from './components/navbar/navbar'
import { Footer } from './components/footer/footer'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { NewPost } from './components/newpost/newpost'
import { format } from 'date-fns'
import { About } from './components/about/about'
import { NotFound } from './components/not-found/not-found'

function App() {
  const navigate = useNavigate()
  const [newPostTitle, setNewPostTitle] = useState('')
  const [newPostContent, setNewPostContent] = useState('')
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Sample Post 1',
      content: 'Some content about Sample Post 1',
      date: 'Aug 20, 2023'
    },
    {
      id: 2,
      title: 'Sample Post 2',
      content: 'Some content about Sample Post 2',
      date: 'June 2, 2023'
    },
    {
      id: 3,
      title: 'Sample Post 3',
      content: 'Some content about Sample Post 3',
      date: 'July 28, 2023'
    },
    {
      id: 4,
      title: 'Sample Post 4',
      content: 'Some content about Sample Post 4',
      date: 'Oct 12, 2023'
    }
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const date = format(new Date(), 'MMM dd, yyyy')
    const newPost = { id: id, title: newPostTitle, content: newPostContent, date: date }
    const updatedPosts = [...posts, newPost]
    setPosts(updatedPosts)
    setNewPostTitle('')
    setNewPostContent('')
    navigate('/')
  }

  return (
    <div className="container app d-flex flex-column justify-content-between">
      <NavBar />
      <Routes>
        <Route path='/' element={<Main posts={posts} />} />
        <Route path='newpost' element={
          <NewPost
            newPostTitle={newPostTitle}
            newPostContent={newPostContent}
            handleSubmit={handleSubmit}
            setNewPostTitle={setNewPostTitle}
            setNewPostContent={setNewPostContent}
          />} 
          />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
