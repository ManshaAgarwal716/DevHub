import type { Repo } from "../src/type"

interface Props {
  repos: Repo[]
}

function RepoList({ repos }: Props) {

  return (

    <div className="repo-grid">

      {repos.map(repo => (

        <div className="repo-card" key={repo.id}>

          <h3>{repo.name}</h3>

          {repo.description && (
            <p>{repo.description}</p>
          )}

          <a href={repo.html_url} target="_blank">
            View Repository
          </a>

        </div>

      ))}

    </div>

  )
}

export default RepoList