const { produce } = require('immer');

let state = [
    {
        id: 1,
        title: 'Item 1',
    },
    {
        id: 2,
        title: 'Item 2',
    },
    {
        id: 3,
        title: 'Item 3',
    },
];

const prevState = state;

// Mutation
// state[0].title = 'title changed';

// Immutable
// state = state.map((item) =>
//     item.id !== 1
//         ? item
//         : {
//               ...item,
//               title: 'Hacked Title',
//           }
// );

//Immer
state = produce(state, (draft) => {
    // draft[0].title = 'title changed';
    draft.push({
        id: 3,
        title: 'Item 3',
    });
});

console.log('not Changed', state[0].title, prevState === state);
