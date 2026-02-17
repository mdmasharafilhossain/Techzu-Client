import { useState } from 'react';
import './App.css'
import Dashboard from './pages/Dashboard'
import CreateDrop from './pages/CreateDrop';

function App() {
 const [page, setPage] = useState<"dashboard" | "create">("dashboard");

  return (
     <div>
      <nav className="p-4 bg-black text-white flex gap-4">
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("create")}>Create Drop</button>
      </nav>

      {page === "dashboard" ? <Dashboard /> : <CreateDrop />}
    </div>
  )
}

export default App
