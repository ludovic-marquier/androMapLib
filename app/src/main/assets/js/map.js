// On initialise la latitude et la longitude de Paris (centre de la carte)
var macarte = null;
var markerClusters;
var markers = [];
var spotTab;
var userLocated = false;
var userLat = 48.856614;
var userLong = 2.3522219;
var tabIcon;
var activitySelected = false;
var creatingSpot = false;

window.onload = function(){
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    //getLocation();
    setMapSize();
    displayMap(6);
}

window.onresize = function () {
    setMapSize();
}

function setMapSize(){
    //On recupere la taille da la fenetre
    var width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

//On adapte la taille de la carte a acelle de la fenetre
    document.getElementById('map').style.height = height.toString()+"px";
    document.getElementById('map').style.width = width.toString()+"px";
    document.getElementById('mainscreen').style.height = height.toString()+"px";
    document.getElementById('mainscreen').style.width = width.toString()+"px";
}

function displayMap(zoomLevel){
    // Créer l'objet "macarte" et l'insèrer dans  l'élément HTML qui a l'ID "map"
    document.getElementById("map").style.cursor = "default";
    macarte = L.map('map', {zoomControl: false}).setView([, userLong], zoomLevel);
    markerClusters = new L.MarkerClusterGroup({
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: cluster.getChildCount(),
                className: 'mycluster',
                iconSize: null
            });
        }
    });
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);

    macarte.on('click', function(e){
        var coord = e.latlng;
        var lat = coord.lat;
        var lng = coord.lng;

    });

}
