/* Copyright G. Hemingway @2017 - All rights reserved */
"use strict";

let gameType = "klondyke";
function onLoad() {
    let buttons = document.getElementsByClassName('btn');
    buttons[0].addEventListener('click', onStart, false );
    // Handle making draw active/inactive based on game selected
    $("input[type='radio']").click(() => {
        gameType = $("input[name='game']:checked").val();
        $('#draw').prop("disabled", gameType === 'hearts');
    });

    if(getUserNameFromCookie(document.cookie) == null){
      window.location = `/login.html`
    }
}

function onStart(event) {
    event.preventDefault();

    gameType = $("input[name='game']:checked").val();

    const data = {
        game: gameType,
        draw: '1',
        color: 'red'
    };
    $.ajax({
        url: "/v1/game",
        method: "post",
        data: data,
        success: function(data) {
            window.location = `/game.html?id=${data.id}`;
        },
        error: function(err) {
            let errorEl = document.getElementById('errorMsg');
            errorEl.innerHTML = `Error: ${err.responseJSON.error}`;
        }
    });
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
