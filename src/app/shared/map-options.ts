
// declare const google: any;


export const MAP_OPTION = {

    default: null,
    clean : [
        {
          featureType: 'poi.business',
          stylers: [{visibility: 'off'}]
        },
        {
          featureType: 'transit',
          elementType: 'labels.icon',
          stylers: [{visibility: 'off'}]
        }
      ],
    night: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        },
        {
            elementType: "labels.icon",
            stylers: [{
                visibility: "off"
            }]
        }
      ],
    daytime: [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
           "color": "#e9e9e9"
     }, {
           "lightness": 17
     }]
     }, {
         "featureType": "landscape",
         "elementType": "geometry",
         "stylers": [{
             "color": "#f5f5f5"
         }, {
             "lightness": 20
         }]
     }, {
         "featureType": "road.highway",
         "elementType": "geometry.fill",
         "stylers": [{
             "color": "#ffffff"
         }, {
             "lightness": 17
         }]
     }, {
         "featureType": "road.highway",
         "elementType": "geometry.stroke",
         "stylers": [{
             "color": "#ffffff"
         }, {
             "lightness": 29
         }, {
             "weight": 0.2
         }]
     }, {
         "featureType": "road.arterial",
         "elementType": "geometry",
         "stylers": [{
             "color": "#ffffff"
         }, {
             "lightness": 18
         }]
     }, {
         "featureType": "road.local",
         "elementType": "geometry",
         "stylers": [{
             "color": "#ffffff"
         }, {
             "lightness": 18
         }]
     }, {
         "featureType": "poi",
         "elementType": "geometry",
         "stylers": [{
             "color": "#f5f5f5"
         }, {
             "lightness": 21
         }]
     }, {
         "featureType": "poi.park",
         "elementType": "geometry",
         "stylers": [{
             "color": "#d5d5d5"
         }, {
             "lightness": 21
         }]
     }, {
         "elementType": "labels.text.stroke",
         "stylers": [{
             "visibility": "on"
         }, {
             "color": "#f8f8f8"
         }, {
             "lightness": 25
         }]
     }, {
         "elementType": "labels.text.fill",
         "stylers": [{
             "saturation": 36
         }, {
             "color": "#222222"
         }, {
             "lightness": 30
         }]
     }, {
         "elementType": "labels.icon",
         "stylers": [{
             "visibility": "off"
         }]
     }, {
         "featureType": "transit",
         "elementType": "geometry",
         "stylers": [{
             "color": "#f5f5f5"
         }, {
             "lightness": 19
         }]
     }, {
         "featureType": "administrative",
         "elementType": "geometry.fill",
         "stylers": [{
             "color": "#fefefe"
         }, {
             "lightness": 10
         }]
     }, {
         "featureType": "administrative",
         "elementType": "geometry.stroke",
         "stylers": [{
             "color": "#fefefe"
         }, {
             "lightness": 17
         }, {
             "weight": 1.2
         }]
     }],
    color: [
        {
            "featureType": "water",
            "stylers": [{
                "saturation": 43
            }, {
                "lightness": -11
            }, {
                "hue": "#0088ff"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [{
                "hue": "#ff0000"
            }, {
                "saturation": -100
            }, {
                "lightness": 99
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#808080"
            }, {
                "lightness": 54
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ece2d9"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ccdca1"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#767676"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#b8cb93"
            }]
        }, {
            "featureType": "poi.park",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.sports_complex",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.medical",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.business",
            "stylers": [{
                "visibility": "simplified"
            }]
        }
    ]
};

