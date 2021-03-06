define({ api: [
  {
    "type": "post",
    "url": "/api/notify/join/",
    "title": "Join the newsletter",
    "name": "JoinNewsletter",
    "group": "Newsletter",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "field": "email",
            "optional": false,
            "description": "<p>The email to join.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400 Bad Request": [
          {
            "group": "400",
            "field": "email",
            "optional": false,
            "description": "<p>The specifiend email is null or the format is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 Bad Request\n   {\n     [{\n         \"param\": \"email\",\n         \"msg\": \"Field required\"\n     }, {\n         \"param\": \"email\",\n         \"msg\": \"Invalid email format\"\n     }]\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 500 Internal Server Error\n   {\n     Something went wrong. Please try again.\n   }\n"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 Created\n   {\n     Thanks for signing up!\n   }\n"
        },
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 304 Not Modified\n   {\n     User already subscribed\n   }\n"
        }
      ]
    },
    "filename": "../src/apis/newletterController.js"
  },
  {
    "type": "get",
    "url": "/api/speakers/",
    "title": "Get speakers information",
    "name": "GetSpeakers",
    "group": "Speakers",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "page",
            "optional": false,
            "description": "<p>the number of the page to load</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "limit",
            "optional": false,
            "description": "<p>number of apllication items to load per page</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400 Bad Request": [
          {
            "group": "400",
            "field": "page",
            "optional": false,
            "description": "<p>Page is not a valid number or the value is not between a and 1000.</p>"
          },
          {
            "group": "400",
            "field": "limit",
            "optional": false,
            "description": "<p>Limit is not a valid number or the value is not between a and 1000.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 Bad Request\n   {\n     [{\n         \"param\": \"page\",\n         \"msg\": \"Page is not a valid number\"\n     }, {\n         \"param\": \"limit\",\n         \"msg\": \"Limit is not a valid number\"\n     }, {\n         \"param\": \"page\",\n         \"msg\": \"Page value must be greater than 1 and lesser than 1000.\"\n     }, {\n         \"param\": \"limit\",\n         \"msg\": \"Limit value must be greater than 1 and lesser than 1000.\"\n     }]\n   }\n"
        }
      ]
    },
    "filename": "../src/apis/speakerController.js"
  },
  {
    "type": "get",
    "url": "/api/sponsors/",
    "title": "Get sponsor information",
    "name": "GetSponsors",
    "group": "Sponsors",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "page",
            "optional": false,
            "description": "<p>the number of the page to load</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "limit",
            "optional": false,
            "description": "<p>number of apllication items to load per page</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400 Bad Request": [
          {
            "group": "400",
            "field": "page",
            "optional": false,
            "description": "<p>Page is not a valid number or the value is not between a and 1000.</p>"
          },
          {
            "group": "400",
            "field": "limit",
            "optional": false,
            "description": "<p>Limit is not a valid number or the value is not between a and 1000.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 Bad Request\n   {\n     [{\n         \"param\": \"page\",\n         \"msg\": \"Page is not a valid number\"\n     }, {\n         \"param\": \"limit\",\n         \"msg\": \"Limit is not a valid number\"\n     }, {\n         \"param\": \"page\",\n         \"msg\": \"Page value must be greater than 1 and lesser than 1000.\"\n     }, {\n         \"param\": \"limit\",\n         \"msg\": \"Limit value must be greater than 1 and lesser than 1000.\"\n     }]\n   }\n"
        }
      ]
    },
    "filename": "../src/apis/sponsorController.js"
  }
] });