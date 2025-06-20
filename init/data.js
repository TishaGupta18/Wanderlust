// const sampleListings = [
//   {
//     title: "Cozy Beachfront Cottage",
//     description:
//       "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Malibu",
//     country: "United States",
//   },
//   {
//     title: "Modern Loft in Downtown",
//     description:
//       "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New York City",
//     country: "United States",
//   },
//   {
//     title: "Mountain Retreat",
//     description:
//       "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Historic Villa in Tuscany",
//     description:
//       "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Florence",
//     country: "Italy",
//   },
//   {
//     title: "Secluded Treehouse Getaway",
//     description:
//       "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 800,
//     location: "Portland",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Paradise",
//     description:
//       "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Cancun",
//     country: "Mexico",
//   },
//   {
//     title: "Rustic Cabin by the Lake",
//     description:
//       "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 900,
//     location: "Lake Tahoe",
//     country: "United States",
//   },
//   {
//     title: "Luxury Penthouse with City Views",
//     description:
//       "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3500,
//     location: "Los Angeles",
//     country: "United States",
//   },
//   {
//     title: "Ski-In/Ski-Out Chalet",
//     description:
//       "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Verbier",
//     country: "Switzerland",
//   },
//   {
//     title: "Safari Lodge in the Serengeti",
//     description:
//       "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Serengeti National Park",
//     country: "Tanzania",
//   },
//   {
//     title: "Historic Canal House",
//     description:
//       "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Amsterdam",
//     country: "Netherlands",
//   },
//   {
//     title: "Private Island Retreat",
//     description:
//       "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 10000,
//     location: "Fiji",
//     country: "Fiji",
//   },
//   {
//     title: "Charming Cottage in the Cotswolds",
//     description:
//       "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "Cotswolds",
//     country: "United Kingdom",
//   },
//   {
//     title: "Historic Brownstone in Boston",
//     description:
//       "Step back in time in this elegant historic brownstone located in the heart of Boston.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2200,
//     location: "Boston",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Bungalow in Bali",
//     description:
//       "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Bali",
//     country: "Indonesia",
//   },
//   {
//     title: "Mountain View Cabin in Banff",
//     description:
//       "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Banff",
//     country: "Canada",
//   },
//   {
//     title: "Art Deco Apartment in Miami",
//     description:
//       "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Miami",
//     country: "United States",
//   },
//   {
//     title: "Tropical Villa in Phuket",
//     description:
//       "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Phuket",
//     country: "Thailand",
//   },
//   {
//     title: "Historic Castle in Scotland",
//     description:
//       "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Scottish Highlands",
//     country: "United Kingdom",
//   },
//   {
//     title: "Desert Oasis in Dubai",
//     description:
//       "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 5000,
//     location: "Dubai",
//     country: "United Arab Emirates",
//   },
//   {
//     title: "Rustic Log Cabin in Montana",
//     description:
//       "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1100,
//     location: "Montana",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Villa in Greece",
//     description:
//       "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Mykonos",
//     country: "Greece",
//   },
//   {
//     title: "Eco-Friendly Treehouse Retreat",
//     description:
//       "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 750,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
//   {
//     title: "Historic Cottage in Charleston",
//     description:
//       "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Charleston",
//     country: "United States",
//   },
//   {
//     title: "Modern Apartment in Tokyo",
//     description:
//       "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Tokyo",
//     country: "Japan",
//   },
//   {
//     title: "Lakefront Cabin in New Hampshire",
//     description:
//       "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New Hampshire",
//     country: "United States",
//   },
//   {
//     title: "Luxury Villa in the Maldives",
//     description:
//       "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 6000,
//     location: "Maldives",
//     country: "Maldives",
//   },
//   {
//     title: "Ski Chalet in Aspen",
//     description:
//       "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Secluded Beach House in Costa Rica",
//     description:
//       "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
// ];

// module.exports = { data: sampleListings };



//data2

