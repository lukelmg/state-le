const states = [
{
    'name': 'Alabama',
    'id': 'AL',
    'center': '32.7794°N 86.8287°W'
},
{
    'name': 'Alaska',
    'id': 'AK',
    'center': '64.0685°N 152.2782°W'
},
{
    'name': 'Arizona',
    'id': 'AZ',
    'center': '34.2744°N 111.6602°W'
},
{
    'name': 'Arkansas',
    'id': 'AR',
    'center': '34.8938°N 92.4426°W'
},
{
    'name': 'Californa',
    'id': 'CA',
    'center': '37.1841°N 119.4696°W'
},
{
    'name': 'Colorado',
    'id': 'CO',
    'center': '38.9972°N 105.5478°W'
},
{
    'name': 'Connecticut',
    'id': 'CT',
    'center': '41.6219°N 72.7273°W'
},
{
    'name': 'Delaware',
    'id': 'DE',
    'center': '38.9896°N 75.5050°W'
},
{
    'name': 'Distric of Columbia',
    'id': 'DC',
    'center': '38.9101°N 77.0147°W'
},
{
    'name': 'Florida',
    'id': 'FL',
    'center': '28.6305°N 82.4497°W'
},
{
    'name': 'Georgia',
    'id': 'GA',
    'center': '32.6415°N 83.4426°W'
},
{
    'name': 'Hawaii',
    'id': 'HI',
    'center': '20.2927°N 156.3737°W'
},
{
    'name': 'Idaho',
    'id': 'ID',
    'center': '44.3509°N 114.6130°W'
},
{
    'name': 'Illinois',
    'id': 'IL',
    'center': '40.0417°N 89.1965°W'
},
{
    'name': 'Indiana',
    'id': 'ID',
    'center': '39.8942°N 86.2816°W'
},
{
    'name': 'Iowa',
    'id': 'IA',
    'center': '42.0751°N 93.4960°W'
},
{
    'name': 'Kansas',
    'id': 'KS',
    'center': '38.4937°N 98.3804°W'
},
{
    'name': 'Kentucky',
    'id': 'KY',
    'center': '37.5347°N 85.3021°W'
},
{
    'name': 'Louisiana',
    'id': 'LA',
    'center': '31.0689°N 91.9968°W'
},
{
    'name': 'Maine',
    'id': 'ME',
    'center': '45.3695°N 69.2428°W'
},
{
    'name': 'Maryland',
    'id': 'MD',
    'center': '39.0550°N 76.7909°W'
},
{
    'name': 'Massachusetts',
    'id': 'MA',
    'center': '42.2596°N 71.8083°W'
},
{
    'name': 'Michigan',
    'id': 'MI',
    'center': '44.3467°N 85.4102°W'
},
{
    'name': 'Minnesota',
    'id': 'MN',
    'center': '46.2807°N 94.3053°W'
},
{
    'name': 'Mississippi',
    'id': 'MS',
    'center': '32.7364°N 89.6678°W'
},
{
    'name': 'Missouri',
    'id': 'MO',
    'center': '38.3566°N 92.4580°W'
},
{
    'name': 'Montana',
    'id': 'MT',
    'center': '47.0527°N 109.6333°W'
},
{
    'name': 'Nebraska',
    'id': 'NE',
    'center': '41.5378°N 99.7951°W'
},
{
    'name': 'Nevada',
    'id': 'NV',
    'center': '39.3289°N 116.6312°W'
},
{
    'name': 'New Hampshire',
    'id': 'NH',
    'center': '43.6805°N 71.5811°W'
},
{
    'name': 'New Jersey',
    'id': 'NJ',
    'center': '40.1907°N 74.6728°W'
},
{
    'name': 'New Mexico',
    'id': 'NM',
    'center': '34.4071°N 106.1126°W'
},
{
    'name': 'New York',
    'id': 'NY',
    'center': '42.9538°N 75.5268°W'
},
{
    'name': 'North Carolina',
    'id': 'NC',
    'center': '35.5557°N 79.3877°W'
},
{
    'name': 'North Dakota',
    'id': 'ND',
    'center': '47.4501°N 100.4659°W'
},
{
    'name': 'Ohio',
    'id': 'OH',
    'center': '40.2862°N 82.7937°W'
},
{
    'name': 'Oklahoma',
    'id': 'OK',
    'center': '35.5889°N 97.4943°W'
},
{
    'name': 'Oregon',
    'id': 'OR',
    'center': '43.9336°N 120.5583°W'
},
{
    'name': 'Pennsylvania',
    'id': 'PA',
    'center': '40.8781°N 77.7996°W'
},
{
    'name': 'Rhode Island',
    'id': 'RI',
    'center': '41.6762°N 71.5562°W'
},
{
    'name': 'South Carolina',
    'id': 'SC',
    'center': '33.9169°N 80.8964°W'
},
{
    'name': 'South Dakota',
    'id': 'SD',
    'center': '44.4443°N 100.2263°W'
},
{
    'name': 'Tennessee',
    'id': 'TN',
    'center': '35.8580°N 86.3505°W'
},
{
    'name': 'Texas',
    'id': 'TX',
    'center': '31.4757°N 99.3312°W'
},
{
    'name': 'Utah',
    'id': 'UT',
    'center': '39.3055°N 111.6703°W'
},
{
    'name': 'Vermont',
    'id': 'VT',
    'center': '44.0687°N 72.6658°W'
},
{
    'name': 'Virginia',
    'id': 'VA',
    'center': '37.5215°N 78.8537°W'
},
{
    'name': 'Washington',
    'id': 'WA',
    'center': '47.3826°N 120.4472°W'
},
{
    'name': 'West Virginia',
    'id': 'WV',
    'center': '38.6409°N 80.6227°W'
},
{
    'name': 'Wisconsin',
    'id': 'WI',
    'center': '44.6243°N 89.9941°W'
},
{
    'name': 'Wyoming',
    'id': 'WY',
    'center': '42.9957°N 107.5512°W'
}];

