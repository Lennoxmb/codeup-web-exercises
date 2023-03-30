import {getLastCommit} from './github.js'

(async ()=>{
    // Get users
    // let users = await getGithubUsers();
    // console.log(users);
    // // Render the users
    // const usersGrid = document.querySelector('#userGrid');
    // users.forEach(function(user){
    //     renderGithubUser(user, usersGrid);
    // });

    // Get events
    let lastCommit = await getLastCommit('lennoxmb');
    console.log(lastCommit.created_at);



})();