// module.exports = [
//   {
//     title: "Cozy Beachfront Cottage",
//     description: "Enjoy breathtaking ocean views and the sound of waves crashing.",
//     price: 1500,
//     location: "Goa",
//     country: "India",
//     image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
//   },
//   {
//     title: "Modern Loft in Downtown",
//     description: "Live in the heart of the city in this stylish modern loft.",
//     price: 1200,
//     location: "Mumbai",
//     country: "India",
//     image: "https://images.unsplash.com/photo-1494526585095-c41746248156"
//   },
//   {
//     title: "Mountain Retreat",
//     description: "A quiet place surrounded by mountains and nature.",
//     price: 1000,
//     location: "Manali",
//     country: "India",
//     image: "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d3"
//   },
//   {
//     title: "Historic Villa in Tuscany",
//     description: "Old-world charm in the heart of Italy.",
//     price: 2500,
//     location: "Florence",
//     country: "Italy",
//     image: "https://images.unsplash.com/photo-1613977257363-707ba9348228"
//   },
//   {
//     title: "Secluded Treehouse Getaway",
//     description: "Escape the city in this serene treehouse retreat.",
//     price: 800,
//     location: "Meghalaya",
//     country: "India",
//     image: "https://images.unsplash.com/photo-1616255511027-94e720f1b6d8"
//   },
//   {
//     title: "Luxury Penthouse with City Views",
//     description: "Sky-high elegance with panoramic views.",
//     price: 3500,
//     location: "Delhi",
//     country: "India",
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
//   },
//   {
//     title: "Private Island Retreat",
//     description: "Complete luxury on your own private island.",
//     price: 10000,
//     location: "Maldives",
//     country: "Maldives",
//     image: "https://images.unsplash.com/photo-1542038784456-8edbcbf25f84"
//   },
//   {
//     title: "Rustic Cabin by the Lake",
//     description: "Warm, cozy and peaceful cabin by a calm lake.",
//     price: 900,
//     location: "Uttarakhand",
//     country: "India",
//     image: "https://images.unsplash.com/photo-1503437313881-503a91226402"
//   }
// ];




//data 3

