export class Commit{    
    "url":  string; //https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e 
    "sha": string; //6dcb09b5b57875f334f61aebed695e2e4193db5e 
    "html_url": string; //https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e 
    "comments_url": string; //https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e/comments 
    "commit": commit;
    "author": author;
    "committer": committer;
    "parents": parent[];
}

interface commit {
    "url": string; //https://api.github.com/repos/octocat/Hello-World/git/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e 
    "author": commitauthor;
    "committer": commitcommiter;
    "message": string;
    "tree": committree;
    "comment_count": number;
    "verification": commitverfication;
}

interface commitauthor{
    "name": string;
    "email": string;
    "date": string;
}

interface commitcommiter {
    "name": string;
    "email": string;
    "date": string;
}

interface committree {
    "url": string; //https://api.github.com/repos/octocat/Hello-World/tree/6dcb09b5b57875f334f61aebed695e2e4193db5e 
    "sha": string;
}

interface commitverfication {
    "verified": boolean;
    "reason": string;
    "signature": null;
    "payload": null;
}

interface author {
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
    "type": string; //User 
    "site_admin": boolean;
}

interface committer {
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

interface parent {
    "url": string; //https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e 
    "sha": string;
}