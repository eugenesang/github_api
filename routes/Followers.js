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
            this.followerList = followers;
        }
    }
}

const user = new GithubFollowers('eugenesang');
(async ()=>{
    await user.loadFollowers();
    console.log(user)
})()