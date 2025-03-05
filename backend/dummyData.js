const Bus = require("./src/models/busSchema");
const Tour = require("./src/models/tourSchema");
const City = require("./src/models/CitySchema");

const citiesDummy = [
  {
    cityId: 1,
    city: "Mumbai",
    state: "Maharashtra",
    stateCode: "MH",
    pincode: "400001",
    stops: [
      {
        stopId: 101,
        directions: "Near Andheri Railway Station",
        name: "Andheri",
        latitude: 19.1197,
        longitude: 72.8468,
      },
      {
        stopId: 102,
        directions: "Near Dadar TT",
        name: "Dadar",
        latitude: 19.0176,
        longitude: 72.8562,
      },
      {
        stopId: 103,
        directions: "Near Bandra Bandstand",
        name: "Bandra",
        latitude: 19.0595,
        longitude: 72.8295,
      },
      {
        stopId: 104,
        directions: "Near Gateway of India",
        name: "Colaba",
        latitude: 18.9067,
        longitude: 72.8147,
      },
      {
        stopId: 105,
        directions: "Near Ghatkopar Metro Station",
        name: "Ghatkopar",
        latitude: 19.076,
        longitude: 72.8826,
      },
    ],
  },
  {
    cityId: 2,
    city: "Bangalore",
    state: "Karnataka",
    stateCode: "KA",
    pincode: "560001",
    stops: [
      {
        stopId: 201,
        directions: "Near Majestic Bus Stand",
        name: "Majestic",
        latitude: 12.9784,
        longitude: 77.5681,
      },
      {
        stopId: 202,
        directions: "Near Madiwala Police Station",
        name: "Madiwala",
        latitude: 12.9172,
        longitude: 77.6229,
      },
      {
        stopId: 203,
        directions: "Near ITPL",
        name: "Whitefield",
        latitude: 12.9698,
        longitude: 77.7499,
      },
      {
        stopId: 204,
        directions: "Near Hebbal Flyover",
        name: "Hebbal",
        latitude: 13.0358,
        longitude: 77.597,
      },
      {
        stopId: 205,
        directions: "Near Forum Mall",
        name: "Koramangala",
        latitude: 12.9279,
        longitude: 77.6271,
      },
    ],
  },
  {
    cityId: 3,
    city: "Chennai",
    state: "Tamil Nadu",
    stateCode: "TN",
    pincode: "600001",
    stops: [
      {
        stopId: 301,
        directions: "Near Koyambedu Bus Stand",
        name: "Koyambedu",
        latitude: 13.0653,
        longitude: 80.2436,
      },
      {
        stopId: 302,
        directions: "Near Guindy National Park",
        name: "Guindy",
        latitude: 13.0067,
        longitude: 80.2206,
      },
      {
        stopId: 303,
        directions: "Near Tambaram Railway Station",
        name: "Tambaram",
        latitude: 12.9202,
        longitude: 80.1322,
      },
      {
        stopId: 304,
        directions: "Near Porur Lake",
        name: "Porur",
        latitude: 13.0352,
        longitude: 80.1588,
      },
      {
        stopId: 305,
        directions: "Near T Nagar Bus Stand",
        name: "T Nagar",
        latitude: 13.0418,
        longitude: 80.2337,
      },
    ],
  },
  {
    cityId: 4,
    city: "Hyderabad",
    state: "Telangana",
    stateCode: "TS",
    pincode: "500001",
    stops: [
      {
        stopId: 401,
        directions: "Near Miyapur Metro Station",
        name: "Miyapur",
        latitude: 17.4933,
        longitude: 78.399,
      },
      {
        stopId: 402,
        directions: "Near LB Nagar Junction",
        name: "LB Nagar",
        latitude: 17.35,
        longitude: 78.5244,
      },
      {
        stopId: 403,
        directions: "Near Uppal Stadium",
        name: "Uppal",
        latitude: 17.4056,
        longitude: 78.5591,
      },
      {
        stopId: 404,
        directions: "Near Kukatpally Metro Station",
        name: "Kukatpally",
        latitude: 17.4933,
        longitude: 78.399,
      },
      {
        stopId: 405,
        directions: "Near Ameerpet Metro Station",
        name: "Ameerpet",
        latitude: 17.4375,
        longitude: 78.4484,
      },
    ],
  },
  {
    cityId: 5,
    city: "Delhi",
    state: "Delhi",
    stateCode: "DL",
    pincode: "110001",
    stops: [
      {
        stopId: 501,
        directions: "Near Kashmere Gate ISBT",
        name: "Kashmere Gate",
        latitude: 28.6672,
        longitude: 77.2274,
      },
      {
        stopId: 502,
        directions: "Near Sarai Kale Khan ISBT",
        name: "Sarai Kale Khan",
        latitude: 28.5802,
        longitude: 77.2636,
      },
      {
        stopId: 503,
        directions: "Near Janakpuri District Center",
        name: "Janakpuri",
        latitude: 28.6219,
        longitude: 77.0916,
      },
      {
        stopId: 504,
        directions: "Near Laxmi Nagar Metro Station",
        name: "Laxmi Nagar",
        latitude: 28.6315,
        longitude: 77.2732,
      },
      {
        stopId: 505,
        directions: "Near Rohini Sector 18",
        name: "Rohini",
        latitude: 28.7437,
        longitude: 77.0675,
      },
    ],
  },
  {
    cityId: 6,
    city: "Kolkata",
    state: "West Bengal",
    stateCode: "WB",
    pincode: "700001",
    stops: [
      {
        stopId: 601,
        directions: "Near Esplanade Metro Station",
        name: "Esplanade",
        latitude: 22.5675,
        longitude: 88.3476,
      },
      {
        stopId: 602,
        directions: "Near Howrah Bridge",
        name: "Howrah",
        latitude: 22.5892,
        longitude: 88.3103,
      },
      {
        stopId: 603,
        directions: "Near Salt Lake Stadium",
        name: "Salt Lake",
        latitude: 22.5735,
        longitude: 88.363,
      },
      {
        stopId: 604,
        directions: "Near Shyambazar Crossing",
        name: "Shyambazar",
        latitude: 22.6013,
        longitude: 88.3685,
      },
      {
        stopId: 605,
        directions: "Near Park Street Metro Station",
        name: "Park Street",
        latitude: 22.5523,
        longitude: 88.3517,
      },
    ],
  },
  {
    cityId: 7,
    city: "Pune",
    state: "Maharashtra",
    stateCode: "MH",
    pincode: "411001",
    stops: [
      {
        stopId: 701,
        directions: "Near Swargate Bus Stand",
        name: "Swargate",
        latitude: 18.5018,
        longitude: 73.8636,
      },
      {
        stopId: 702,
        directions: "Near Shivajinagar Railway Station",
        name: "Shivajinagar",
        latitude: 18.5308,
        longitude: 73.8476,
      },
      {
        stopId: 703,
        directions: "Near Kothrud Depot",
        name: "Kothrud",
        latitude: 18.5074,
        longitude: 73.8077,
      },
      {
        stopId: 704,
        directions: "Near Hinjewadi IT Park",
        name: "Hinjewadi",
        latitude: 18.5946,
        longitude: 73.7181,
      },
      {
        stopId: 705,
        directions: "Near Phoenix Marketcity",
        name: "Viman Nagar",
        latitude: 18.5679,
        longitude: 73.9142,
      },
    ],
  },
  {
    cityId: 8,
    city: "Ahmedabad",
    state: "Gujarat",
    stateCode: "GJ",
    pincode: "380001",
    stops: [
      {
        stopId: 801,
        directions: "Near Kalupur Railway Station",
        name: "Kalupur",
        latitude: 23.0232,
        longitude: 72.602,
      },
      {
        stopId: 802,
        directions: "Near Vastral Gam Metro Station",
        name: "Vastral",
        latitude: 22.9924,
        longitude: 72.669,
      },
      {
        stopId: 803,
        directions: "Near Maninagar Railway Station",
        name: "Maninagar",
        latitude: 22.9786,
        longitude: 72.6014,
      },
      {
        stopId: 804,
        directions: "Near ISRO Colony",
        name: "Satellite",
        latitude: 23.0304,
        longitude: 72.5178,
      },
      {
        stopId: 805,
        directions: "Near Navrangpura Bus Stand",
        name: "Navrangpura",
        latitude: 23.0434,
        longitude: 72.5596,
      },
    ],
  },
  {
    cityId: 9,
    city: "Jaipur",
    state: "Rajasthan",
    stateCode: "RJ",
    pincode: "302001",
    stops: [
      {
        stopId: 901,
        directions: "Near Sindhi Camp Bus Stand",
        name: "Sindhi Camp",
        latitude: 26.9204,
        longitude: 75.799,
      },
      {
        stopId: 902,
        directions: "Near Gopalpura Bypass",
        name: "Gopalpura",
        latitude: 26.8843,
        longitude: 75.8069,
      },
      {
        stopId: 903,
        directions: "Near Malviya Nagar",
        name: "Malviya Nagar",
        latitude: 26.8623,
        longitude: 75.8197,
      },
      {
        stopId: 904,
        directions: "Near Jhotwara",
        name: "Jhotwara",
        latitude: 26.944,
        longitude: 75.755,
      },
      {
        stopId: 905,
        directions: "Near MI Road",
        name: "MI Road",
        latitude: 26.9126,
        longitude: 75.7873,
      },
    ],
  },
  {
    cityId: 10,
    city: "Chandigarh",
    state: "Chandigarh",
    stateCode: "CH",
    pincode: "160001",
    stops: [
      {
        stopId: 1001,
        directions: "Near ISBT",
        name: "ISBT",
        latitude: 30.74,
        longitude: 76.785,
      },
      {
        stopId: 1002,
        directions: "Near Sector 43 Market",
        name: "Sector 43",
        latitude: 30.7226,
        longitude: 76.7682,
      },
      {
        stopId: 1003,
        directions: "Near Sector 17 Plaza",
        name: "Sector 17",
        latitude: 30.7353,
        longitude: 76.7727,
      },
      {
        stopId: 1004,
        directions: "Near Sector 22 Market",
        name: "Sector 22",
        latitude: 30.7333,
        longitude: 76.7666,
      },
      {
        stopId: 1005,
        directions: "Near Sector 35 Market",
        name: "Sector 35",
        latitude: 30.7273,
        longitude: 76.7547,
      },
    ],
  },
  {
    cityId: 11,
    city: "Surat",
    state: "Gujarat",
    stateCode: "GJ",
    pincode: "395003",
    stops: [
      {
        stopId: 1101,
        directions: "Near Adajan Patiya",
        name: "Adajan",
        latitude: 21.1702,
        longitude: 72.8311,
      },
      {
        stopId: 1102,
        directions: "Near Varachha Flyover",
        name: "Varachha",
        latitude: 21.2394,
        longitude: 72.8856,
      },
      {
        stopId: 1103,
        directions: "Near Rander Market",
        name: "Rander",
        latitude: 21.2235,
        longitude: 72.8086,
      },
      {
        stopId: 1104,
        directions: "Near Udhana Railway Station",
        name: "Udhana",
        latitude: 21.1766,
        longitude: 72.8465,
      },
      {
        stopId: 1105,
        directions: "Near Piplod Lake",
        name: "Piplod",
        latitude: 21.1377,
        longitude: 72.75,
      },
    ],
  },
  {
    cityId: 12,
    city: "Lucknow",
    state: "Uttar Pradesh",
    stateCode: "UP",
    pincode: "226001",
    stops: [
      {
        stopId: 1201,
        directions: "Near Alambagh Bus Stand",
        name: "Alambagh",
        latitude: 26.7924,
        longitude: 80.8964,
      },
      {
        stopId: 1202,
        directions: "Near Charbagh Railway Station",
        name: "Charbagh",
        latitude: 26.8371,
        longitude: 80.9215,
      },
      {
        stopId: 1203,
        directions: "Near Hazratganj Market",
        name: "Hazratganj",
        latitude: 26.8467,
        longitude: 80.9462,
      },
      {
        stopId: 1204,
        directions: "Near Gomti Nagar Railway Station",
        name: "Gomti Nagar",
        latitude: 26.8677,
        longitude: 81.0004,
      },
      {
        stopId: 1205,
        directions: "Near Aminabad Market",
        name: "Aminabad",
        latitude: 26.8433,
        longitude: 80.9405,
      },
    ],
  },
  {
    cityId: 13,
    city: "Nagpur",
    state: "Maharashtra",
    stateCode: "MH",
    pincode: "440001",
    stops: [
      {
        stopId: 1301,
        directions: "Near Sitabuldi Fort",
        name: "Sitabuldi",
        latitude: 21.1463,
        longitude: 79.0849,
      },
      {
        stopId: 1302,
        directions: "Near Sadar Bazar",
        name: "Sadar",
        latitude: 21.1591,
        longitude: 79.0971,
      },
      {
        stopId: 1303,
        directions: "Near Dharampeth Market",
        name: "Dharampeth",
        latitude: 21.1526,
        longitude: 79.0782,
      },
      {
        stopId: 1304,
        directions: "Near Manewada Chowk",
        name: "Manewada",
        latitude: 21.1122,
        longitude: 79.1097,
      },
      {
        stopId: 1305,
        directions: "Near Ramdaspeth Garden",
        name: "Ramdaspeth",
        latitude: 21.14,
        longitude: 79.0842,
      },
    ],
  },
  {
    cityId: 14,
    city: "Indore",
    state: "Madhya Pradesh",
    stateCode: "MP",
    pincode: "452001",
    stops: [
      {
        stopId: 1401,
        directions: "Near Vijay Nagar Square",
        name: "Vijay Nagar",
        latitude: 22.7523,
        longitude: 75.8934,
      },
      {
        stopId: 1402,
        directions: "Near Rajwada Palace",
        name: "Rajwada",
        latitude: 22.7196,
        longitude: 75.8577,
      },
      {
        stopId: 1403,
        directions: "Near Palasia Square",
        name: "Palasia",
        latitude: 22.7174,
        longitude: 75.8684,
      },
      {
        stopId: 1404,
        directions: "Near Aerodrome Area",
        name: "Aerodrome",
        latitude: 22.7323,
        longitude: 75.8605,
      },
      {
        stopId: 1405,
        directions: "Near MG Road",
        name: "MG Road",
        latitude: 22.7195,
        longitude: 75.8791,
      },
    ],
  },
  {
    cityId: 15,
    city: "Bhopal",
    state: "Madhya Pradesh",
    stateCode: "MP",
    pincode: "462001",
    stops: [
      {
        stopId: 1501,
        directions: "Near Bairagarh Market",
        name: "Bairagarh",
        latitude: 23.2737,
        longitude: 77.3941,
      },
      {
        stopId: 1502,
        directions: "Near Habibganj Railway Station",
        name: "Habibganj",
        latitude: 23.2332,
        longitude: 77.4344,
      },
      {
        stopId: 1503,
        directions: "Near Lalghati Square",
        name: "Lalghati",
        latitude: 23.2941,
        longitude: 77.3658,
      },
      {
        stopId: 1504,
        directions: "Near MP Nagar Zone 1",
        name: "MP Nagar",
        latitude: 23.2197,
        longitude: 77.4343,
      },
      {
        stopId: 1505,
        directions: "Near New Market",
        name: "New Market",
        latitude: 23.241,
        longitude: 77.4055,
      },
    ],
  },
  {
    cityId: 16,
    city: "Patna",
    state: "Bihar",
    stateCode: "BR",
    pincode: "800001",
    stops: [
      {
        stopId: 1601,
        directions: "Near Gandhi Maidan",
        name: "Gandhi Maidan",
        latitude: 25.6127,
        longitude: 85.1589,
      },
      {
        stopId: 1602,
        directions: "Near Kankarbagh Colony",
        name: "Kankarbagh",
        latitude: 25.6022,
        longitude: 85.1355,
      },
      {
        stopId: 1603,
        directions: "Near Boring Road Crossing",
        name: "Boring Road",
        latitude: 25.623,
        longitude: 85.1182,
      },
      {
        stopId: 1604,
        directions: "Near Danapur Cantonment",
        name: "Danapur",
        latitude: 25.6367,
        longitude: 85.045,
      },
      {
        stopId: 1605,
        directions: "Near Patna Junction",
        name: "Aminabad",
        latitude: 25.6155,
        longitude: 85.1452,
      },
    ],
  },
  {
    cityId: 17,
    city: "Vadodara",
    state: "Gujarat",
    stateCode: "GJ",
    pincode: "390001",
    stops: [
      {
        stopId: 1701,
        directions: "Near Alkapuri Bus Stand",
        name: "Alkapuri",
        latitude: 22.3072,
        longitude: 73.1812,
      },
      {
        stopId: 1702,
        directions: "Near Makarpura Industrial Estate",
        name: "Makarpura",
        latitude: 22.2785,
        longitude: 73.2068,
      },
      {
        stopId: 1703,
        directions: "Near Railway Station",
        name: "Railway Station",
        latitude: 22.3073,
        longitude: 73.1815,
      },
      {
        stopId: 1704,
        directions: "Near Akota Stadium",
        name: "Akota",
        latitude: 22.3039,
        longitude: 73.1754,
      },
      {
        stopId: 1705,
        directions: "Near Manjalpur Township",
        name: "Manjalpur",
        latitude: 22.2842,
        longitude: 73.1926,
      },
    ],
  },
  {
    cityId: 18,
    city: "Coimbatore",
    state: "Tamil Nadu",
    stateCode: "TN",
    pincode: "641001",
    stops: [
      {
        stopId: 1801,
        directions: "Near Gandhipuram Central Bus Stand",
        name: "Gandhipuram",
        latitude: 11.0168,
        longitude: 76.9558,
      },
      {
        stopId: 1802,
        directions: "Near Ukkadam Bus Stand",
        name: "Ukkadam",
        latitude: 10.9947,
        longitude: 76.9556,
      },
      {
        stopId: 1803,
        directions: "Near Singanallur Bus Stand",
        name: "Singanallur",
        latitude: 11.0034,
        longitude: 77.0171,
      },
      {
        stopId: 1804,
        directions: "Near Peelamedu Airport",
        name: "Peelamedu",
        latitude: 11.0287,
        longitude: 77.0403,
      },
      {
        stopId: 1805,
        directions: "Near Saibaba Colony",
        name: "Saibaba Colony",
        latitude: 11.0293,
        longitude: 76.9366,
      },
    ],
  },
  {
    cityId: 19,
    city: "Thiruvananthapuram",
    state: "Kerala",
    stateCode: "KL",
    pincode: "695001",
    stops: [
      {
        stopId: 1901,
        directions: "Near East Fort Bus Stand",
        name: "East Fort",
        latitude: 8.4875,
        longitude: 76.9488,
      },
      {
        stopId: 1902,
        directions: "Near Technopark Main Gate",
        name: "Technopark",
        latitude: 8.5543,
        longitude: 76.8812,
      },
      {
        stopId: 1903,
        directions: "Near Thampanoor Bus Stand",
        name: "Thampanoor",
        latitude: 8.4882,
        longitude: 76.9438,
      },
      {
        stopId: 1904,
        directions: "Near Medical College",
        name: "Medical College",
        latitude: 8.5241,
        longitude: 76.9345,
      },
      {
        stopId: 1905,
        directions: "Near Kazhakootam",
        name: "Kazhakootam",
        latitude: 8.5735,
        longitude: 76.8778,
      },
    ],
  },
  {
    cityId: 20,
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    stateCode: "AP",
    pincode: "530001",
    stops: [
      {
        stopId: 2001,
        directions: "Near MVP Colony Bus Stand",
        name: "MVP Colony",
        latitude: 17.7447,
        longitude: 83.3132,
      },
      {
        stopId: 2002,
        directions: "Near Gajuwaka Bus Stand",
        name: "Gajuwaka",
        latitude: 17.6954,
        longitude: 83.2178,
      },
      {
        stopId: 2003,
        directions: "Near RTC Complex",
        name: "RTC Complex",
        latitude: 17.7224,
        longitude: 83.3013,
      },
      {
        stopId: 2004,
        directions: "Near Dwaraka Nagar",
        name: "Dwaraka Nagar",
        latitude: 17.732,
        longitude: 83.3155,
      },
      {
        stopId: 2005,
        directions: "Near RK Beach",
        name: "RK Beach",
        latitude: 17.71,
        longitude: 83.3161,
      },
    ],
  },
];
const seatNumbersUpper = ["U", "S", "A", "L"];
const seatNumberLower = ["T", "V", "M", "H"];
//City.insertMany(citiesDummy);

