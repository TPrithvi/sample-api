// libraries...

/**
 * This fixture class is used for booking scenarios.
 *
 * @constructor
 */
const ConditionRules = function () {
    return {
        // different combinations driverShouldReachAtStore
        driverReachedOnTime: {
            "driverShouldReachAtStore": 1611097200,
            "isDelayFeeEnabled": 1,
            "maxDelayMinuteThreshold": 1800
        },
        driverReachedBeforeTime: {
            "driverShouldReachAtStore": 1611097200,
            "isDelayFeeEnabled": 1,
            "maxDelayMinuteThreshold": 1800
        },
        zeroFixture: {
            "driverShouldReachAtStore" : 1613226247,
            "isDelayFeeEnabled" : "1",
            "maxDelayMinuteThreshold" : 2700
        },
        multiRun: {
            "driverShouldReachAtStore" : 1613418300,
            "isDelayFeeEnabled" : "1",
            "maxDelayMinuteThreshold" : 2700
        }
    }
};

module.exports = new ConditionRules();