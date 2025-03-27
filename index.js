require('dotenv').config()
const express = require("express");

const app = express();

const port = 4000;

const githubData = {
  "login": "Sanjoy9999",
  "id": 130099587,
  "node_id": "U_kgDOB8Epgw",
  "avatar_url": "https://avatars.githubusercontent.com/u/130099587?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Sanjoy9999",
  "html_url": "https://github.com/Sanjoy9999",
  "followers_url": "https://api.github.com/users/Sanjoy9999/followers",
  "following_url": "https://api.github.com/users/Sanjoy9999/following{/other_user}",
  "gists_url": "https://api.github.com/users/Sanjoy9999/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Sanjoy9999/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Sanjoy9999/subscriptions",
  "organizations_url": "https://api.github.com/users/Sanjoy9999/orgs",
  "repos_url": "https://api.github.com/users/Sanjoy9999/repos",
  "events_url": "https://api.github.com/users/Sanjoy9999/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Sanjoy9999/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "SANJOY KUMAR MAITY",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-04-06T19:50:12Z",
  "updated_at": "2025-03-21T13:08:51Z"
  }



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter",(req,res)=>{
res.send("This twitter page")
})

app.get("/login",(req,res)=>{
    res.send("<h1>please login at chai aur code</h1>")
})

app.get("/youtube",(req,res)=>{
    res.send("<h2>Chai aur code</h2>")
})

app.get("/github",(req,res)=>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
