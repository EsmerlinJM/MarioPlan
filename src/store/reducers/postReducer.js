const initState = {
    posts: [
        {id: 1, title: 'Help me find peach', content: 'blah blah blah'},
        {id: 2, title: 'Collect all coins', content: 'blah blah blah'},
        {id: 3, title: 'Eat a mushroom', content: 'blah blah blah'}
    ]
}

/**
 * Return reducer with post properties.
 * 
 * @param {Object} state 
 * @param {*} action 
 */
const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            console.log('created post', action.post);
            return state
        case 'CREATE_POST_ERROR': 
            console.log('create error error', action.err);
            return state    
        default:
            return state
    }
}

export default postReducer