module.exports = [
  {
    title: "Cozy Beachfront Cottage",
    description: "A relaxing cottage right on the beach.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 1500,
    location: "Goa",
    country: "India",
    owner:'6829cd27861efa08630f840f'
  },
  {
    title: "Modern Loft in Downtown",
    description: "A stylish loft in the heart of the city.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    price: 1200,
    location: "Mumbai",
    country: "India",
    owner:'6829cd27861efa08630f840f'
  },
  // {
  //   title: "Mountain Retreat",
  //   description: "Peaceful stay with mountain views.",
  //   image: "https://images.unsplash.com/photo-1600585153862-28f622b19e42?auto=format&fit=crop&w=800&q=80",
  //   price: 1000,
  //   location: "Manali",
  //   country: "India"
  // },
  
  // {
  //   title: "Historic Villa in Tuscany",
  //   description: "Experience Italy in a beautiful Tuscan villa.",
  //   image: "https://images.unsplash.com/photo-1590490350129-5d26ec540f5c",
  //   price: 2500,
  //   location: "Tuscany",
  //   country: "Italy"
  // },
  {
    title: "Treehouse Escape",
    description: "Live among the trees in this wooden hideout.",
    image: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    price: 800,
    location: "Kerala",
    country: "India",
    owner:'6829cd27861efa08630f840f'
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Enjoy the peaceful lake view.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    price: 900,
    location: "Nainital",
    country: "India",
    owner:'6829cd27861efa08630f840f'
  },
  // {
  //   title: "Luxury Penthouse with City Views",
  //   description: "Top-floor penthouse with skyline views.",
  //   image: "https://images.unsplash.com/photo-1600585153935-7e8c92a0a63c",
  //   price: 3500,
  //   location: "New York",
  //   country: "USA"
  // },
  {
    title: "Private Island Retreat",
    description: "A true escape in the Maldives.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 10000,
    location: "Maldives",
    country: "Maldives",
    owner:'6829cd27861efa08630f840f'
  },
  {
    title: "Winter Ski Chalet",
    description: "Ski-in and ski-out access.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    price: 3200,
    location: "Switzerland",
    country: "Switzerland",
    owner:'6829cd27861efa08630f840f'
  },

  // {
  //   title: "Amsterdam Canal House",
  //   description: "Charming canal-side property.",
  //   image: "https://images.unsplash.com/photo-1552642986-ccb41e7059e4",
  //   price: 1800,
  //   location: "Amsterdam",
  //   country: "Netherlands"
  // },
  {
    title: "English Cottage",
    description: "Peaceful and green surroundings.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    price: 1100,
    location: "Cotswolds",
    country: "UK",
    owner:'6829cd27861efa08630f840f'
  },

  // {
  //   title: "Beach Hut in Bali",
  //   description: "Ocean breeze and chill vibes.",
  //   image: "https://images.unsplash.com/photo-1572120360610-d971b9b78827",
  //   price: 1700,
  //   location: "Bali",
  //   country: "Indonesia"
  // },
  {
    title: "Art Deco Studio",
    description: "Stylish Miami vibes.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    price: 1600,
    location: "Miami",
    country: "USA",
    owner:'6829cd27861efa08630f840f'
  },

  {
    title: "Log Cabin Adventure",
    description: "Perfect for outdoor lovers.",
    image: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
    price: 1300,
    location: "Montana",
    country: "USA",
    owner:'6829cd27861efa08630f840f'
  },

  {
    title: "Zen House in Japan",
    description: "Minimal and calm living.",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    price: 2600,
    location: "Kyoto",
    country: "Japan",
    owner:'6829cd27861efa08630f840f'
  },
  {
    title: "Lake A-frame Cabin",
    description: "Unique structure, beautiful view.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    price: 1400,
    location: "Ooty",
    country: "India",
    owner:'6829cd27861efa08630f840f'
  },
  {
    title: "French Cottage",
    description: "Charming and romantic.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    price: 1800,
    location: "Nice",
    country: "France",
    owner:'6829cd27861efa08630f840f'
  },
  {
    title: "Overwater Bungalow",
    description: "Stay above crystal waters.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 6000,
    location: "Bora Bora",
    country: "French Polynesia",
    owner:'6829cd27861efa08630f840f'
  },
  
  {
    title: "Scandinavian Apartment",
    description: "Modern and minimalist.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    price: 2300,
    location: "Oslo",
    country: "Norway",
    owner:'6829cd27861efa08630f840f'
  },
  {
    title: "Mediterranean Villa",
    description: "Sun-drenched villa with ocean views.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    price: 5200,
    location: "Crete",
    country: "Greece",
    owner:'6829cd27861efa08630f840f'
  },
  {
    title: "Charming Kyoto Ryokan",
    description: "Traditional Japanese inn with tatami rooms.",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    price: 3000,
    location: "Kyoto",
    country: "Japan",
    owner:'6829cd27861efa08630f840f'
  },
  {
    title: "Urban Jungle Loft",
    description: "Filled with plants and sunlight.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    price: 1900,
    location: "Berlin",
    country: "Germany",
    owner:'6829cd27861efa08630f840f'
  },
  // {
  //   title: "Desert Dome",
  //   description: "Geodesic dome in the desert for stargazing.",
  //   image: "https://images.unsplash.com/photo-1558981033-0c0c5f9842da?auto=format&fit=crop&w=800&q=80",
  //   price: 2800,
  //   location: "Joshua Tree",
  //   country: "USA"
  // },
  
  {
    title: "Countryside Cottage",
    description: "Perfect weekend getaway with a fireplace.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92",
    price: 1300,
    location: "Shimla",
    country: "India",
    owner:'6829cd27861efa08630f840f'
  },
  {
    title: "Romantic Paris Apartment",
    description: "Eiffel Tower view included.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    price: 2700,
    location: "Paris",
    country: "France",
    owner:'6829cd27861efa08630f840f'
  },
  {
    title: "Lakeside Modern Retreat",
    description: "Glass walls with calming lake views.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    price: 2200,
    location: "Kodaikanal",
    country: "India",
    owner:'6829cd27861efa08630f840f'
  },
  {
    title: "Coastal Lighthouse Cabin",
    description: "Watch the waves and sleep to ocean sounds.",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    price: 2400,
    location: "Maine",
    country: "USA",
    owner:'6829cd27861efa08630f840f'
  }
  // {
  //   title: "Ivy-Covered Villa",
  //   description: "Beautifully aged with modern comforts.",
  //   image: "https://images.unsplash.com/photo-1559599238-223d6dfb54a6?auto=format&fit=crop&w=800&q=80",
  //   price: 3500,
  //   location: "Florence",
  //   country: "Italy"
  // },
  // {
  //   title: "Alpine Lodge",
  //   description: "Ski in/out with wood interiors.",
  //   image: "https://images.unsplash.com/photo-1615873968403-c9e67b76b5a8?auto=format&fit=crop&w=800&q=80",
  //   price: 4000,
  //   location: "Aspen",
  //   country: "USA"
  // }
  
];
