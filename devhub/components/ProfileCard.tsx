import type { GitHubUser } from "../src/type"

interface Props {
  user: GitHubUser
}

function ProfileCard({ user }: Props) {

  return (
    <div className="profile-card">

      <img src={user.avatar_url} alt="avatar" />

      <h2>{user.name}</h2>

      <p>{user.bio}</p>

      <div className="stats">

        <div>
          <span>{user.followers}</span>
          <p>Followers</p>
        </div>

        <div>
          <span>{user.public_repos}</span>
          <p>Repos</p>
        </div>

      </div>

    </div>
  )
}

export default ProfileCard