const buses = [
  {
    id: 1,
    plateNumber: "KA01AB1234",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "RedBus",
    amenities: generateAmenities(),
  },
  {
    id: 2,
    plateNumber: "MH02CD5678",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "GreenBus",
    amenities: generateAmenities(),
  },
  {
    id: 3,
    plateNumber: "TN03EF9101",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "BlueBus",
    amenities: generateAmenities(),
  },
  {
    id: 4,
    plateNumber: "AP04GH2345",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "YellowBus",
    amenities: generateAmenities(),
  },
  {
    id: 5,
    plateNumber: "GJ05IJ6789",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "PurpleBus",
    amenities: generateAmenities(),
  },
  {
    id: 6,
    plateNumber: "RJ06KL0123",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "OrangeBus",
    amenities: generateAmenities(),
  },
  {
    id: 7,
    plateNumber: "UP07MN4567",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "PinkBus",
    amenities: generateAmenities(),
  },
  {
    id: 8,
    plateNumber: "MP08OP8901",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "WhiteBus",
    amenities: generateAmenities(),
  },
  {
    id: 9,
    plateNumber: "DL09QR2345",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "GreyBus",
    amenities: generateAmenities(),
  },
  {
    id: 10,
    plateNumber: "PB10ST6789",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "BlackBus",
    amenities: generateAmenities(),
  },
  {
    id: 11,
    plateNumber: "HR11UV0123",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "GoldenBus",
    amenities: generateAmenities(),
  },
  {
    id: 12,
    plateNumber: "CH12WX4567",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "SilverBus",
    amenities: generateAmenities(),
  },
  {
    id: 13,
    plateNumber: "BR13YZ8901",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "BronzeBus",
    amenities: generateAmenities(),
  },
  {
    id: 14,
    plateNumber: "WB14AA2345",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "PlatinumBus",
    amenities: generateAmenities(),
  },
  {
    id: 15,
    plateNumber: "OD15BB6789",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "DiamondBus",
    amenities: generateAmenities(),
  },
  {
    id: 16,
    plateNumber: "CG16CC0123",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "RubyBus",
    amenities: generateAmenities(),
  },
  {
    id: 17,
    plateNumber: "AS17DD4567",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "EmeraldBus",
    amenities: generateAmenities(),
  },
  {
    id: 18,
    plateNumber: "KL18EE8901",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "SapphireBus",
    amenities: generateAmenities(),
  },
  {
    id: 19,
    plateNumber: "KA19FF2345",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "TopazBus",
    amenities: generateAmenities(),
  },
  {
    id: 20,
    plateNumber: "MH20GG6789",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "OpalBus",
    amenities: generateAmenities(),
  },
  {
    id: 21,
    plateNumber: "KA21HH1234",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "CrimsonBus",
    amenities: generateAmenities(),
  },
  {
    id: 22,
    plateNumber: "MH22II5678",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "AzureBus",
    amenities: generateAmenities(),
  },
  {
    id: 23,
    plateNumber: "TN23JJ9101",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "AmberBus",
    amenities: generateAmenities(),
  },
  {
    id: 24,
    plateNumber: "AP24KK2345",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "MagentaBus",
    amenities: generateAmenities(),
  },
  {
    id: 25,
    plateNumber: "GJ25LL6789",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "TurquoiseBus",
    amenities: generateAmenities(),
  },
  {
    id: 26,
    plateNumber: "RJ26MM0123",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "TealBus",
    amenities: generateAmenities(),
  },
  {
    id: 27,
    plateNumber: "UP27NN4567",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "LavenderBus",
    amenities: generateAmenities(),
  },
  {
    id: 28,
    plateNumber: "MP28OO8901",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "MaroonBus",
    amenities: generateAmenities(),
  },
  {
    id: 29,
    plateNumber: "DL29PP2345",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "NavyBus",
    amenities: generateAmenities(),
  },
  {
    id: 30,
    plateNumber: "PB30QQ6789",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "BeigeBus",
    amenities: generateAmenities(),
  },
  {
    id: 31,
    plateNumber: "HR31RR0123",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "CyanBus",
    amenities: generateAmenities(),
  },
  {
    id: 32,
    plateNumber: "CH32SS4567",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "VioletBus",
    amenities: generateAmenities(),
  },
  {
    id: 33,
    plateNumber: "BR33TT8901",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "ScarletBus",
    amenities: generateAmenities(),
  },
  {
    id: 34,
    plateNumber: "WB34UU2345",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "PeachBus",
    amenities: generateAmenities(),
  },
  {
    id: 35,
    plateNumber: "OD35VV6789",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "SaffronBus",
    amenities: generateAmenities(),
  },
  {
    id: 36,
    plateNumber: "CG36WW0123",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "RubyBus",
    amenities: generateAmenities(),
  },
  {
    id: 37,
    plateNumber: "AS37XX4567",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "EmeraldBus",
    amenities: generateAmenities(),
  },
  {
    id: 38,
    plateNumber: "KL38YY8901",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "SapphireBus",
    amenities: generateAmenities(),
  },
  {
    id: 39,
    plateNumber: "KA39ZZ2345",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "TopazBus",
    amenities: generateAmenities(),
  },
  {
    id: 40,
    plateNumber: "MH40AA6789",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "OpalBus",
    amenities: generateAmenities(),
  },
  {
    id: 41,
    plateNumber: "KA41BB1234",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "JadeBus",
    amenities: generateAmenities(),
  },
  {
    id: 42,
    plateNumber: "MH42CC5678",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "OnyxBus",
    amenities: generateAmenities(),
  },
  {
    id: 43,
    plateNumber: "TN43DD9101",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "PearlBus",
    amenities: generateAmenities(),
  },
  {
    id: 44,
    plateNumber: "AP44EE2345",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "GarnetBus",
    amenities: generateAmenities(),
  },
  {
    id: 45,
    plateNumber: "GJ45FF6789",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "AmethystBus",
    amenities: generateAmenities(),
  },
  {
    id: 46,
    plateNumber: "RJ46GG0123",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "QuartzBus",
    amenities: generateAmenities(),
  },
  {
    id: 47,
    plateNumber: "UP47HH4567",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "AmberBus",
    amenities: generateAmenities(),
  },
  {
    id: 48,
    plateNumber: "MH48XX1234",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "BronzeBus",
    amenities: generateAmenities(),
  },
  {
    id: 49,
    plateNumber: "TN49YY5678",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "CopperBus",
    amenities: generateAmenities(),
  },
  {
    id: 50,
    plateNumber: "KA50ZZ9101",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "SilverBus",
    amenities: generateAmenities(),
  },
  {
    id: 51,
    plateNumber: "GJ51AA2345",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "GoldBus",
    amenities: generateAmenities(),
  },
  {
    id: 52,
    plateNumber: "RJ52BB6789",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "PlatinumBus",
    amenities: generateAmenities(),
  },
  {
    id: 53,
    plateNumber: "UP53CC0123",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "TitaniumBus",
    amenities: generateAmenities(),
  },
  {
    id: 54,
    plateNumber: "MP54DD4567",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "NickelBus",
    amenities: generateAmenities(),
  },
  {
    id: 55,
    plateNumber: "DL55EE8901",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "ZincBus",
    amenities: generateAmenities(),
  },
  {
    id: 56,
    plateNumber: "PB56FF2345",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "IronBus",
    amenities: generateAmenities(),
  },
  {
    id: 57,
    plateNumber: "HR57GG6789",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "SteelBus",
    amenities: generateAmenities(),
  },
  {
    id: 58,
    plateNumber: "CH58HH0123",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "AluminumBus",
    amenities: generateAmenities(),
  },
  {
    id: 59,
    plateNumber: "BR59II4567",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "MagnesiumBus",
    amenities: generateAmenities(),
  },
  {
    id: 60,
    plateNumber: "WB60JJ8901",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "LithiumBus",
    amenities: generateAmenities(),
  },
  {
    id: 61,
    plateNumber: "KA61JJ1234",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "GoldBus",
    amenities: generateAmenities(),
  },
  {
    id: 62,
    plateNumber: "MH62KK5678",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "SilverBus",
    amenities: generateAmenities(),
  },
  {
    id: 63,
    plateNumber: "TN63LL9101",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "BronzeBus",
    amenities: generateAmenities(),
  },
  {
    id: 64,
    plateNumber: "AP64MM2345",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "CopperBus",
    amenities: generateAmenities(),
  },
  {
    id: 65,
    plateNumber: "GJ65NN6789",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "PlatinumBus",
    amenities: generateAmenities(),
  },
  {
    id: 66,
    plateNumber: "RJ66OO0123",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "TitaniumBus",
    amenities: generateAmenities(),
  },
  {
    id: 67,
    plateNumber: "UP67PP4567",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "NickelBus",
    amenities: generateAmenities(),
  },
  {
    id: 68,
    plateNumber: "MP68QQ8901",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "ZincBus",
    amenities: generateAmenities(),
  },
  {
    id: 69,
    plateNumber: "DL69RR2345",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "IronBus",
    amenities: generateAmenities(),
  },
  {
    id: 70,
    plateNumber: "PB70SS6789",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "SteelBus",
    amenities: generateAmenities(),
  },
  {
    id: 71,
    plateNumber: "HR71TT0123",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "AluminumBus",
    amenities: generateAmenities(),
  },
  {
    id: 72,
    plateNumber: "CH72UU4567",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "MagnesiumBus",
    amenities: generateAmenities(),
  },
  {
    id: 73,
    plateNumber: "BR73VV8901",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "LithiumBus",
    amenities: generateAmenities(),
  },
  {
    id: 74,
    plateNumber: "WB74WW2345",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "CobaltBus",
    amenities: generateAmenities(),
  },
  {
    id: 75,
    plateNumber: "OD75XX6789",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "VanadiumBus",
    amenities: generateAmenities(),
  },
  {
    id: 76,
    plateNumber: "CG76YY0123",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "ChromiumBus",
    amenities: generateAmenities(),
  },
  {
    id: 77,
    plateNumber: "AS77ZZ4567",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "ManganeseBus",
    amenities: generateAmenities(),
  },
  {
    id: 78,
    plateNumber: "KL78AA8901",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "CopperBus",
    amenities: generateAmenities(),
  },
  {
    id: 79,
    plateNumber: "KA79BB2345",
    busType: "AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "BerylliumBus",
    amenities: generateAmenities(),
  },
  {
    id: 80,
    plateNumber: "MH80CC6789",
    busType: "NON_AC",
    seatLayout: {
      lowerDeck: generateSeats(1, 20, false),
      upperDeck: generateSeats(1, 20, true),
    },
    partner: "HeliumBus",
    amenities: generateAmenities(),
  },
];

