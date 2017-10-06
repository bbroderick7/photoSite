/* Copyright G. Hemingway, @2017 */
'use strict';


let shuffleCards = (includeJokers = false) => {
    let cardArray = [];
    let suites = ["spades", "diamonds", "clubs", "hearts"];
    suites.forEach((suite) => {
      for(let i = 2; i < 15 ; i++){
        cardArray.push({"suite": suite, "value": i});
      }
    })
    if(includeJokers){
      cardArray.push({"suite": "black", "value": 15});
      cardArray.push({"suite": "red", "value": 15});
    }
    let shuffler = (cardDeck) => {
      for (let i = cardDeck.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [cardDeck[i - 1], cardDeck[j]] = [cardDeck[j], cardDeck[i - 1]];
      }
    }
    shuffler(cardArray);
    return cardArray;
};

let initialState = () => {
    /* Use the above function.  Generate and return an initial state for a game */
    let state = {
        id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10),
        pile1: [],
        pile2: [],
        pile3: [],
        pile4: [],
        pile5: [],
        pile6: [],
        pile7: [],
        stack1: [],
        stack2: [],
        stack3: [],
        stack4: [],
        draw: [],
        discard: []
    };

    /* Generate actual game initial state here */
    let  freshCardDeck = shuffleCards();
    let deckTracker = 0;
    for(let i = 0; i < 7; i++){
       state[`pile${i+1}`].push({"suite": freshCardDeck[deckTracker].suite,
                                "value": freshCardDeck[deckTracker].value,
                                "up": true});
       deckTracker++;
       let j = 0;
       while(j < i){
         state[`pile${i+1}`].push({"suite": freshCardDeck[deckTracker].suite,
                                  "value": freshCardDeck[deckTracker].value,
                                  "up": false});
         deckTracker++;
         j++;
       }
    }
    while(deckTracker < freshCardDeck.length){
      state["draw"].push({"suite": freshCardDeck[deckTracker].suite,
                          "value": freshCardDeck[deckTracker].value,
                          "up": false});
      deckTracker++;
    }
    return state;
};


module.exports = {
    shuffleCards: shuffleCards,
    initialState: initialState
};
