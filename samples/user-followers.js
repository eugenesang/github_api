import  { writeFile } from 'fs';
import GithubFollowers from '../routes/Followers.js';
import { error } from 'console';


(async ()=>{
    const user = new GithubFollowers('eugenesang');

    await user.loadFollowers();

    writeFile('data/userFollowers.json', JSON.stringify(user, null, 4), {encoding: 'utf-8'}, (err=>{
        console.log(error);
    }))
})()