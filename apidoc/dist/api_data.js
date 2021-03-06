define({ "api": [sample
  {
    "type": "get",
    "url": "/info",
    "title": "Get Server Health Info",
    "name": "isAlive",
    "group": "Common",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>This method allows to get server health information</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://www.example.com/info",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success Response": [
          {
            "group": "Success Response",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Response meta information:</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>Response meta message</p>"
          },
          {
            "group": "Success Response",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response payload data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n     {\n         \"meta\": {\n             \"message\": \"Success\"\n         },\n         \"payload\": {\n             \"running\": true,\n             \"name\":    \"driver-tracking\"\n        }\n     }",
          "type": "json"
        }
      ]
    },
    "filename": "src/features/common.apidoc.js",
    "groupTitle": "Common",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/info"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/tracking-public/order/:orderId",
    "title": "Create tracking",
    "name": "createTracking",
    "group": "Driver_Tracking",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>This method allows to create tracking item</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>(params) Order ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST \\\nhttp://localhost:3001/v1/tracking-public/order/878bb4ee-2e0d-4f70-9e8c-efd396489c0f \\\n-H 'Content-Type: application/json'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success Response": [
          {
            "group": "Success Response",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Response meta information:</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>Response meta message</p>"
          },
          {
            "group": "Success Response",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response payload:</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "payload._id",
            "description": "<p>Tracking ID</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "payload.token",
            "description": "<p>Tracking access token</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "payload.orderId",
            "description": "<p>Tracked order ID</p>"
          },
          {
            "group": "Success Response",
            "type": "Date",
            "optional": false,
            "field": "payload.createdAt",
            "description": "<p>Date of creation of the tracking</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "payload.longUrl",
            "description": "<p>Original url of the tracking tool</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "payload.shortUrl",
            "description": "<p>Short url of the tracking tool</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n {\n    \"meta\": {\n        \"message\": \"Success\"\n    },\n    \"payload\": {\n        \"_id\": \"5bedc2c77d28f684e9b101ca\",\n        \"token\": \"c707e84a-cd7f-4a19-8ec9-e5f5348a47d9\",\n        \"orderId\": \"878bb4ee-2e0d-4f70-9e8c-efd396489c0f\",\n        \"createdAt\": \"2018-11-15T19:02:31.349Z\",\n        \"longUrl\": \"http://localhost:4000/#/tracking-public/5bedc2c77d28f684e9b101ca/info\",\n        \"shortUrl\": \"https://goo.gl/9V9Mut\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx, 500": [
          {
            "group": "Errors 4xx, 500",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Response meta information:</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "Number",
            "optional": false,
            "field": "meta.statusCode",
            "description": "<p>Error status code</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "String",
            "optional": false,
            "field": "meta.requestId",
            "description": "<p>Request id</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response payload information:</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "String",
            "optional": false,
            "field": "payload.name",
            "description": "<p>Error name</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "String",
            "optional": false,
            "field": "payload.message",
            "description": "<p>Error message</p>"
          }
        ],
        "Validation Error (422)": [
          {
            "group": "Validation Error (422)",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Response meta information:</p>"
          },
          {
            "group": "Validation Error (422)",
            "type": "Number",
            "optional": false,
            "field": "meta.statusCode",
            "description": "<p>Error status code</p>"
          },
          {
            "group": "Validation Error (422)",
            "type": "String",
            "optional": false,
            "field": "meta.requestId",
            "description": "<p>Request id</p>"
          },
          {
            "group": "Validation Error (422)",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response payload information:</p>"
          },
          {
            "group": "Validation Error (422)",
            "type": "String",
            "optional": false,
            "field": "payload.name",
            "description": "<p>Error name</p>"
          },
          {
            "group": "Validation Error (422)",
            "type": "String",
            "optional": false,
            "field": "payload.message",
            "description": "<p>Error message</p>"
          },
          {
            "group": "Validation Error (422)",
            "type": "Array",
            "optional": false,
            "field": "payload.details",
            "description": "<p>Error message</p>"
          },
          {
            "group": "Validation Error (422)",
            "type": "String",
            "optional": false,
            "field": "payload.details.message",
            "description": "<p>Detailed error message for the field</p>"
          },
          {
            "group": "Validation Error (422)",
            "type": "Array",
            "optional": false,
            "field": "payload.details.path",
            "description": "<p>Error paths</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (Validation Error 422):",
          "content": "HTTP/1.1 422 Unprocessable Entity\n     {\n        \"meta\": {\n            \"statusCode\": 422,\n            \"requestId\": \"505ea40b-d1dd-4412-ba8a-ae288805d6c6\"\n        },\n        \"error\": {\n            \"name\": \"Unprocessable Entity\",\n            \"message\": \"\\\"orderId\\\" is required\",\n            \"details\": [\n                {\n                    \"path\": [\n                        \"orderId\"\n                    ],\n                    \"message\": \"\\\"orderId\\\" is required\"\n                }\n            ]\n        }\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response (Internal Server Error 500):",
          "content": "HTTP/1.1 500 Internal Server Error\n  {\n      \"meta\": {\n          \"statusCode\": 500,\n          \"requestId\": \"c2af0dbf-9d43-4606-9793-8151ecd15f17\"\n      },\n      \"error\": {\n          \"name\": \"Internal Server Error\",\n          \"message\": \"Internal Server Error\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/features/tracking/router/apidoc.js",
    "groupTitle": "Driver_Tracking",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/v1/tracking-public/order/:orderId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/drivers/:id/avatar",
    "title": "Get driver avatar",
    "name": "getDriverAvatar",
    "group": "Driver",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>This method allows to retrieve driver avatar image</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Driver ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET \\\nhttp://localhost:3001/v1/drivers/1525/logo \\\n-H 'Authorization: c707e84a-cd7f-4a19-8ec9-e5f5348a47d9'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n      // image",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx, 500": [
          {
            "group": "Errors 4xx, 500",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Response meta information:</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "Number",
            "optional": false,
            "field": "meta.statusCode",
            "description": "<p>Error status code</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "String",
            "optional": false,
            "field": "meta.requestId",
            "description": "<p>Request id</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response payload information:</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "String",
            "optional": false,
            "field": "payload.name",
            "description": "<p>Error name</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "String",
            "optional": false,
            "field": "payload.message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (Unauthorized 401):",
          "content": "HTTP/1.1 401 Unauthorized\n   {\n      \"meta\": {\n          \"statusCode\": 401,\n          \"requestId\": \"f2a1f25c-b503-4020-92ae-e79cbeedf825\"\n      },\n      \"error\": {\n          \"name\": \"Unauthorized\",\n          \"message\": \"Unauthorized\"\n      }\n  }",
          "type": "json"
        },
        {
          "title": "Error-Response (Internal Server Error 500):",
          "content": "HTTP/1.1 500 Internal Server Error\n  {\n      \"meta\": {\n          \"statusCode\": 500,\n          \"requestId\": \"c2af0dbf-9d43-4606-9793-8151ecd15f17\"\n      },\n      \"error\": {\n          \"name\": \"Internal Server Error\",\n          \"message\": \"Internal Server Error\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/features/driver/router/apidoc.js",
    "groupTitle": "Driver",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/v1/drivers/:id/avatar"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/drivers/:id",
    "title": "Get driver information",
    "name": "getDriverInfo",
    "group": "Driver",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>This method allows to retrieve driver info</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Driver ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET \\\nhttp://localhost:3001/v1/drivers/1525 \\\n-H 'Authorization: c707e84a-cd7f-4a19-8ec9-e5f5348a47d9'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success Response": [
          {
            "group": "Success Response",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Response meta information:</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>Response meta message</p>"
          },
          {
            "group": "Success Response",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response payload:</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "payload.id",
            "description": "<p>Driver id</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "payload.firstName",
            "description": "<p>Driver firstName</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "payload.lastName",
            "description": "<p>Driver lastName</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "payload.phone",
            "description": "<p>Driver phone</p>"
          },
          {
            "group": "Success Response",
            "type": "Number",
            "optional": false,
            "field": "payload.sample",
            "description": "<p>Driver sample</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n        {\n           \"meta\": {\n               \"message\": \"Success\"\n           },\n           \"payload\": {\n               \"id\": 1525,\n               \"firstName\": \"Chuck\",\n               \"lastName\": \"Norris\",\n               \"phone\": \"+380993674000\",\n               \"sample\": 5\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx, 500": [
          {
            "group": "Errors 4xx, 500",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Response meta information:</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "Number",
            "optional": false,
            "field": "meta.statusCode",
            "description": "<p>Error status code</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "String",
            "optional": false,
            "field": "meta.requestId",
            "description": "<p>Request id</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response payload information:</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "String",
            "optional": false,
            "field": "payload.name",
            "description": "<p>Error name</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "String",
            "optional": false,
            "field": "payload.message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (Unauthorized 401):",
          "content": "HTTP/1.1 401 Unauthorized\n   {\n      \"meta\": {\n          \"statusCode\": 401,\n          \"requestId\": \"f2a1f25c-b503-4020-92ae-e79cbeedf825\"\n      },\n      \"error\": {\n          \"name\": \"Unauthorized\",\n          \"message\": \"Unauthorized\"\n      }\n  }",
          "type": "json"
        },
        {
          "title": "Error-Response (Internal Server Error 500):",
          "content": "HTTP/1.1 500 Internal Server Error\n  {\n      \"meta\": {\n          \"statusCode\": 500,\n          \"requestId\": \"c2af0dbf-9d43-4606-9793-8151ecd15f17\"\n      },\n      \"error\": {\n          \"name\": \"Internal Server Error\",\n          \"message\": \"Internal Server Error\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/features/driver/router/apidoc.js",
    "groupTitle": "Driver",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/v1/drivers/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/ete/driver",
    "title": "Calculate ETA",
    "name": "getETA",
    "group": "ETA",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>This method allows to retrieve eta info</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Driver ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET \\\n'http://localhost:3001/v1/eta/driver?orderId=158 \\\n-H 'Authorization: c707e84a-cd7f-4a19-8ec9-e5f5348a47d9'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success Response": [
          {
            "group": "Success Response",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Response meta information:</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>Response meta message</p>"
          },
          {
            "group": "Success Response",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response payload:</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "payload.time",
            "description": "<p>Eta time in seconds</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n        {\n           \"meta\": {\n               \"message\": \"Success\"\n           },\n           \"payload\": {\n               \"time\": 200\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx, 500": [
          {
            "group": "Errors 4xx, 500",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Response meta information:</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "Number",
            "optional": false,
            "field": "meta.statusCode",
            "description": "<p>Error status code</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "String",
            "optional": false,
            "field": "meta.requestId",
            "description": "<p>Request id</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response payload information:</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "String",
            "optional": false,
            "field": "payload.name",
            "description": "<p>Error name</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "String",
            "optional": false,
            "field": "payload.message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (Unauthorized 401):",
          "content": "HTTP/1.1 401 Unauthorized\n   {\n      \"meta\": {\n          \"statusCode\": 401,\n          \"requestId\": \"f2a1f25c-b503-4020-92ae-e79cbeedf825\"\n      },\n      \"error\": {\n          \"name\": \"Unauthorized\",\n          \"message\": \"Unauthorized\"\n      }\n  }",
          "type": "json"
        },
        {
          "title": "Error-Response (Internal Server Error 500):",
          "content": "HTTP/1.1 500 Internal Server Error\n  {\n      \"meta\": {\n          \"statusCode\": 500,\n          \"requestId\": \"c2af0dbf-9d43-4606-9793-8151ecd15f17\"\n      },\n      \"error\": {\n          \"name\": \"Internal Server Error\",\n          \"message\": \"Internal Server Error\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/features/eta/router/apidoc.js",
    "groupTitle": "ETA",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/v1/ete/driver"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/orders/:id",
    "title": "Get order information",
    "name": "getOrderInfo",
    "group": "Order",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>This method allows to retrieve order info</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Order ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET \\\nhttp://localhost:3001/v1/orders/1525 \\\n-H 'Authorization: c707e84a-cd7f-4a19-8ec9-e5f5348a47d9'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success Response": [
          {
            "group": "Success Response",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Response meta information:</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>Response meta message</p>"
          },
          {
            "group": "Success Response",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response payload:</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "payload._id",
            "description": "<p>Order _id</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "payload.store",
            "description": "<p>Store ID</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "payload.pickupStoreName",
            "description": "<p>Store name</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "payload.driver",
            "description": "<p>DriverId ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n        {\n           \"meta\": {\n               \"message\": \"Success\"\n           },\n           \"payload\": {\n               \"_id\": \"abed6995-217d-4e50-9883-0a154ab9baff\",\n               \"orderNumber\": 14385,\n               \"store\": 106,\n               \"orderValue\": null,\n               \"createdBy\": \"store\",\n               \"instructions\": \"\",\n               \"etaFromPickupsample\": 553,\n               \"deliveryEtaBuffer\": 120,\n               \"pickupAtInferred\": true,\n               \"scheduleId\": null,\n               \"releasedAt\": 1542037416,\n               \"__v\": 11,\n               \"initialEta\": 1118,\n               \"distance\": 1337,\n               \"etaFromPreviousOrder\": 1124,\n               \"startedAt\": 1542038099,\n               \"samples\": [],\n               \"automaticArrivedAt\": 100,\n               \"manualArrivedAt\": 500,\n               \"paymentEdited\": false,\n               \"payment\": {\n                   \"totalFee\": 0,\n                   \"YelloFee\": 0,\n                   \"driverFee\": 0\n               },\n               \"pickupAt\": 1542036862,\n               \"transportType\": \"walking\",\n               \"createdByData\": {\n                   \"userId\": \"574\"\n               },\n               \"deleted\": false,\n               \"updatedAt\": 1542037452,\n               \"createdAt\": 1542037416,\n               \"description\": \"\",\n               \"pickupStoreName\": \"Small Mushrooms - Now with extra Room!\",\n               \"cancelledArray\": [],\n               \"completedPolylineCoordinates\": [],\n               \"deliveryAddress\": {\n                   \"longitude\": 22.29571199999998,\n                   \"latitude\": 48.61193400000001,\n                   \"addressText\": \"Svobody Avenue, 55, Uzhhorod, Zakarpattia Oblast, Ukraine\"\n               },\n               \"pickupAddress\": {\n                   \"longitude\": 22.298519,\n                   \"latitude\": 48.6209522,\n                   \"addressText\": \"Pravoslavna embankment, 3, Uzhhorod, Zakarpats'ka oblast, Ukraine, 88000\"\n               },\n               \"customer\": {\n                   \"email\": null,\n                   \"phone\": \"0344555555\",\n                   \"name\": \"\",\n                   \"id\": \"901d4398-7c2f-44ec-b380-481d1de6c858\"\n               },\n               \"orderReference\": \"\",\n               \"deliverAt\": 1542037415,\n               \"paymentMethod\": \"credit\",\n               \"state\": \"delivering\",\n               \"runId\": \"75a9674e-aec2-4378-b6ca-26f79210eb42\",\n               \"driver\": 1585\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx, 500": [
          {
            "group": "Errors 4xx, 500",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Response meta information:</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "Number",
            "optional": false,
            "field": "meta.statusCode",
            "description": "<p>Error status code</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "String",
            "optional": false,
            "field": "meta.requestId",
            "description": "<p>Request id</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response payload information:</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "String",
            "optional": false,
            "field": "payload.name",
            "description": "<p>Error name</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "String",
            "optional": false,
            "field": "payload.message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (Unauthorized 401):",
          "content": "HTTP/1.1 401 Unauthorized\n   {\n      \"meta\": {\n          \"statusCode\": 401,\n          \"requestId\": \"f2a1f25c-b503-4020-92ae-e79cbeedf825\"\n      },\n      \"error\": {\n          \"name\": \"Unauthorized\",\n          \"message\": \"Unauthorized\"\n      }\n  }",
          "type": "json"
        },
        {
          "title": "Error-Response (Internal Server Error 500):",
          "content": "HTTP/1.1 500 Internal Server Error\n  {\n      \"meta\": {\n          \"statusCode\": 500,\n          \"requestId\": \"c2af0dbf-9d43-4606-9793-8151ecd15f17\"\n      },\n      \"error\": {\n          \"name\": \"Internal Server Error\",\n          \"message\": \"Internal Server Error\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/features/order/router/apidoc.js",
    "groupTitle": "Order",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/v1/orders/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/stores/:id",
    "title": "Get store information",
    "name": "getStoreInfo",
    "group": "Store",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>This method allows to retrieve store info</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Store ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET \\\nhttp://localhost:3001/v1/stores/266 \\\n-H 'Authorization: c707e84a-cd7f-4a19-8ec9-e5f5348a47d9'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success Response": [
          {
            "group": "Success Response",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Response meta information:</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>Response meta message</p>"
          },
          {
            "group": "Success Response",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response payload:</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "payload.id",
            "description": "<p>Restaurant id</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "payload.title",
            "description": "<p>Restaurant title</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "payload.address",
            "description": "<p>Restaurant address</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "payload.phone",
            "description": "<p>Restaurant phone</p>"
          },
          {
            "group": "Success Response",
            "type": "Number",
            "optional": false,
            "field": "payload.latitude",
            "description": "<p>Restaurant latitude coordinate</p>"
          },
          {
            "group": "Success Response",
            "type": "String",
            "optional": false,
            "field": "payload.createdAt",
            "description": "<p>Date of creation of the store</p>"
          },
          {
            "group": "Success Response",
            "type": "Object",
            "optional": false,
            "field": "payload._links",
            "description": "<p>Additional links</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n       {\n          \"meta\": {\n              \"message\": \"Success\"\n          },\n          \"payload\": {\n              \"id\": 266,\n              \"title\": \"Test Store\",\n              \"address\": \"100 Harris St, Pyrmont NSW 2009, Australia\",\n              \"phone\": \"fdas\",\n              \"latitude\": -33.868403,\n              \"longitude\": 151.1937386,\n              \"createdAt\": 1499133938,\n              \"_links\": {\n                  \"self\": {\n                      \"href\": \"http://qa-store.yello.delivery/web-platform/store/{id}?id=266\"\n                  }\n              }\n          }\n      }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx, 500": [
          {
            "group": "Errors 4xx, 500",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Response meta information:</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "Number",
            "optional": false,
            "field": "meta.statusCode",
            "description": "<p>Error status code</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "String",
            "optional": false,
            "field": "meta.requestId",
            "description": "<p>Request id</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response payload information:</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "String",
            "optional": false,
            "field": "payload.name",
            "description": "<p>Error name</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "String",
            "optional": false,
            "field": "payload.message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (Unauthorized 401):",
          "content": "HTTP/1.1 401 Unauthorized\n   {\n      \"meta\": {\n          \"statusCode\": 401,\n          \"requestId\": \"f2a1f25c-b503-4020-92ae-e79cbeedf825\"\n      },\n      \"error\": {\n          \"name\": \"Unauthorized\",\n          \"message\": \"Unauthorized\"\n      }\n  }",
          "type": "json"
        },
        {
          "title": "Error-Response (Internal Server Error 500):",
          "content": "HTTP/1.1 500 Internal Server Error\n  {\n      \"meta\": {\n          \"statusCode\": 500,\n          \"requestId\": \"c2af0dbf-9d43-4606-9793-8151ecd15f17\"\n      },\n      \"error\": {\n          \"name\": \"Internal Server Error\",\n          \"message\": \"Internal Server Error\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/features/store/router/apidoc.js",
    "groupTitle": "Store",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/v1/stores/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/stores/:id/logo",
    "title": "Get store logo",
    "name": "getStoreLogo",
    "group": "Store",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>This method allows to retrieve store logo image</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Store ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET \\\nhttp://localhost:3001/v1/stores/266/logo \\\n-H 'Authorization: c707e84a-cd7f-4a19-8ec9-e5f5348a47d9'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n      // image",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Errors 4xx, 500": [
          {
            "group": "Errors 4xx, 500",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Response meta information:</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "Number",
            "optional": false,
            "field": "meta.statusCode",
            "description": "<p>Error status code</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "String",
            "optional": false,
            "field": "meta.requestId",
            "description": "<p>Request id</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response payload information:</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "String",
            "optional": false,
            "field": "payload.name",
            "description": "<p>Error name</p>"
          },
          {
            "group": "Errors 4xx, 500",
            "type": "String",
            "optional": false,
            "field": "payload.message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (Unauthorized 401):",
          "content": "HTTP/1.1 401 Unauthorized\n   {\n      \"meta\": {\n          \"statusCode\": 401,\n          \"requestId\": \"f2a1f25c-b503-4020-92ae-e79cbeedf825\"\n      },\n      \"error\": {\n          \"name\": \"Unauthorized\",\n          \"message\": \"Unauthorized\"\n      }\n  }",
          "type": "json"
        },
        {
          "title": "Error-Response (Internal Server Error 500):",
          "content": "HTTP/1.1 500 Internal Server Error\n  {\n      \"meta\": {\n          \"statusCode\": 500,\n          \"requestId\": \"c2af0dbf-9d43-4606-9793-8151ecd15f17\"\n      },\n      \"error\": {\n          \"name\": \"Internal Server Error\",\n          \"message\": \"Internal Server Error\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/features/store/router/apidoc.js",
    "groupTitle": "Store",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/v1/stores/:id/logo"
      }
    ]
  }
] });
