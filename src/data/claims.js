import { omit } from 'lodash';

// a mock method for probably a websockets implementation
export const updateCard = function (card) {
		claims.claims.map(x=> {
			if (x.createdAt == card.createdAt && x.claimant == card.claimant) {
				return omit(card, 'description');
			}
			return x;
        });
    console.log('Updated Card!', card);
    return claims;
}

export const getUsers = function () {
    return claims.claims.map(x=> x.assignedTo);
}

// var used for mutability, normally wouldn't be used
export var claims = {
    "slas": [
        {
        "status": "received",
        "hours": 48
        },
        {
        "status": "awaiting_action",
        "hours": 72
        },
        {
            "status": "rejected",
            "hours": 0
        },
        {
            "status": "accepted",
            "hours": 0
        }
    ],
    "claims": [
        {
        "id": 1,
        "claimant": "Skylar Dean",
        "assignedTo": "John Smith",
        "status": "received",
        "createdAt": "2020-08-09T00:00:00.000Z",
        "updatedAt": "2020-08-09T00:00:00.000Z"
        },
        {
        "id": 2,
        "claimant": "Amber Green",
        "assignedTo": "John Smith",
        "status": "awaiting_action",
        "createdAt": "2020-08-12T00:00:00.000Z",
        "updatedAt": "2020-08-13T00:00:00.000Z"
        },
        {
        "id": 3,
        "claimant": "Ross James",
        "assignedTo": "John Smith",
        "status": "received",
        "createdAt": "2020-08-05T00:00:00.000Z",
        "updatedAt": "2020-08-05T00:00:00.000Z"
        },
        {
        "id": 4,
        "claimant": "Kim Jones",
        "assignedTo": "John Smith",
        "status": "awaiting_action",
        "createdAt": "2020-08-15T00:00:00.000Z",
        "updatedAt": "2020-08-15T00:00:00.000Z"
        },
        {
        "id": 5,
        "claimant": "Henry Wong",
        "assignedTo": "Michael Pool",
        "status": "received",
        "createdAt": "2020-08-18T00:00:00.000Z",
        "updatedAt": "2020-08-18T00:00:00.000Z"
        },
        {
        "id": 6,
        "claimant": "James Lee",
        "assignedTo": "Michael Pool",
        "status": "awaiting_action",
        "createdAt": "2020-08-10T00:00:00.000Z",
        "updatedAt": "2020-08-13T00:00:00.000Z"
        },
        {
        "id": 7,
        "claimant": "Skylar Dean",
        "assignedTo": "John Smith",
        "status": "received",
        "createdAt": "2020-08-01T00:00:00.000Z",
        "updatedAt": "2020-08-03T00:00:00.000Z"
        },
        {
        "id": 8,
        "claimant": "Amber Green",
        "assignedTo": "Michael Pool",
        "status": "rejected",
        "createdAt": "2020-08-02T00:00:00.000Z",
        "updatedAt": "2020-08-02T00:00:00.000Z"
        },
    ]
}