function generateSeats(startIndex, endIndex, isUpperDeck) {
  const rows = 4;
  const seats = [];

  let seatType;
  for (let row = 0; row < rows; row++) {
    if (row === 2) continue;
    if (isUpperDeck) {
      seatType = "SLEEPER";
    } else {
      seatType = Math.random() > 0.5 ? "SLEEPER" : "SEATER";
    }

    const seatsInRow = seatType === "SLEEPER" ? 6 : 8;

    for (let seat = 0; seat < seatsInRow; seat++) {
      seats.push({
        seatType,
        row: row,
        column: seat,
        seatNumber:
          (isUpperDeck ? seatNumbersUpper[row] : seatNumberLower[row]) +
          (seat + 1),
      });

      startIndex++;
    }
  }
  return seats;
}

function generateAmenities() {
  const allAmenities = [
    { icon: "wifi", label: "Wi-Fi" },
    { icon: "power", label: "Power Outlet" },
    { icon: "tv", label: "TV" },
    { icon: "sanitizer", label: "Hand Sanitizer" },
    { icon: "location_on", label: "GPS Tracking" },
    { icon: "medical_services", label: "First Aid Box" },
  ];
  const numberOfAmenities = Math.floor(Math.random() * allAmenities.length) + 1;
  const shuffledAmenities = allAmenities.sort(() => 0.5 - Math.random());
  return shuffledAmenities.slice(0, numberOfAmenities);
}

