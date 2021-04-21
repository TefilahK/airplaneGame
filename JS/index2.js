var key = 'GA7N1mQcvcTE7mnV8sG1';
var attributions =
    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
    '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors<de/a>';

var center = [32,31];
var map = new ol.Map({
  target: document.getElementById('map'),
  view: new ol.View({
    center: center,
    zoom: 10,
    minZoom: 2,
    maxZoom: 19,
  }),
  layers: [
    new ol.layer.Tile({
      // source: new ol.source.OSM()
      source: new ol.source.XYZ({
        attributions: attributions,
        url: 'https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=' + key,
        tileSize: 512,
      }),
    }) ],
});
const marker=new ol.Feature({
  geometry:new ol.geom.Point([32,31]),
})
marker.setStyle(new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 1],
    src: './images/airplane.png',
  })}));


// The polyline string is read from a JSON similiar to those returned
// by directions APIs such as Openrouteservice and Mapbox.
    const polyline=[[32.1,31.1],[32.15,31.15],[32.2,31.2],[32.25,31.25],[32.3,31.3],[32.35,31.35]];
    let g = new ol.Feature({
      factor: 1e6,
      geometry: new ol.geom.LineString([[32.1,31.1],[32.15,31.15],[32.2,31.2],[32.25,31.25],[32.3,31.3],[32.35,31.35]]),
    });
    var route = new ol.format.Polyline({
      factor: 1e6,
    }).readGeometry(g.getGeometry(), {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:3857',
    });
    var routeFeature = new ol.Feature({
      type: 'route',
      geometry: route,
    });
    var geoMarker = new  ol.Feature({
      type: 'geoMarker',
      geometry: new ol.geom.Point(route.getCoordinateAt(0)),
    });
    var startMarker = new  ol.Feature({
      type: 'icon',
      geometry: new  ol.geom.Point(route.getCoordinateAt(0)),
    });
    var endMarker = new  ol.Feature({
      type: 'icon',
      geometry: new  ol.geom.Point(route.getCoordinateAt(1)),
    });

    var styles = {
      'route': new ol.style.Style({
        stroke: new ol.style.Stroke({
          width: 6,
          color: [237, 212, 0, 0.8],
        }),
      }),
      'icon': new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 1],
          src: './images/airplane.png',
        }),
      }),
      'geoMarker': new  ol.style.Style({
        image: new ol.style.Circle({
          radius: 7,
          fill: new ol.style.Fill({color: 'black'}),
          stroke: new ol.style.Stroke({
            color: 'white',
            width: 2,
          }),
        }),
      }),
    };

    var animating = false;

    var vectorLayer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [routeFeature, geoMarker, startMarker, endMarker],
      }),
      style: function (feature) {
        // hide geoMarker if animation is active
        if (animating && feature.get('type') === 'geoMarker') {
          return null;
        }
        return styles[feature.get('type')];
      },
    });
    
    map.addLayer(vectorLayer);
    vectorLayer.getSource().addFeature(marker);

    var speed, startTime;
    var speedInput = document.getElementById('speed');
    var startButton = document.getElementById('start-animation');

    function moveFeature(event) {
      var vectorContext = ol.render.getVectorContext(event);
      var frameState = event.frameState;

      if (animating) {
        var elapsedTime = frameState.time - startTime;
        var distance = (speed * elapsedTime) / 1e6;

        if (distance >= 1) {
          stopAnimation(true);
          return;
        }

        var currentPoint = new Point(route.getCoordinateAt(distance));
        var feature = new ol.Feature(currentPoint);
        vectorContext.drawFeature(feature, styles.geoMarker);
      }
      // tell OpenLayers to continue the postrender animation
      map.render();
    }

    function startAnimation() {
      if (animating) {
        stopAnimation(false);
      } else {
        animating = true;
        startTime = new Date().getTime();
        speed = speedInput.value;
        startButton.textContent = 'Cancel Animation';
        // hide geoMarker
        geoMarker.changed();
        // just in case you pan somewhere else
        map.getView().setCenter(center);
        vectorLayer.on('postrender', moveFeature);
        map.render();
      }
    }

    function stopAnimation(ended) {
      animating = false;
      startButton.textContent = 'Start Animation';

      // if animation cancelled set the marker at the beginning
      var coord = route.getCoordinateAt(ended ? 1 : 0);
      geoMarker.getGeometry().setCoordinates(coord);
      // remove listener
      vectorLayer.un('postrender', moveFeature);
    }

    startButton.addEventListener('click', startAnimation, false);
