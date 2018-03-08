export function selectBook(book) {
    // selectBook is an ActionCreator, it needs to return an action, an object with a type property 
    return {
        type: 'BOOK_SELECTED',
        payload: book 
    };
}

//Actions usually have two values. A "type" and a "payload".
//the "payload" further describes the conditions of the actions being triggered.
//Every actions must have a type that describes the purpose of the action. 