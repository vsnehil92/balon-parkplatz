export default function (state = '', action) {
    switch (action.type) {
        case 'LOCATION_SEARCH':
            return action.payload;
            break;
    }
    return state;
}
