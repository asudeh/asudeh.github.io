var map = L.map('map-container').setView([37.5613565,-110.040618], 5);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
/*      
      let map = L.map('map-container');
      map.setView([38.116636,-93.5171805], 5);
      let bglayer_Positron = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        maxZoom: 19
      }
      );
      
      bglayer_Positron.addTo(map);
*/

/* This is to mark s/t on Map
L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
*/      
      
      //extend Leaflet to create a GeoJSON layer from a TopoJSON file
      L.TopoJSON = L.GeoJSON.extend({
        addData: function (data) {
          var geojson, key;
          if (data.type === "Topology") {
            for (key in data.objects) {
              if (data.objects.hasOwnProperty(key)) {
                geojson = topojson.feature(data, data.objects[key]);
                L.GeoJSON.prototype.addData.call(this, geojson);
              }
            }
            return this;
          }
          L.GeoJSON.prototype.addData.call(this, data);
          return this;
        }
      });
      L.topoJson = function (data, options) {
        return new L.TopoJSON(data, options);
      };


      //create an empty geojson layer
      //with a style and a popup on click
      var geojson = L.topoJson(null, {
        style: function(feature){
          return {
            color: "#000",
            opacity: 1,
            weight: 1,
            fillColor: '#35495d',
            fillOpacity: 0.8
          }
        },
        onEachFeature: function(feature, layer) {
          layer.bindPopup('<p>'+feature.properties.name+'</p>')
        }
      }).addTo(map);
      //fill: #317581;
      //define a function to get and parse geojson from URL
      async function getGeoData(url) {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)
        return data;
      }
      
      //fetch the geojson and add it to our geojson layer
      //getGeoData('d3-geomap/topojson/world/countries.json').then(data => geojson.addData(data));
      //getGeoData('d3-geomap/topojson/countries/IRN.json').then(data => geojson.addData(data));
      




      var communities = new L.MarkerClusterGroup({
        spiderfyOnMaxZoom: false,
        singleMarkerMode: true,
        // showCoverageOnHover: false,
        // zoomToBoundsOnClick: false,
        iconCreateFunction: function(cluster) {
          return L.divIcon({
            // html: '<i class="fas fa-procedures community community-marker"> <b>' + cluster.getChildCount() + '</b></i>'
            html: '<i class="fas fa-procedures community community-marker"> <b>' + cluster.getChildCount() + '</b></i>'
          });
        }
  
      });

//this function works when there's a click on the map
      //will highlight the layer that the mouse clicked
      function highlightFeature(e) {
        // e indicates the current event
        var layer = e.target; //the target capture the object which the event associates with
        layer.setStyle({
          weight: 2,
          opacity: 0.8,
          color: '#e3e3e3',
          fillColor: '#00ffd9',
          fillOpacity: 0.1
        });
        // bring the layer to the front.
        layer.bringToFront();
        if (e.target.feature.properties.enname == "united states" || e.target.feature.properties.enname == "canada") {
          layer.bringToBack();
        }
      }


      // 3.2.2 zoom to the highlighted feature when the mouse is clicking onto it.
      function zoomToFeature(e) {
        // mymap.fitBounds(e.target.getBounds());
        L.DomEvent.stopPropagation(e);
        $("#hint").text("Click here to the global trend.");
        displayPlace(e.target.feature.properties.enname)
      }

      // 3.2.3 reset the hightlighted feature when the mouse is out of its region.
      function resetHighlight(e) {
        areas.resetStyle(e.target);

      }

      // 3.3 add these event the layer obejct.
      function onEachFeature(feature, layer) {
        layer.on({
          mouseover: highlightFeature,
          click: zoomToFeature,
          mouseout: resetHighlight
        });
      }

      var areas = new L.TopoJSON(datasets[1], {
        style: style,
        onEachFeature: onEachFeature
      }).addTo(mymap);