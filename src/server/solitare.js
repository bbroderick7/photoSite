/* Copyright G. Hemingway, @2017 */
'use strict';


let shuffleCards = (includeJokers = false) => {
    return [{ "suit": "clubs", "value": 7 }, { "suit": "diamonds", "value": 12 }];
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

    return state;
};


module.exports = {
    shuffleCards: shuffleCards,
    initialState: initialState
};