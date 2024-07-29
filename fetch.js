const fs = require("fs");
const https = require("https");
const process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName:
    "GitHub Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestMediumFailed:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

if (USE_GITHUB_DATA === "true") {
  if (GITHUB_USERNAME === undefined) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
  var githubData = JSON.stringify({
    query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
  });

  const githubOptions = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node"
    }
  };

  const githubReq = https.request(githubOptions, res => {
    let data = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      res.on("data", d => {
        console.error(`Response: ${d}`);
      });
      throw new Error(ERR.requestFailed);
    }

    res.on("data", d => {
      data += d;
    });

    res.on("end", () => {
      fs.writeFile("./public/profile.json", data, function (err) {
        if (err) {
          console.error("Error writing profile.json:", err);
        } else {
          console.log("Saved file to public/profile.json");
        }
      });
    });
  });

  githubReq.on("error", error => {
    console.error("Request error:", error);
    throw error;
  });

  githubReq.write(githubData);
  githubReq.end();
}

if (MEDIUM_USERNAME !== undefined) {
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
  const mediumOptions = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
    port: 443,
    method: "GET"
  };

  const mediumReq = https.request(mediumOptions, res => {
    let mediumData = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      res.on("data", d => {
        console.error(`Response: ${d}`);
      });
      throw new Error(ERR.requestMediumFailed);
    }

    res.on("data", d => {
      mediumData += d;
    });

    res.on("end", () => {
      fs.writeFile("./public/blogs.json", mediumData, function (err) {
        if (err) {
          console.error("Error writing blogs.json:", err);
        } else {
          console.log("Saved file to public/blogs.json");
        }
      });
    });
  });

  mediumReq.on("error", error => {
    console.error("Request error:", error);
    throw error;
  });

  mediumReq.end();
}