const cities = [
  { cityId: 1, stopId: 101 },
  { cityId: 2, stopId: 201 },
  { cityId: 3, stopId: 301 },
  { cityId: 4, stopId: 401 },
  { cityId: 5, stopId: 501 },
  { cityId: 6, stopId: 601 },
  { cityId: 7, stopId: 701 },
  { cityId: 8, stopId: 801 },
  { cityId: 9, stopId: 901 },
  { cityId: 10, stopId: 1001 },
  { cityId: 11, stopId: 1101 },
  { cityId: 12, stopId: 1201 },
  { cityId: 13, stopId: 1301 },
  { cityId: 14, stopId: 1401 },
  { cityId: 15, stopId: 1501 },
  { cityId: 16, stopId: 1601 },
  { cityId: 17, stopId: 1701 },
  { cityId: 18, stopId: 1801 },
  { cityId: 19, stopId: 1901 },
  { cityId: 20, stopId: 2001 },
];

function getRandomTravelDate(i) {
  let travelDate = new Date();
  travelDate.setDate(travelDate.getDate() + i);
  travelDate = travelDate.setHours(0, 0, 0, 0);
  return travelDate;
}

const sleeperPrices = [800, 1050, 1500, 2000];
const seaterPrices = [200, 250, 500, 600];

