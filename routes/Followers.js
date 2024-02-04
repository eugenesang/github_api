import GithubAccount from "./Account.js";

class GithubFollowers extends GithubAccount{
    /**
     * 
     * @param {String} username 
     */
    constructor(username){
        super(username);
        this.followerList = [];
    }

    async loadFollowers(){
        if(!this.lastLoaded){
            await this.load();
        }
        const response = await fetch(this.followers_url);
        const followers = await response.json();
        if(response.ok){
            this.followerList = followers.map(({login})=>{
                const follower = new GithubAccount(login);
                return follower;
            });

            await Promise.all(this.followerList.map(d=>d.load()))
        }        
    }
}

export default GithubFollowers;