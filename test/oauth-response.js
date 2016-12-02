const userAuhthenticated = {
  id: "7777777",
  displayName: "Bobby Walker",
  username: "mrwalksbyme",
  profileUrl: "https://github.com/mrwalksbyme",
  emails: [
    {
      value: "mrwalksbyme@gmail.com"
    }
  ],
  provider: "github",
  _json: {
    login: "mrwalksbyme",
    id: 7777777,
    avatar_url: "https://avatars.githubusercontent.com/u/8162708?v=3",
    gravatar_id: "",
    url: "https://api.github.com/users/mrwalksbyme",
    html_url: "https://github.com/mrwalksbyme",
    followers_url: "https://api.github.com/users/mrwalksbyme/followers",
    following_url: "https://api.github.com/users/mrwalksbyme/following{/other_user}",
    gists_url: "https://api.github.com/users/mrwalksbyme/gists{/gist_id}",
    starred_url: "https://api.github.com/users/mrwalksbyme/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/mrwalksbyme/subscriptions",
    organizations_url: "https://api.github.com/users/mrwalksbyme/orgs",
    repos_url: "https://api.github.com/users/mrwalksbyme/repos",
    events_url: "https://api.github.com/users/mrwalksbyme/events{/privacy}",
    received_events_url: "https://api.github.com/users/mrwalksbyme/received_events",
    type: "User",
    site_admin: false,
    name: "Bobby Walker",
    company: null,
    blog: null,
    location: "Oakland, CA",
    email: "mrwalksbyme@gmail.com",
    hireable: true,
    bio: null,
    public_repos: 22,
    public_gists: 0,
    followers: 32,
    following: 91,
    created_at: "2014-07-14T21:30:02Z",
    updated_at: "2016-11-21T17:38:43Z"
  }
}

const authenticateUser = [{
  "email": "mrwalksbyme@gmail.com",
  "verified": true,
  "primary": true
}]

const nockGitHubUserAPI = nock => {
  nock('https://api.github.com:443')
    .filteringPath(/\/user.+/, '/user')
    .get('/user')
    .reply(200, userAuhthenticated)

  nock('https://api.github.com:443')
    .filteringPath(/\/user\/emails.+/, '/user/emails')
    .get('/user/emails')
    .reply(200, authenticateUser)
}

module.exports = nockGitHubUserAPI