const generatePrices = async (busId) => {
  try {
    const prices = [];
    const bus = await Bus.findOne({ id: busId });

    const seatLayout = bus?.seatLayout;

    // Ensure lowerDeck and upperDeck are arrays, or default to empty arrays
    const lowerDeck = Array.isArray(seatLayout?.lowerDeck)
      ? seatLayout.lowerDeck
      : [];
    const upperDeck = Array.isArray(seatLayout?.upperDeck)
      ? seatLayout.upperDeck
      : [];

    // Combine lowerDeck and upperDeck safely
    const allSeats = [...lowerDeck, ...upperDeck];

    // Process seats if they exist
    allSeats.forEach((seat) => {
      prices.push({
        seatNumber: seat.seatNumber,
        price:
          seat.seatType === "SLEEPER"
            ? sleeperPrices[Math.floor(Math.random() * sleeperPrices.length)]
            : seaterPrices[Math.floor(Math.random() * seaterPrices.length)],
      });
    });

    return prices;
  } catch (error) {
    console.error("Error generating prices:", error);
    return [];
  }
};

// const generatePrices = async (busId) => {
//   try {
//     const prices = [];
//     const bus = await Bus.findOne({ id: busId });
//     // console.log(bus, "bus");
//     const seatLayout = bus?.seatLayout;
//     const allSeats = [...seatLayout?.lowerDeck, ...seatLayout?.upperDeck];
//     // console.log(allSeats);
//     allSeats.length > 0 &&
//       allSeats.forEach((seat) => {
//         prices.push({
//           seatNumber: seat.seatNumber,
//           price:
//             seat.seatType === "SLEEPER"
//               ? sleeperPrices[Math.floor(Math.random() * 4)]
//               : seaterPrices[Math.floor(Math.random() * 4)],
//         });
//       });

