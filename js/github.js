import {keys} from './keys.js'

export const getGithubUsers = async (since = 1, perPage = 32) => {
    try {
        /*
            To add the ability to get a specific page of users, we are
            using the url parameters "since" and "per_page" described
            in GitHub's documentation. These are assigned default values
            as parameters in our function here. If you pass arguments for
            the parameters, they will be replaced. If you do not, the fetch
            will get the first page of users.
         */
        let options = {
            header: {
                "Authorization": `token ${keys.github}`
            }
        }
        let response = await fetch(`https://api.github.com/users?since=${since}&per_page=${perPage}`);
        let data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
    // the .then syntax (older)
    // return fetch('https://api.github.com/users')
    //     .then(response => response.json())
    //     .then(data => data)
    //     .catch(error=>{
    //         console.log(error);
    //     });
}

export const getGithubUser = async (username) => {
    try {
        let options = {
            header: {
                "Authorization": `token ${keys.github}`
            }
        }
        let response = await fetch(`https://api.github.com/users/${username}`);
        let data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
}

export const getGithubEvents = async (username) => {
    try {
        let options = {
            header: {
                "Authorization": `token ${keys.github}`
            }
        }
        let response = await fetch(`https://api.github.com/users/${username}/events/public`);
        let data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
}

export const getLastCommit = async (username) => {
    let events = await getGithubEvents(username);
    let lastCommit = events.find(function(e){
        return e.type === "PushEvent";
    })
    return lastCommit;
}

export const renderGithubUser = (user, parent) => {
    /*
        We have two parameters assigned to this function.
        "user" will be a single user object
        "parent" will be a node in the dom where the user card
        will be appended.
    */
    // We start by creating a node for the top-level element of the user-card
    const element = document.createElement('div');
    // Then we assign any classes/attributes it might need
    element.classList.add('user-card');
    // Then we add any inner HTML with a template string
    // replacing any of the dummy data with data from the "user" object
    element.innerHTML = `
        <div class="img-wrapper">
            <img src="${user.avatar_url}" alt="User image" class="avatar">
        </div>
        <h2>${user.login}</h2>
        <a href="${user.html_url}" target="_blank">Go to Profile</a>
        <button>Remove</button>
    `;
    // Then we use the node to querySelect and add any event listeners
    // needed for this card
    element.querySelector('button').addEventListener('click', function(){
        element.remove();
    });
    // Finally, we append the node into the dom
    // Remember, the "parent" attribute is decided when this function is called
    // this increases the versatility of this function, where it can render
    // anywhere in the DOM we want. We just make that decision when we call this function
    parent.appendChild(element);
}