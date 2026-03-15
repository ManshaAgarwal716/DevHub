import { useState } from "react"
import SearchBar from "../components/SearchBar"
import ProfileCard from "../components/ProfileCard"
import RepoList from "../components/RepoList"
import type { GitHubUser, Repo } from "./type"
import "./App.css"

function App() {

  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<Repo[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const searchUser = async (username: string) => {

    try {

      setLoading(true)
      setError(null)

      const userRes = await fetch(
        `https://api.github.com/users/${username}`
      )

      if (!userRes.ok) {
        throw new Error("User not found")
      }

      const repoRes = await fetch(
        `https://api.github.com/users/${username}/repos`
      )

      const userData: GitHubUser = await userRes.json()
      const repoData: Repo[] = await repoRes.json()

      setUser(userData)
      setRepos(repoData)

    } catch (err) {

      setError("User not found")
      setUser(null)
      setRepos([])

    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">

      <h1 className="title">DevHub</h1>

      <SearchBar searchUser={searchUser} />

      {loading && <p className="loading">Loading...</p>}

      {error && <p className="error">{error}</p>}

      {user && <ProfileCard user={user} />}

      {repos.length > 0
        ? <RepoList repos={repos} />
        : user && <p className="no-repo">No repositories found</p>
      }

    </div>
  )
}

export default App