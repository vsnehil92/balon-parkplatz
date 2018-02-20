export const currentLocation = (location) => {
    console.log("You location is: ", location);
    return {
        type: 'LOCATION_SEARCH',
        payload: location
    }
};