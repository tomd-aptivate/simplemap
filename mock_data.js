// Patch ajax function with a mocked loader for the test data
// http://stackoverflow.com/questions/5272698/how-to-fake-jquery-ajax-response
function ajax_response(response) {
    var deferred = $.Deferred().resolve(response);
    return function() {
        return deferred.promise();
    }
}

// Mock Nepal data from MapAction:
// License: Creative Commons Attribution Share-Alike
// https://data.hdx.rwlabs.org/dataset/usar-sites-visited-as-of-28-april-2015
var mockNepalData = [
  {
    "lat": "27.710900",
    "lng": "85.283200"
  },
  {
    "lat": "27.731667",
    "lng": "85.463611"
  },
  {
    "lat": "27.716750",
    "lng": "85.302186"
  },
  {
    "lat": "27.716681",
    "lng": "85.301317"
  },
  {
    "lat": "27.700678",
    "lng": "85.301028"
  },
  {
    "lat": "27.673940",
    "lng": "85.435110"
  },
  {
    "lat": "27.757917",
    "lng": "85.419111"
  },
  {
    "lat": "27.716850",
    "lng": "85.323517"
  },
  {
    "lat": "27.7111111111",
    "lng": "85.3533333333"
  },
  {
    "lat": "27.73455",
    "lng": "85.37979"
  },
  {
    "lat": "27.7468",
    "lng": "85.3355"
  },
  {
    "lat": "27.74",
    "lng": "85.3139444444"
  },
  {
    "lat": "27.7393611111",
    "lng": "85.3139166667"
  },
  {
    "lat": "27.7390555556",
    "lng": "85.3139166667"
  },
  {
    "lat": "27.7853333333",
    "lng": "85.3204722222"
  },
  {
    "lat": "27.7854166667",
    "lng": "85.3174722222"
  },
  {
    "lat": "27.7794722222",
    "lng": "85.3153611111"
  },
  {
    "lat": "27.7986388889",
    "lng": "85.3278055556"
  },
  {
    "lat": "27.7425277778",
    "lng": "85.32225"
  },
  {
    "lat": "27.7366111111",
    "lng": "85.3018055556"
  },
  {
    "lat": "27.7373888889",
    "lng": "85.3021944444"
  },
  {
    "lat": "27.7369166667",
    "lng": "85.3021388889"
  },
  {
    "lat": "27.70469",
    "lng": "85.30704"
  },
  {
    "lat": "27.73538",
    "lng": "85.305464"
  },
  {
    "lat": "27.73237",
    "lng": "85.292776"
  },
  {
    "lat": "27.716511",
    "lng": "85.310598"
  },
  {
    "lat": "27.825658",
    "lng": "85.448591"
  },
  {
    "lat": "27.707119",
    "lng": "85.314224"
  },
  {
    "lat": "27.715071",
    "lng": "85.300901"
  },
  {
    "lat": "27.7121388889",
    "lng": "85.2989444444"
  },
  {
    "lat": "27.74929",
    "lng": "85.330103"
  },
  {
    "lat": "27.7100574",
    "lng": "85.3061159"
  },
  {
    "lat": "27.672125",
    "lng": "85.408298"
  },
  {
    "lat": "27.726947",
    "lng": "85.3506"
  },
  {
    "lat": "27.723443",
    "lng": "85.2874707"
  },
  {
    "lat": "27.744315",
    "lng": "85.341175"
  },
  {
    "lat": "27.714949",
    "lng": "85.300805"
  },
  {
    "lat": "27.72",
    "lng": "85.28"
  },
  {
    "lat": "27.710467",
    "lng": "85.310836"
  },
  {
    "lat": "27.717218",
    "lng": "85.307131"
  },
  {
    "lat": "27.67741",
    "lng": "85.43698"
  },
  {
    "lat": "27.649269",
    "lng": "85.394928"
  }
]

// Mock AJAX call response with test data
$.ajax = ajax_response(mockNepalData);
