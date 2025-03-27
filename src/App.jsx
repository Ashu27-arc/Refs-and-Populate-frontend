import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserForm from './components/UserForm';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md p-4">
          <div className="max-w-4xl mx-auto flex gap-4">
            <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
            <Link to="/create-user" className="text-blue-500 hover:text-blue-700">Create User</Link>
            <Link to="/create-post" className="text-blue-500 hover:text-blue-700">Create Post</Link>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto py-8">
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/create-user" element={<UserForm />} />
            <Route path="/create-post" element={<PostForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
