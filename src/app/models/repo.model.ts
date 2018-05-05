
export class Repo {
    "id": number;
    "owner": owner;
    "name": string;
    "full_name": string;
    "description": string;
    "private": boolean;
    "fork": boolean;
    "url": string; //https://api.github.com/repos/octocat/Hello-World
    "html_url": string; //https://github.com/octocat/Hello-World
    "archive_url": string; //http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}
    "assignees_url": string; //http://api.github.com/repos/octocat/Hello-World/assignees{/user} 
    "blobs_url": string; //http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha} 
    "branches_url": string; //http://api.github.com/repos/octocat/Hello-World/branches{/branch} 
    "clone_url": string; //https://github.com/octocat/Hello-World.git 
    "collaborators_url": string; //http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator} 
    "comments_url": string; //http://api.github.com/repos/octocat/Hello-World/comments{/number} 
    "commits_url": string; //http://api.github.com/repos/octocat/Hello-World/commits{/sha} 
    "compare_url": string; //http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head} 
    "contents_url": string; //http://api.github.com/repos/octocat/Hello-World/contents/{+path} 
    "contributors_url": string; //http://api.github.com/repos/octocat/Hello-World/contributors 
    "deployments_url": string; //http://api.github.com/repos/octocat/Hello-World/deployments 
    "downloads_url": string; //http://api.github.com/repos/octocat/Hello-World/downloads 
    "events_url": string; //http://api.github.com/repos/octocat/Hello-World/events 
    "forks_url": string; //http://api.github.com/repos/octocat/Hello-World/forks 
    "git_commits_url": string; //http://api.github.com/repos/octocat/Hello-World/git/commits{/sha} 
    "git_refs_url": string; //http://api.github.com/repos/octocat/Hello-World/git/refs{/sha} 
    "git_tags_url": string; //http://api.github.com/repos/octocat/Hello-World/git/tags{/sha} 
    "git_url": string; //git:github.com/octocat/Hello-World.git 
    "hooks_url": string; //http://api.github.com/repos/octocat/Hello-World/hooks 
    "issue_comment_url": string; //http://api.github.com/repos/octocat/Hello-World/issues/comments{/number} 
    "issue_events_url": string; //http://api.github.com/repos/octocat/Hello-World/issues/events{/number} 
    "issues_url": string; //http://api.github.com/repos/octocat/Hello-World/issues{/number} 
    "keys_url": string; //http://api.github.com/repos/octocat/Hello-World/keys{/key_id} 
    "labels_url": string; //http://api.github.com/repos/octocat/Hello-World/labels{/name} 
    "languages_url": string; //http://api.github.com/repos/octocat/Hello-World/languages 
    "merges_url": string; //http://api.github.com/repos/octocat/Hello-World/merges 
    "milestones_url": string; //http://api.github.com/repos/octocat/Hello-World/milestones{/number} 
    "mirror_url": string; //git:git.example.com/octocat/Hello-World 
    "notifications_url": string; //http://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating} 
    "pulls_url": string; //http://api.github.com/repos/octocat/Hello-World/pulls{/number} 
    "releases_url": string; //http://api.github.com/repos/octocat/Hello-World/releases{/id} 
    "ssh_url": string; //git@github.com:octocat/Hello-World.git 
    "stargazers_url": string; //http://api.github.com/repos/octocat/Hello-World/stargazers 
    "statuses_url": string; //http://api.github.com/repos/octocat/Hello-World/statuses/{sha}
    "subscribers_url": string; //http://api.github.com/repos/octocat/Hello-World/subscribers
    "subscription_url": string; //http://api.github.com/repos/octocat/Hello-World/subscription
    "svn_url": string; //https://svn.github.com/octocat/Hello-World
    "tags_url": string; //http://api.github.com/repos/octocat/Hello-World/tags
    "teams_url": string; //http://api.github.com/repos/octocat/Hello-World/teams
    "trees_url": string; //http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}
    "homepage": string; //https://github.com
    "language": null;
    "forks_count": number;
    "stargazers_count": number;
    "watchers_count": number;
    "size": number;
    "default_branch": string;
    "open_issues_count": number;
    "topics": object;
    "has_issues": boolean;
    "has_wiki": boolean;
    "has_pages": boolean;
    "has_downloads": boolean;
    "archived": boolean;
    "pushed_at": string;
    "created_at": string;
    "updated_at": string;
    "permissions": object;
    "allow_rebase_merge": boolean;
    "allow_squash_merge": boolean;
    "allow_merge_commit": boolean;
    "subscribers_count": number;
    "network_count": number;
    "license": object;
}

interface owner {
    "login": string;
    "id": number;
    "avatar_url": string; //https://github.com/images/error/octocat_happy.gif 
    "gravatar_id": string;
    "url": string; //https://api.github.com/users/octocat 
    "html_url": string; //https://github.com/octocat 
    "followers_url": string; //https://api.github.com/users/octocat/followers 
    "following_url": string; //https://api.github.com/users/octocat/following{/other_user} 
    "gists_url": string; //https://api.github.com/users/octocat/gists{/gist_id} 
    "starred_url": string; //https://api.github.com/users/octocat/starred{/owner}{/repo} 
    "subscriptions_url": string; //https://api.github.com/users/octocat/subscriptions 
    "organizations_url": string; //https://api.github.com/users/octocat/orgs 
    "repos_url": string; //https://api.github.com/users/octocat/repos 
    "events_url": string; //https://api.github.com/users/octocat/events{/privacy} 
    "received_events_url": string; //https://api.github.com/users/octocat/received_events 
    "type": string;
    "site_admin": boolean;
}