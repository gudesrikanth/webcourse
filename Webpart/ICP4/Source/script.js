function getGithubInfo(user) {
    //generate the request url endpoint
    var url = `https://api.github.com/users/${user}`;
    //creat a XMLHttpRequest
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);

    //call showUser or noSuchUser methods based on the status of xhttp upon loading
    xhttp.onload = () => {
        if ( xhttp.status == 200) {
            showUser(JSON.parse(xhttp.response));
        }
        else
        {
            noSuchUser(username);
        }
    }
    xhttp.send();
}

function showUser(user) {
    // set the contents div elements in the div '#profile' with the user content
    var url = `https://github.com/users/${user.login}`;
    document.getElementById('gitimage').src=user.avatar_url;
    document.getElementById('gitname').innerText=user.login;
    document.getElementById('gitid').innerText=user.id;
    document.getElementById('giturl').href=user.url;
    document.getElementById('giturl').innerText=url;
    document.getElementById('twitter').innerText=user.twitter_username;
    document.getElementById('gitrepo').innerText=user.public_repos;
    document.getElementById('gitgist').innerText=user.public_gists;
    document.getElementById('gitfollowers').innerText=user.followers;
    document.getElementById('gitfollowing').innerText=user.following;
    document.getElementById('gitbio').innerText=user.bio;
    document.getElementById('gitcreated').innerText=user.created_at;
    document.getElementById('gitupdated').innerText=user.updated_at;
}

function noSuchUser(username) {
   window.alert("User Details "+ username + " Not Found");
   window.location.reload();
}

$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username);
            //if the response is successful show the user's details
            if (response.status == 200) {
                showUser(JSON.parse(response.responseText));
                //else display suitable message
            } else {
                noSuchUser(username);
            }
        }
    })
});
