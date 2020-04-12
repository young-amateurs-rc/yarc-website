var quotes = [
    {"name": "David",
    "call": "KF1SHY",
    "quote": "I created YARC so that young hams would be able to find like-minded hams, help each other, and spur innovation in ham radio. We're the next generation of ham radio, and it sure helps to have a club to encourage that."},

    {"name": "Ben",
    "call": "AB3NJ",
    "quote": "I joined the Discord, and at first didn't expect much, but quickly found lots of great hams my age who understood me and helped me find my passion for ham radio."},

    {"name": "Sterling",
    "call": "N0SSC",
    "quote": "There's just enough young hams in here to be able to answer most any question everybody has, but the club is still small enough to foster a great sense of community and friendship among all of us."},

    {"name": "Ryan M",
    "call": "",
    "quote": "There are lots of people who know lots of stuff at your disposal for free."}
]

var randoms = [];

while (randoms.length < 3) {
    var random_number = Math.floor(Math.random()*(quotes.length));
    if (randoms.indexOf(random_number) == -1) {
        randoms.push( random_number );
    }
}

var quote1 = quotes[randoms[0]];
if (quote1.call != "") document.getElementById('test1-title').innerHTML = quote1.name + ", " + quote1.call;
else document.getElementById('test1-title').innerHTML = quote1.name;
document.getElementById('test1-quote').innerHTML = "\"" + quote1.quote + "\"";

var quote2 = quotes[randoms[1]];
if (quote2.call != "") document.getElementById('test2-title').innerHTML = quote2.name + ", " + quote2.call;
else document.getElementById('test2-title').innerHTML = quote2.name;
document.getElementById('test2-quote').innerHTML = "\"" + quote2.quote + "\"";

var quote3 = quotes[randoms[2]];
if (quote3.call != "") document.getElementById('test3-title').innerHTML = quote3.name + ", " + quote3.call;
else document.getElementById('test3-title').innerHTML = quote3.name;
document.getElementById('test3-quote').innerHTML = "\"" + quote3.quote + "\"";