function calcCrow(lat1, lon1, lat2, lon2) 
    {
      var R = 6371; // km
      var dLat = toRad(lat2-lat1);
      var dLon = toRad(lon2-lon1);
      var lat1 = toRad(lat1);
      var lat2 = toRad(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d * 0.621371;
    }

    // Converts numeric degrees to radians
    function toRad(Value) 
    {
        return Value * Math.PI / 180;
    }

    // Converts from degrees to radians.
function toRadians(degrees) {
    return degrees * Math.PI / 180;
  };
   
  // Converts from radians to degrees.
  function toDegrees(radians) {
    return radians * 180 / Math.PI;
  }
  
  
  function bearing(startLat, startLng, destLat, destLng){
    startLat = toRadians(startLat);
    startLng = toRadians(startLng);
    destLat = toRadians(destLat);
    destLng = toRadians(destLng);
  
    y = Math.sin(destLng - startLng) * Math.cos(destLat);
    x = Math.cos(startLat) * Math.sin(destLat) -
          Math.sin(startLat) * Math.cos(destLat) * Math.cos(destLng - startLng);
    brng = Math.atan2(y, x);
    brng = toDegrees(brng);
    return (brng + 360) % 360;
  }

const order = [
    26, 36, 25, 51,  8,  7, 15,  2, 24, 17, 48,
    27, 46, 29, 35, 44,  6, 38, 47, 10, 41, 16,
    14,  4, 39, 11, 34,  9, 31, 45, 32, 18,  3,
    21, 20, 28, 23, 49, 40,  1,  5, 50, 12, 43,
    13, 22, 37, 33, 30, 19, 42
];

var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

if (day > 51) {
    day = day - 51;
}
console.log(states[order[day]].name);
document.getElementById('state').src = 'states/' + states[order[day]].id + '.svg';

let container = document.getElementById('container')

for (let i = 0; i < 4; i++) {
    let guess = document.createElement('input');
    guess.id = 'guess' + i;
    if (i > 0) {
        guess.enabled = false;
    };
    container.appendChild(guess);

    let distance = document.createElement('span');
    distance.id = 'distance' + i;
    container.appendChild(distance);

    let thatBreak = document.createElement('br');
    container.appendChild(thatBreak);
}

let guessess = 0;

//'42.9957°N 107.5512°W'

function doGuess() {
    if (guessess <= 4) {
        let current = document.getElementById('guess' + guessess).value;
        let answer = states[order[day]].name;

        console.log('guess' + guessess)

        let currentCenter = states[states.map(function(e) { return e.name; }).indexOf(current)].center;
        let answerCenter = states[order[day]].center;

        let distance = calcCrow(currentCenter.substring(0,6), currentCenter.split(' ')[1].slice(0,-3), answerCenter.substring(0,6), answerCenter.split(' ')[1].slice(0,-3))
        console.log(distance);
        document.getElementById('distance' + guessess).innerHTML = Math.round(distance);

        let curBearing = bearing(currentCenter.substring(0,6), currentCenter.split(' ')[1].slice(0,-3), answerCenter.substring(0,6), answerCenter.split(' ')[1].slice(0,-3))
        console.log(curBearing)
    }
    guessess++;
}
console.log(order[day])
console.log(states[order[day]])