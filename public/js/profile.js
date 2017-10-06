/* Copyright G. Hemingway @2017 - All rights reserved */
"use strict";

function getUrlVars() {
    let vars = [], hash;
    let hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(let i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function onLoad() {
    setTimeout(function() {
        let vars = getUrlVars();
        $.ajax({
            url: `/v1/user/${vars.username}`,
            method: "get",
            success: function(data) {
                // Setup the page
                $('#username').html(data.username);
                $('#first_name').html(data.first_name);
                $('#last_name').html(data.last_name);
                $('#city').html(data.city);
                $('#primary_email').html(data.primary_email);
                $('#games_count').html(`Games Played (${data.games.length}):`);
                let $games = $('#games');
                data.games.forEach(game => {
                    let date = new Date(game.start);
                    const url = game.active ? `/game.html?id=${game.id}` : `/results.html?id=${game.id}`;
                    $games.append(`<tr>
                        <th><a href=${url}>${game.active?"Active":"Complete"}</a></th>
                        <th>${date.toLocaleString()}</th>
                        <th>${game.moves}</th>
                        <th>${game.score}</th>
                        <th>${game.game}</th>
                    </tr>`);
                });
                if(getUserNameFromCookie(document.cookie) != null){

                  let logOutLink = $(`<a id="loginLink" href="#">Log Out</a>`);
                  document.getElementById("loginLink").parentNode.appendChild(logOutLink[0]);
                  /*
                  Insert gravatar code here 
                  */
                  document.getElementById("loginLink").parentNode.removeChild(document.getElementById("loginLink"));
                  document.getElementById("regLink").parentNode.removeChild(document.getElementById("regLink"));

                }
                if(getUserNameFromCookie(document.cookie) != data.username){
                  document.getElementById("startLink").style.display = "none";
                }else{
                  let profA = document.createElement("a");
                  profA.href = "/edit";
                  let proflink = document.createElement("h6");
                  proflink.textContent = "Edit Profile";
                  profA.appendChild(proflink);
                  document.getElementById("profile-header").appendChild(profA);
                }
            },
            error: function(err) {
                let errorEl = document.getElementById('errorMsg');
                errorEl.innerHTML = `Error: ${err.responseJSON.error}`;
            }
        });
    }, 1000);
}

function getUserNameFromCookie(cookieString){
  if(cookieString.search("username") == -1){
    return null;
  }
  let usernameString = cookieString.substr(cookieString.search("username"));
  if(usernameString.search(";") != -1){
    return usernameString.substr(0, usernameString.search(";")).split("=")[1];
  }else{
    return usernameString.split("=")[1];
  }
}
