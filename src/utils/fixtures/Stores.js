// libraries...

/**
 * This fixture class is used for booking scenarios.
 *
 * @constructor
 */
const Stores = function () {

    const storeId = 1533;

    return {
        // https://www.google.com/maps/@-33.8831,151.21663,21z 2 hill street, Surry Hills
        SurryHillStore: {
            "latitude": -33.883100,
            "longitude": 151.216630,
            "id": storeId
        },
        UkraineStore: {
            "latitude" : 48.6097671,
            "longitude" : 22.305525,
            "id" : 441,
            "title" : "Yello Store6"
        }
    }
};

module.exports = new Stores();