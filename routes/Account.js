class GithubAccount {

    /**
     * 
     * @param {String} username Github username
     */
    constructor(username) {
        this.username = username;
        this.login = "";
        this.id = 0;
        this.node_id = "";
        this.avatar_url = "";
        this.gravatar_id = "";
        this.url = "";
        this.html_url = "";
        this.followers_url = "";
        this.following_url = "";
        this.gists_url = "";
        this.starred_url = "";
        this.subscriptions_url = "";
        this.organizations_url = "";
        this.repos_url = "";
        this.events_url = "";
        this.received_events_url = "";
        this.type = "";
        this.site_admin = false;
        this.name = "";
        this.company = null;
        this.blog = "";
        this.location = "";
        this.email = null;
        this.hireable = false;
        this.bio = "";
        this.twitter_username = "";
        this.public_repos = 0;
        this.public_gists = 0;
        this.followers = 0;
        this.following = 0;
        this.created_at = new Date();
        this.updated_at = new Date();
        this.loadedDates = [];
        this.lastLoaded = null;
    }

    async load() {
        const response = await fetch(`https://api.github.com/users/${this.username}`);

        const results = await response.json();

        if (response.ok) {
            for (let e in results) {
                this[e] = results[e];
            }
        }

        const now = new Date();

        this.loadedDates.push({
            date: now,
            status: response.status,
            ok: response.ok
        });

        this.lastLoaded = now;

        return this;
    }
}

export default GithubAccount;