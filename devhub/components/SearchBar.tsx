import { useState } from "react"

interface Props {
  searchUser: (username: string) => void
}

function SearchBar({ searchUser }: Props) {

  const [username, setUsername] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    searchUser(username)
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>

      <input
        className="search-input"
        type="text"
        placeholder="Search GitHub username..."
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />

      <button className="search-btn">
        Search
      </button>

    </form>
  )
}

export default SearchBar