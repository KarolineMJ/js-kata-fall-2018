"use strict"
//https://kea-alt-del.dk/twitter/api/?hashtag=word&?count=50

window.addEventListener("load", () => {

    const tweetTemp = document.querySelector(".tweetTemp").content;
    let tweet = document.querySelector("#tweets");
    fetch("https://kea-alt-del.dk/twitter/api/?hashtag=word&?count=50")
        .then(e => e.json())
        .then(showTweets)

    function showTweets(data) {
        console.log(data);
        data.statuses.forEach(showTweet);
    }

    function showTweet(aTweet) {
        const clone = tweetTemp.cloneNode(true);
        clone.querySelector("h1").textContent = aTweet.text;
        clone.querySelector("p").textContent = aTweet.user.screen_name;
        tweet.appendChild(clone);
    }

});