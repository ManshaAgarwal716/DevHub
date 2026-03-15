export interface GitHubUser {
  avatar_url: string
  name: string
  bio: string
  followers: number
  public_repos: number
}

export interface Repo {
  id: number
  name: string
  html_url: string
    description: string
}