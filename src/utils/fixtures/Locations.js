// libraries...
const uuid = require('uuid');

/**
 * This fixture class is used for booking scenarios.
 *
 * @constructor
 */
const samples = function () {

    const driverID = 4883;
    const roamerRequestID = uuid.v4();
    const runID = uuid.v4();
    const atStore = "atStore";

    return {
        samplesWithinStore: [
            /* 1 */
            {
                "_id": uuid.v4(),
                "timestamp" : 1610931723,
                "accuracy" : 96,
                "distance" : 2.0406582,
                "driverID" : driverID,
                "latitude" : -33.8830558,
                "longitude" : 151.2167648,
                "roamerRequestID" :  roamerRequestID,
                "runID" : runID,
                "state" : atStore,
                "createdAt" : 1610931784,
                "updatedAt" : 1610931784
            },

            /* 2 */
            {
                "_id": uuid.v4(),
                "timestamp" : 1610931743,
                "accuracy" : 15.008,
                "distance" : 5.7331533,
                "driverID" : driverID,
                "latitude" : -33.88306569,
                "longitude" : 151.21680579,
                "roamerRequestID" :  roamerRequestID,
                "runID" : runID,
                "state" : atStore,
                "createdAt" : 1610931784,
                "updatedAt" : 1610931784,
                
            },

            /* 3 */
            {
                "_id": uuid.v4(),
                "timestamp" : 1610931763,
                "accuracy" : 13.936001,
                "distance" : 5.420073,
                "driverID" : driverID,
                "latitude" : -33.88306386,
                "longitude" : 151.21680312,
                "roamerRequestID" :  roamerRequestID,
                "runID" : runID,
                "state" : atStore,
                "createdAt" : 1610931784,
                "updatedAt" : 1610931784,
                
            },

            /* 4 */
            {
                "_id": uuid.v4(),
                "timestamp" : 1610931783,
                "accuracy" : 12.864,
                "distance" : 5.4087973,
                "driverID" : driverID,
                "latitude" : -33.8830638,
                "longitude" : 151.21680302,
                "roamerRequestID" :  roamerRequestID,
                "runID" : runID,
                "state" : atStore,
                "createdAt" : 1610931784,
                "updatedAt" : 1610931784,
                
            },

            /* 5 */
            {
                "_id": uuid.v4(),
                "timestamp" : 1610931803,
                "accuracy" : 11.792,
                "distance" : 5.3952413,
                "driverID" : driverID,
                "latitude" : -33.88306384,
                "longitude" : 151.21680283,
                "roamerRequestID" :  roamerRequestID,
                "runID" : runID,
                "state" : atStore,
                "createdAt" : 1610931844,
                "updatedAt" : 1610931844,
                
            },

            /* 6 */
            {
                "_id": uuid.v4(),
                "timestamp" : 1610931823,
                "accuracy" : 15.008,
                "distance" : 5.359066,
                "driverID" : driverID,
                "latitude" : -33.88306342,
                "longitude" : 151.21680265,
                "roamerRequestID" :  roamerRequestID,
                "runID" : runID,
                "state" : atStore,
                "createdAt" : 1610931844,
                "updatedAt" : 1610931844,
                
            },

            /* 7 */
            {
                "_id": uuid.v4(),
                "timestamp" : 1610931843,
                "accuracy" : 20.368,
                "distance" : 5.3553967,
                "driverID" : driverID,
                "latitude" : -33.88306338,
                "longitude" : 151.21680263,
                "roamerRequestID" :  roamerRequestID,
                "runID" : runID,
                "state" : atStore,
                "createdAt" : 1610931844,
                "updatedAt" : 1610931844,
                
            },

            /* 8 */
            {
                "_id": uuid.v4(),
                "timestamp" : 1610931863,
                "accuracy" : 21.44,
                "distance" : 5.3553967,
                "driverID" : driverID,
                "latitude" : -33.88306338,
                "longitude" : 151.21680263,
                "roamerRequestID" :  roamerRequestID,
                "runID" : runID,
                "state" : atStore,
                "createdAt" : 1610931904,
                "updatedAt" : 1610931904,
                
            },

            /* 9 */
            {
                "_id": uuid.v4(),
                "timestamp" : 1610931883,
                "accuracy" : 37.52,
                "distance" : 5.355902,
                "driverID" : driverID,
                "latitude" : -33.88306339,
                "longitude" : 151.21680263,
                "roamerRequestID" :  roamerRequestID,
                "runID" : runID,
                "state" : atStore,
                "createdAt" : 1610931904,
                "updatedAt" : 1610931904,
                
            },

            /* 10 */
            {
                "_id": uuid.v4(),
                "timestamp" : 1610931903,
                "accuracy" : 16.08,
                "distance" : 5.3548913,
                "driverID" : driverID,
                "latitude" : -33.88306337,
                "longitude" : 151.21680263,
                "roamerRequestID" :  roamerRequestID,
                "runID" : runID,
                "state" : atStore,
                "createdAt" : 1610931904,
                "updatedAt" : 1610931904,
                
            }
        ],
        samples5in5outStore: [
            /* 0 9:55 am shouldn't consider it*/
            {
                "_id": uuid.v4() + 1,
                "timestamp" : 1611096900, // 9:55 am
                "accuracy" : 96,
                "distance" : 2.0406582,
                "driverID" : driverID,
                "latitude" : -33.8830558,
                "longitude" : 151.2167648,
                "roamerRequestID" :  roamerRequestID,
                "runID" : runID,
                "state" : atStore,
                "createdAt" : 1610931784,
                "updatedAt" : 1610931784,
                
            },
            /* 1 10 am*/
            {
                "_id": uuid.v4() + 1,
                "timestamp" : 1611097200, // 10 am
                "accuracy" : 96,
                "distance" : 2.0406582,
                "driverID" : driverID,
                "latitude" : -33.8830558,
                "longitude" : 151.2167648,
                "roamerRequestID" :  roamerRequestID,
                "runID" : runID,
                "state" : atStore,
                "createdAt" : 1610931784,
                "updatedAt" : 1610931784,
                
            },

            /* 2 */
            {
                "_id": uuid.v4()+ 2,
                "timestamp" : 1611097500, // 10:05 
                "accuracy" : 15.008,
                "distance" : 5.7331533,
                "driverID" : driverID,
                "latitude" : -33.88306569,
                "longitude" : 151.21680579,
                "roamerRequestID" :  roamerRequestID,
                "runID" : runID,
                "state" : atStore,
                "createdAt" : 1610931784,
                "updatedAt" : 1610931784,
                
            },

            /* 3 56 meter away from store*/
            {
                "_id": uuid.v4()+ 3,
                "timestamp" : 1611097800,
                "accuracy" : 13.936001,
                "distance" : 5.420073,
                "driverID" : driverID,
                "latitude" : -33.8833774120234, 
                "longitude" : 151.21616424311983,
                "roamerRequestID" :  roamerRequestID,
                "runID" : runID,
                "state" : atStore,
                "createdAt" : 1610931784,
                "updatedAt" : 1610931784,
                
            },

            /* 4 71 meter away */
            {
                "_id": uuid.v4()+ 4,
                "timestamp" : 1611098100,
                "accuracy" : 12.864,
                "distance" : 5.4087973,
                "driverID" : driverID,
                "latitude" : -33.88345562524661,
                "longitude" : 151.21615110152192,
                "roamerRequestID" :  roamerRequestID,
                "runID" : runID,
                "state" : atStore,
                "createdAt" : 1610931784,
                "updatedAt" : 1610931784,
                
            },

            /* 5 64 meter away */
            {
                "_id": uuid.v4()+ 5,
                "timestamp" : 1611098400,
                "accuracy" : 11.792,
                "distance" : 5.3952413,
                "driverID" : driverID,
                "latitude" : -33.88361302835779,
                "longitude" : 151.2167257242494,
                "roamerRequestID" :  roamerRequestID,
                "runID" : runID,
                "state" : atStore,
                "createdAt" : 1610931844,
                "updatedAt" : 1610931844,
                
            },

            /* 6 47 meter ways */
            {
                "_id": uuid.v4()+ 6,
                "timestamp" : 1611098700,
                "accuracy" : 15.008,
                "distance" : 5.359066,
                "driverID" : driverID,
                "latitude" : -33.883464218117034,
                "longitude" : 151.2166800325143,
                "roamerRequestID" :  roamerRequestID,
                "runID" : runID,
                "state" : atStore,
                "createdAt" : 1610931844,
                "updatedAt" : 1610931844,
                
            },

            /* 7 */
            {
                "_id": uuid.v4()+ 7,
                "timestamp" : 1611099000,
                "accuracy" : 20.368,
                "distance" : 5.3553967,
                "driverID" : driverID,
                "latitude" : -33.88306338,
                "longitude" : 151.21680263,
                "roamerRequestID" :  roamerRequestID,
                "runID" : runID,
                "state" : atStore,
                "createdAt" : 1610931844,
                "updatedAt" : 1610931844,
                
            },

            /* 8 */
            {
                "_id": uuid.v4()+ 8,
                "timestamp" : 1611099300,
                "accuracy" : 21.44,
                "distance" : 5.3553967,
                "driverID" : driverID,
                "latitude" : -33.88306338,
                "longitude" : 151.21680263,
                "roamerRequestID" :  roamerRequestID,
                "runID" : runID,
                "state" : atStore,
                "createdAt" : 1610931904,
                "updatedAt" : 1610931904,
                
            },

            /* 9 */
            {
                "_id": uuid.v4()+ 9,
                "timestamp" : 1611099600,
                "accuracy" : 37.52,
                "distance" : 5.355902,
                "driverID" : driverID,
                "latitude" : -33.88306339,
                "longitude" : 151.21680263,
                "roamerRequestID" :  roamerRequestID,
                "runID" : runID,
                "state" : atStore,
                "createdAt" : 1610931904,
                "updatedAt" : 1610931904,
                
            },

            /* 10 */
            {
                "_id": uuid.v4()+ 10,
                "timestamp" : 1611099900,
                "accuracy" : 16.08,
                "distance" : 5.3548913,
                "driverID" : driverID,
                "latitude" : -33.88306337,
                "longitude" : 151.21680263,
                "roamerRequestID" :  roamerRequestID,
                "runID" : runID,
                "state" : atStore,
                "createdAt" : 1610931904,
                "updatedAt" : 1610931904,
                
            }
        ],
        requestObject1: [
            {
                "timestamp": 1606381420,
                "latitude": -33.861819,
                "longitude": 151.272439,
                "accuracy": 0,
                "distance": 0,
                "driverID": 1,
                "runID": runID,
                "roamerRequestID": roamerRequestID,
                "shiftID": "32",
                "state": "test",
                "metaData": {
                    "prop": 1
                }
            },
            {
                "timestamp": 1606381520,
                "latitude": -33.883100,
                "longitude": 151.216630,
                "accuracy": 0,
                "distance": 0,
                "driverID": 1,
                "runID": runID,
                "roamerRequestID": roamerRequestID,
                "shiftID": "32",
                "state": "test",
                "metaData": {
                    "prop": 1
                }
            },
            {
                "timestamp": 1606381620,
                "latitude": -33.883100,
                "longitude": 151.216630,
                "accuracy": 0,
                "distance": 0,
                "driverID": 1,
                "runID": runID,
                "roamerRequestID": roamerRequestID,
                "shiftID": "32",
                "state": "test",
                "metaData": {
                    "prop": 1
                }
            }
        ],
        pauseRequestObject: [
            {
                "timestamp": 1606381400,
                "latitude": -33.861819,
                "longitude": 151.272439,
                "accuracy": 0,
                "distance": 0,
                "driverID": 1,
                "runID": runID,
                "roamerRequestID": roamerRequestID,
                "shiftID": "32",
                "state": "test",
                "metaData": {
                    "trackingTimeInterval": 10,
                    "afterPause":false
                }
            },
            {
                "timestamp": 1606381410,
                "latitude": -33.883100,
                "longitude": 151.216630,
                "accuracy": 0,
                "distance": 0,
                "driverID": 1,
                "runID": runID,
                "roamerRequestID": roamerRequestID,
                "shiftID": "32",
                "state": "test",
                "metaData": {
                    "trackingTimeInterval": 10,
                    "afterPause":false
                }
            },
            {
                "timestamp": 1606381420,
                "latitude": -33.883100,
                "longitude": 151.216630,
                "accuracy": 0,
                "distance": 0,
                "driverID": 1,
                "runID": runID,
                "roamerRequestID": roamerRequestID,
                "shiftID": "32",
                "state": "test",
                "metaData": {
                    "trackingTimeInterval": 10,
                    "afterPause":false
                }
            },
            {
                "timestamp": 1606381430,
                "latitude": -33.883100,
                "longitude": 151.216630,
                "accuracy": 0,
                "distance": 0,
                "driverID": 1,
                "runID": runID,
                "roamerRequestID": roamerRequestID,
                "shiftID": "32",
                "state": "test",
                "metaData": {
                    "trackingTimeInterval": 10,
                    "afterPause":false
                }
            },
            {
                "timestamp": 1606381510,
                "latitude": -33.883100,
                "longitude": 151.216630,
                "accuracy": 0,
                "distance": 0,
                "driverID": 1,
                "runID": runID,
                "roamerRequestID": roamerRequestID,
                "shiftID": "32",
                "state": "test",
                "metaData": {
                    "trackingTimeInterval": 10,
                    "afterPause":false
                }
            },
            {
                "timestamp": 1606381520,
                "latitude": -33.883100,
                "longitude": 151.216630,
                "accuracy": 0,
                "distance": 0,
                "driverID": 1,
                "runID": runID,
                "roamerRequestID": roamerRequestID,
                "shiftID": "32",
                "state": "test",
                "metaData": {
                    "trackingTimeInterval": 10,
                    "afterPause":false
                }
            },
            {
                "timestamp": 1606381530,
                "latitude": -33.883100,
                "longitude": 151.216630,
                "accuracy": 0,
                "distance": 0,
                "driverID": 1,
                "runID": runID,
                "roamerRequestID": roamerRequestID,
                "shiftID": "32",
                "state": "test",
                "metaData": {
                    "trackingTimeInterval": 10,
                    "afterPause":false
                }
            },
            {
                "timestamp": 1606381540,
                "latitude": -33.883100,
                "longitude": 151.216630,
                "accuracy": 0,
                "distance": 0,
                "driverID": 1,
                "runID": runID,
                "roamerRequestID": roamerRequestID,
                "shiftID": "32",
                "state": "test",
                "metaData": {
                    "trackingTimeInterval": 10,
                    "afterPause":false
                }
            },
            {
                "timestamp": 1606381550,
                "latitude": -33.883100,
                "longitude": 151.216630,
                "accuracy": 0,
                "distance": 0,
                "driverID": 1,
                "runID": runID,
                "roamerRequestID": roamerRequestID,
                "shiftID": "32",
                "state": "test",
                "metaData": {
                    "trackingTimeInterval": 10,
                    "afterPause":false
                }
            },
        ],
        zerosample: [/* 1 */
            {
                "_id" : "bd27255b-8e90-430d-9a1f-13d3c865c005",
                "timestamp" : 1613226259,
                "latitude" : 48.6118127294123,
                "longitude" : 22.303973792407,
                "accuracy" : 5,
                "distance" : 254.617762601802,
                "driverID" : 1574,
                "runID" : "7f01d6d0-69c7-4fee-b30c-d4e7bcb4cd26",
                "roamerRequestID" : "2f9665a0-dce5-4a7a-865d-b4b34f82bc73",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : true
                },
                "createdAt" : 1613226280,
                "updatedAt" : 1613226280,
                "__v" : 0
            },
            
            /* 2 */
            {
                "_id" : "3572f84e-a691-4315-a69b-ce61766d8f7d",
                "timestamp" : 1613226289,
                "latitude" : 48.6118049709326,
                "longitude" : 22.303954681759,
                "accuracy" : 5,
                "distance" : 254.485354658808,
                "driverID" : 1574,
                "runID" : "7f01d6d0-69c7-4fee-b30c-d4e7bcb4cd26",
                "roamerRequestID" : "2f9665a0-dce5-4a7a-865d-b4b34f82bc73",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : true
                },
                "createdAt" : 1613226309,
                "updatedAt" : 1613226309,
                "__v" : 0
            },
            
            /* 3 */
            {
                "_id" : "6fefc4ce-0e1b-49a1-a44b-68e558a77262",
                "timestamp" : 1613226299,
                "latitude" : 48.6118049709326,
                "longitude" : 22.303954681759,
                "accuracy" : 5,
                "distance" : 254.485354658808,
                "driverID" : 1574,
                "runID" : "7f01d6d0-69c7-4fee-b30c-d4e7bcb4cd26",
                "roamerRequestID" : "2f9665a0-dce5-4a7a-865d-b4b34f82bc73",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613226309,
                "updatedAt" : 1613226309,
                "__v" : 0
            },
            
            /* 4 */
            {
                "_id" : "101d408f-9f8c-49d3-9701-f4a82bb2f4fa",
                "timestamp" : 1613226329,
                "latitude" : 48.6118060792902,
                "longitude" : 22.303974463081,
                "accuracy" : 5,
                "distance" : 253.935023589752,
                "driverID" : 1574,
                "runID" : "7f01d6d0-69c7-4fee-b30c-d4e7bcb4cd26",
                "roamerRequestID" : "2f9665a0-dce5-4a7a-865d-b4b34f82bc73",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : true
                },
                "createdAt" : 1613226339,
                "updatedAt" : 1613226339,
                "__v" : 0
            },
            
            /* 5 */
            {
                "_id" : "c2878c88-fed9-4250-b65c-082fa53e7de7",
                "timestamp" : 1613226339,
                "latitude" : 48.6118060792902,
                "longitude" : 22.303974463081,
                "accuracy" : 5,
                "distance" : 253.935023589752,
                "driverID" : 1574,
                "runID" : "7f01d6d0-69c7-4fee-b30c-d4e7bcb4cd26",
                "roamerRequestID" : "2f9665a0-dce5-4a7a-865d-b4b34f82bc73",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613226339,
                "updatedAt" : 1613226339,
                "__v" : 0
            },
            
            /* 6 */
            {
                "_id" : "f68531a3-b3a0-4671-a72a-0c87725d078e",
                "timestamp" : 1613226419,
                "latitude" : 48.6117992075332,
                "longitude" : 22.303966416436,
                "accuracy" : 5,
                "distance" : 253.521371523182,
                "driverID" : 1574,
                "runID" : "7f01d6d0-69c7-4fee-b30c-d4e7bcb4cd26",
                "roamerRequestID" : "2f9665a0-dce5-4a7a-865d-b4b34f82bc73",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : true
                },
                "createdAt" : 1613226430,
                "updatedAt" : 1613226430,
                "__v" : 0
            },
            
            /* 7 */
            {
                "_id" : "49b38dae-e09f-4581-9711-f87b4d16ee4a",
                "timestamp" : 1613226429,
                "latitude" : 48.6117992075332,
                "longitude" : 22.303966416436,
                "accuracy" : 5,
                "distance" : 253.521371523182,
                "driverID" : 1574,
                "runID" : "7f01d6d0-69c7-4fee-b30c-d4e7bcb4cd26",
                "roamerRequestID" : "2f9665a0-dce5-4a7a-865d-b4b34f82bc73",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613226430,
                "updatedAt" : 1613226430,
                "__v" : 0
            },
            
            /* 8 */
            {
                "_id" : "e96dc701-1eda-43ed-8056-05cfbf021690",
                "timestamp" : 1613226479,
                "latitude" : 48.6117998725473,
                "longitude" : 22.303977480518,
                "accuracy" : 5,
                "distance" : 253.218582570551,
                "driverID" : 1574,
                "runID" : "7f01d6d0-69c7-4fee-b30c-d4e7bcb4cd26",
                "roamerRequestID" : "2f9665a0-dce5-4a7a-865d-b4b34f82bc73",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : true
                },
                "createdAt" : 1613226491,
                "updatedAt" : 1613226491,
                "__v" : 0
            },
            
            /* 9 */
            {
                "_id" : "00cd3a42-3d10-4b6f-bcf8-1e6d0010180a",
                "timestamp" : 1613226489,
                "latitude" : 48.6118111777411,
                "longitude" : 22.303949987836,
                "accuracy" : 5,
                "distance" : 255.257467959952,
                "driverID" : 1574,
                "runID" : "7f01d6d0-69c7-4fee-b30c-d4e7bcb4cd26",
                "roamerRequestID" : "2f9665a0-dce5-4a7a-865d-b4b34f82bc73",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613226491,
                "updatedAt" : 1613226491,
                "__v" : 0
            },
            
            /* 10 */
            {
                "_id" : "d0b6ead8-49b9-4f33-adf7-4dec41f8a993",
                "timestamp" : 1613226499,
                "latitude" : 48.6118111777411,
                "longitude" : 22.303949987836,
                "accuracy" : 5,
                "distance" : 255.257467959952,
                "driverID" : 1574,
                "runID" : "7f01d6d0-69c7-4fee-b30c-d4e7bcb4cd26",
                "roamerRequestID" : "2f9665a0-dce5-4a7a-865d-b4b34f82bc73",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613226519,
                "updatedAt" : 1613226519,
                "__v" : 0
            },
            
            /* 11 */
            {
                "_id" : "8b9a8260-6eab-400a-9aff-f94756bad174",
                "timestamp" : 1613226539,
                "latitude" : 48.6118060793137,
                "longitude" : 22.303959710852,
                "accuracy" : 5,
                "distance" : 254.426668878745,
                "driverID" : 1574,
                "runID" : "7f01d6d0-69c7-4fee-b30c-d4e7bcb4cd26",
                "roamerRequestID" : "2f9665a0-dce5-4a7a-865d-b4b34f82bc73",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : true
                },
                "createdAt" : 1613226549,
                "updatedAt" : 1613226549,
                "__v" : 0
            },
            
            /* 12 */
            {
                "_id" : "160a4d3c-6fd0-483a-85b7-6e8e60f39570",
                "timestamp" : 1613226549,
                "latitude" : 48.6118060793137,
                "longitude" : 22.303959710852,
                "accuracy" : 5,
                "distance" : 254.426668878745,
                "driverID" : 1574,
                "runID" : "7f01d6d0-69c7-4fee-b30c-d4e7bcb4cd26",
                "roamerRequestID" : "2f9665a0-dce5-4a7a-865d-b4b34f82bc73",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613226549,
                "updatedAt" : 1613226549,
                "__v" : 0
            },
            
            /* 13 */
            {
                "_id" : "97045fc9-47e3-4e8d-8107-2e53fdd1ae63",
                "timestamp" : 1613226569,
                "latitude" : 48.6118043059591,
                "longitude" : 22.303961387251,
                "accuracy" : 5,
                "distance" : 254.194849804952,
                "driverID" : 1574,
                "runID" : "7f01d6d0-69c7-4fee-b30c-d4e7bcb4cd26",
                "roamerRequestID" : "2f9665a0-dce5-4a7a-865d-b4b34f82bc73",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613226579,
                "updatedAt" : 1613226579,
                "__v" : 0
            },
            
            /* 14 */
            {
                "_id" : "5c6b358c-5672-47e0-b5ac-f4075b48ed9e",
                "timestamp" : 1613226579,
                "latitude" : 48.6118043059591,
                "longitude" : 22.303961387251,
                "accuracy" : 5,
                "distance" : 254.194849804952,
                "driverID" : 1574,
                "runID" : "7f01d6d0-69c7-4fee-b30c-d4e7bcb4cd26",
                "roamerRequestID" : "2f9665a0-dce5-4a7a-865d-b4b34f82bc73",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613226579,
                "updatedAt" : 1613226579,
                "__v" : 0
            },
            
            /* 15 */
            {
                "_id" : "93071119-1df0-456e-b42f-fe73e2dcb8f7",
                "timestamp" : 1613226599,
                "latitude" : 48.6118005375719,
                "longitude" : 22.303968763348,
                "accuracy" : 5,
                "distance" : 253.574848800152,
                "driverID" : 1574,
                "runID" : "7f01d6d0-69c7-4fee-b30c-d4e7bcb4cd26",
                "roamerRequestID" : "2f9665a0-dce5-4a7a-865d-b4b34f82bc73",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613226609,
                "updatedAt" : 1613226609,
                "__v" : 0
            },
            
            /* 16 */
            {
                "_id" : "bc05615f-9721-4c2e-a01a-32d00b34d98c",
                "timestamp" : 1613226609,
                "latitude" : 48.6118005375719,
                "longitude" : 22.303968763348,
                "accuracy" : 5,
                "distance" : 253.574848800152,
                "driverID" : 1574,
                "runID" : "7f01d6d0-69c7-4fee-b30c-d4e7bcb4cd26",
                "roamerRequestID" : "2f9665a0-dce5-4a7a-865d-b4b34f82bc73",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613226609,
                "updatedAt" : 1613226609,
                "__v" : 0
            }
        ],
        multiRun: [/* 1 */
            {
                "_id" : "114d78e1-be91-4a06-94d3-440abb3f089d",
                "timestamp" : 1613418112,
                "latitude" : 48.6097755621491,
                "longitude" : 22.305622622431,
                "accuracy" : 5,
                "distance" : 7.25994481675426,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : true
                },
                "createdAt" : 1613418133,
                "updatedAt" : 1613418133,
                "__v" : 0
            },
            
            /* 2 */
            {
                "_id" : "ae0a5729-cea4-45cd-a5fe-3021e57835c6",
                "timestamp" : 1613418162,
                "latitude" : 48.6097773180419,
                "longitude" : 22.305622622412,
                "accuracy" : 5,
                "distance" : 7.28782450991034,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : true
                },
                "createdAt" : 1613418163,
                "updatedAt" : 1613418163,
                "__v" : 0
            },
            
            /* 3 */
            {
                "_id" : "7e6ea596-b334-4d66-8c24-db0eed4f0651",
                "timestamp" : 1613418172,
                "latitude" : 48.6097764401186,
                "longitude" : 22.305633908854,
                "accuracy" : 5,
                "distance" : 8.09784981805052,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613418193,
                "updatedAt" : 1613418193,
                "__v" : 0
            },
            
            /* 4 */
            {
                "_id" : "3e0e5051-10e8-4960-881a-143449f307ba",
                "timestamp" : 1613418182,
                "latitude" : 48.6097764401186,
                "longitude" : 22.305633908854,
                "accuracy" : 5,
                "distance" : 8.09784981805052,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613418193,
                "updatedAt" : 1613418193,
                "__v" : 0
            },
            
            /* 5 */
            {
                "_id" : "44f8a5e2-88f8-454c-b6cd-dad84c1b7b8b",
                "timestamp" : 1613418242,
                "latitude" : 48.6097751231995,
                "longitude" : 22.305629261439,
                "accuracy" : 5,
                "distance" : 7.73985842961922,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : true
                },
                "createdAt" : 1613418253,
                "updatedAt" : 1613418253,
                "__v" : 0
            },
            
            /* 6 */
            {
                "_id" : "98209f3f-4a1e-485d-a6b9-ae4c1757095c",
                "timestamp" : 1613418252,
                "latitude" : 48.6097808297594,
                "longitude" : 22.305621294473,
                "accuracy" : 5,
                "distance" : 7.26306365566527,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613418253,
                "updatedAt" : 1613418253,
                "__v" : 0
            },
            
            /* 7 */
            {
                "_id" : "dfe514c6-3f4b-4be1-9bbf-612104852ab0",
                "timestamp" : 1613418262,
                "latitude" : 48.6097808297594,
                "longitude" : 22.305621294473,
                "accuracy" : 5,
                "distance" : 7.26306365566527,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613418283,
                "updatedAt" : 1613418283,
                "__v" : 0
            },
            
            /* 8 */
            {
                "_id" : "e419dc39-4617-4aca-b7cd-c5c4bda37b81",
                "timestamp" : 1613418302,
                "latitude" : 48.6097760011058,
                "longitude" : 22.305611999747,
                "accuracy" : 5,
                "distance" : 6.49129223977412,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : true
                },
                "createdAt" : 1613418313,
                "updatedAt" : 1613418313,
                "__v" : 0
            },
            
            /* 9 */
            {
                "_id" : "5be31f5a-8446-41c6-8858-800886262005",
                "timestamp" : 1613418312,
                "latitude" : 48.6097760011058,
                "longitude" : 22.305611999747,
                "accuracy" : 5,
                "distance" : 6.49129223977412,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613418313,
                "updatedAt" : 1613418313,
                "__v" : 0
            },
            
            /* 10 */
            {
                "_id" : "8a5dbfba-89ad-4bb4-a693-9b727c0be8ac",
                "timestamp" : 1613418382,
                "latitude" : 48.6097751231873,
                "longitude" : 22.305621294527,
                "accuracy" : 5,
                "distance" : 7.15661294394076,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : true
                },
                "createdAt" : 1613418404,
                "updatedAt" : 1613418404,
                "__v" : 0
            },
            
            /* 11 */
            {
                "_id" : "11285608-dc89-4490-ada2-cfb5d3bcfa0a",
                "timestamp" : 1613418392,
                "latitude" : 48.6097751231873,
                "longitude" : 22.305621294527,
                "accuracy" : 5,
                "distance" : 7.15661294394076,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613418404,
                "updatedAt" : 1613418404,
                "__v" : 0
            },
            
            /* 12 */
            {
                "_id" : "3e19537f-c55e-4488-9bae-9efd653a2cf4",
                "timestamp" : 1613418433,
                "latitude" : 48.6097843415087,
                "longitude" : 22.305615983201,
                "accuracy" : 5,
                "distance" : 6.97770335311973,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : true
                },
                "createdAt" : 1613418433,
                "updatedAt" : 1613418433,
                "__v" : 0
            },
            
            /* 13 */
            {
                "_id" : "3f9671cc-617f-46df-b0c1-6bcc0ee3514e",
                "timestamp" : 1613418442,
                "latitude" : 48.6097843415087,
                "longitude" : 22.305615983201,
                "accuracy" : 5,
                "distance" : 6.97770335311973,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613418463,
                "updatedAt" : 1613418463,
                "__v" : 0
            },
            
            /* 14 */
            {
                "_id" : "4782c982-591f-45d0-824d-cf42a2e6ab5a",
                "timestamp" : 1613418502,
                "latitude" : 48.6097773180361,
                "longitude" : 22.305618638799,
                "accuracy" : 5,
                "distance" : 6.99781408996757,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : true
                },
                "createdAt" : 1613418523,
                "updatedAt" : 1613418523,
                "__v" : 0
            },
            
            /* 15 */
            {
                "_id" : "2e8cdd07-6069-40f6-bb8c-ee8c4bb72074",
                "timestamp" : 1613418512,
                "latitude" : 48.6097698555535,
                "longitude" : 22.305608016223,
                "accuracy" : 5,
                "distance" : 6.12930035726964,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613418523,
                "updatedAt" : 1613418523,
                "__v" : 0
            },
            
            /* 16 */
            {
                "_id" : "37d1edd3-0e88-49fa-af7c-60c8936c5066",
                "timestamp" : 1613418522,
                "latitude" : 48.6097746841699,
                "longitude" : 22.305619302688,
                "accuracy" : 5,
                "distance" : 7.00485869073521,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613418523,
                "updatedAt" : 1613418523,
                "__v" : 0
            },
            
            /* 17 */
            {
                "_id" : "0b5c321e-7f15-4d98-9684-09a9a68af1f2",
                "timestamp" : 1613418533,
                "latitude" : 48.6097746841699,
                "longitude" : 22.305619302688,
                "accuracy" : 5,
                "distance" : 7.00485869073521,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613418553,
                "updatedAt" : 1613418553,
                "__v" : 0
            },
            
            /* 18 */
            {
                "_id" : "4dbddefa-51bb-45b1-9a2f-b428b5090bd4",
                "timestamp" : 1613418702,
                "latitude" : 48.6097781959334,
                "longitude" : 22.305639220049,
                "accuracy" : 5,
                "distance" : 8.51251483523732,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : true
                },
                "createdAt" : 1613418704,
                "updatedAt" : 1613418704,
                "__v" : 0
            },
            
            /* 19 */
            {
                "_id" : "17b9d0ac-cd92-479b-bf32-dd2e763179c8",
                "timestamp" : 1613418712,
                "latitude" : 48.6097856583886,
                "longitude" : 22.305619302711,
                "accuracy" : 5,
                "distance" : 7.25367362713899,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613418733,
                "updatedAt" : 1613418733,
                "__v" : 0
            },
            
            /* 20 */
            {
                "_id" : "4c2f133d-3d99-4336-a162-2352151db4b9",
                "timestamp" : 1613418722,
                "latitude" : 48.6097856583886,
                "longitude" : 22.305619302711,
                "accuracy" : 5,
                "distance" : 7.25367362713899,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613418733,
                "updatedAt" : 1613418733,
                "__v" : 0
            },
            
            /* 21 */
            {
                "_id" : "15a6ebb2-7742-40ee-9a44-dc31cdf375db",
                "timestamp" : 1613418802,
                "latitude" : 48.6097742452054,
                "longitude" : 22.305600713212,
                "accuracy" : 5,
                "distance" : 5.63936606018465,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : true
                },
                "createdAt" : 1613418823,
                "updatedAt" : 1613418823,
                "__v" : 0
            },
            
            /* 22 */
            {
                "_id" : "1b055379-a7eb-4dce-8f29-4d1133f65f75",
                "timestamp" : 1613418812,
                "latitude" : 48.6097803907798,
                "longitude" : 22.305634572797,
                "accuracy" : 5,
                "distance" : 8.21398504720988,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613418823,
                "updatedAt" : 1613418823,
                "__v" : 0
            },
            
            /* 23 */
            {
                "_id" : "c0e87127-e3d9-4a87-ade9-1741fcd5894b",
                "timestamp" : 1613418822,
                "latitude" : 48.6097803907798,
                "longitude" : 22.305634572797,
                "accuracy" : 5,
                "distance" : 8.21398504720988,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613418823,
                "updatedAt" : 1613418823,
                "__v" : 0
            },
            
            /* 24 */
            {
                "_id" : "e7f70455-7009-4675-a665-afcac63322db",
                "timestamp" : 1613418852,
                "latitude" : 48.6097755621004,
                "longitude" : 22.305606688452,
                "accuracy" : 5,
                "distance" : 6.09678292062244,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : true
                },
                "createdAt" : 1613418853,
                "updatedAt" : 1613418853,
                "__v" : 0
            },
            
            /* 25 */
            {
                "_id" : "1ad0ae47-52db-4afc-aa28-120422c4126f",
                "timestamp" : 1613418862,
                "latitude" : 48.6097654658242,
                "longitude" : 22.305599385408,
                "accuracy" : 5,
                "distance" : 5.4882070825734,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613418883,
                "updatedAt" : 1613418883,
                "__v" : 0
            },
            
            /* 26 */
            {
                "_id" : "1370f37b-b89c-4543-bb42-f8a2eeac92da",
                "timestamp" : 1613418872,
                "latitude" : 48.6097654658242,
                "longitude" : 22.305599385408,
                "accuracy" : 5,
                "distance" : 5.4882070825734,
                "driverID" : 1574,
                "runID" : "b37054d2-9712-4ec1-9661-9854d9a41051",
                "roamerRequestID" : "1b939f2d-8d9d-4b5b-b1c0-152758af5377",
                "shiftID" : "",
                "state" : "atStore",
                "metaData" : {
                    "trackingTimeInterval" : 10,
                    "afterPause" : false
                },
                "createdAt" : 1613418883,
                "updatedAt" : 1613418883,
                "__v" : 0
            }
        ]
    }
};

module.exports = new samples();