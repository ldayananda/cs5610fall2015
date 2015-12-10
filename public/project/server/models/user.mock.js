module.exports = [
	{
		"_id" : ObjectId("56697f9261de95d60a2ac117"),
		"role" : "applicant",
		"firstName": "Frodo",
		"lastName": "Baggins",
		"username" : "baggy",
		"password" : "bagger",
		"location" : {
			"city" : "Boston", 
			"state" : "MA",
			"country" : "USA"
		},
		"profilePic" : "https://blahblah",
		"industry" : "Furniture",
		"bio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"skills" : [
		{"value" : "wood cutting"},
		{"value" : "sanding"},
		{"value" :"retail"}
		],
		"interests" : [
		{"value" :"wood"},
		{"value": "glass"},
		{"value" : "martial arts"}
		],
		"age" : "20-30", 
		"linkedin": {
			"url": "https://www.linkedin.com/profile/view?id=…"
		},
		"jobs" : [
		{
			"_id" : ObjectId("56697f9d61de95d60a2ac118"),
			"title" : "Head carpenter",
			"company" : "Furnish and Furnish",
			"endDate" : "-",
			"location" : "Boston",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
		],
		"education" : [
		{
			"_id" : ObjectId("56697fa361de95d60a2ac119"),
			"name" : "Herbert High",
			"degree" : "High school diploma",
			"location" : "Medford",
			"yearOfGraduation" : "2010",
			"description" :  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
		]
	},
	{
		"_id" : ObjectId("566972e03de8f2120ae7384b"),
		"role" : "applicant",
		"firstName": "Pharell",
		"lastName": "Williams",
		"username" : "will",
		"password" : "iam",
		"location" : {
			"city" : "Los Angeles", 
			"state" : "CA",
			"country" : "USA"
		},
		"profilePic" : "https://blahblah",
		"industry" : "Music",
		"bio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"skills" : [
			{"value" : "music production"},
			{"value" : "fashion design"}
		],
		"interests" : [
			{"value" :"polo shirts"}
		],
		"age" : "40-50", 
		"linkedin": {
			"url": "https://www.linkedin.com/profile/view?id=…"
		},
		"jobs" : [
			{
				"_id" : ObjectId("566972ec3de8f2120ae7384c"),
				"title" : "Uniqlo UX Head Designer",
				"endDate" : "-",
				"company" : "Uniqlo",
				"location" : "New York",
				"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Citation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			}
		],
		"education" : [
			{
				"_id" : ObjectId("566972ee3de8f2120ae7384d"),
				"name" : "Parsons",
				"degree" : "diploma",
				"endDate" : "June 2015",
				"location" : "new york",
				"yearOfGraduation" : "2000",
				"description" :  "Lorem ipsum dole et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			}
		]	
	}
];