//     // console.log(prices);
//     return prices;
//   } catch (error) {
//     console.log(error);
//   }
// };

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const setRandomTimeForDest = (date) => {
  const newDate = new Date(date);
  const randomHours = Math.floor(Math.random() * 12) + 18; // 0 to 12
  const randomMinutes = Math.floor(Math.random() * 60); // 0 to 59
  const randomSeconds = Math.floor(Math.random() * 60); // 0 to 59
  const randomMilliseconds = Math.floor(Math.random() * 1000); // 0 to 999

  newDate.setHours(
    randomHours,
    randomMinutes,
    randomSeconds,
    randomMilliseconds
  );
  return newDate.getTime();
};
const setRandomTimeForSource = (date) => {
  const newDate = new Date(date);
  const randomHours = Math.floor(Math.random() * 18); // 0 to 12
  const randomMinutes = Math.floor(Math.random() * 60); // 0 to 59
  const randomSeconds = Math.floor(Math.random() * 60); // 0 to 59
  const randomMilliseconds = Math.floor(Math.random() * 1000); // 0 to 999

  newDate.setHours(
    randomHours,
    randomMinutes,
    randomSeconds,
    randomMilliseconds
  );
  return newDate.getTime();
};

function generateStops(city, travelDate, point) {
  const stops = [];
  const numberOfStops = getRandomInt(2, 5); // At least 2 stops, up to 5

  for (let i = 0; i < numberOfStops; i++) {
    stops.push({
      stopId: city.stopId + i, // Assuming stopId + i is valid
      arrivalTime: point
        ? setRandomTimeForSource(travelDate)
        : setRandomTimeForDest(travelDate),
    });
  }

  // Sort stops by arrival time
  stops.sort((a, b) => a.arrivalTime - b.arrivalTime);

  return stops;
}

for (let i = 1; i <= 5; i++) {
  let idx = 1000 * i;
  const temp = Array.from({ length: 1000 }, async (_, index) => {
    let sourceCity, destinationCity;

    do {
      sourceCity = cities[Math.floor(Math.random() * cities.length)];
      destinationCity = cities[Math.floor(Math.random() * cities.length)];
    } while (sourceCity.cityId === destinationCity.cityId);

    const travelDate = getRandomTravelDate(i);
    const busId = getRandomInt(1, buses.length);

    // console.log(busId);
    const sourceStops = generateStops(sourceCity, travelDate, true);
    const destinationStops = generateStops(destinationCity, travelDate, false);

    // console.log(index + idx);
    const prices = await generatePrices(busId);
    // console.log(prices);
    const tour = {
      id: index + idx,
      source: {
        cityId: sourceCity.cityId,
        stops: sourceStops,
      },
      destination: {
        cityId: destinationCity.cityId,
        stops: destinationStops,
      },
      travelDate,
      busId,
      prices,
    };
    //Tour.insertMany([tour]);
    console.log(setRandomTimeForDest(new Date()));
  });
}
module.exports = { buses, citiesDummy };
