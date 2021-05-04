let users=[];
$(document).ready(function(){
    $('.header').height($(window).height());
    
})
$(".navbar a").click(function(){
    $("body,html").animate({
     scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
    
   })
// function setSignIn(levelType){
//     let interface=document.getElementById('interface');
//     interface.innerHTML=' <header class="header2">\
//     <div class="overlay">\
//      <class="container">\
//      <div class="description ">\
//     <div id="signin">\
//     <div class="row">\
//       <div class="col">\
//         <input type="text" class="form-control" name="firstName" placeholder="First name">\
//       </div>\
//       </div>\
//       <div class="row">\
//       <div class="col">\
//         <input type="text" class="form-control" name="lastName" placeholder="Last name">\
//       </div>\
//     </div>\
//     <div class="row">\
//     <button id="click_setGame" class="btn btn-primary mb-2">PLAY</button>\
//     </div>\
//   </div> \
//   </div>\
//   </div>\
//   </div>\
//   </div>\
//   </div>\
//   </header>'
//   document.getElementById('click_setGame').addEventListener('click',()=>{
//     users.push([document.querySelector('input[name=firstName]').value,document.querySelector('input[name=lastName]').value])
//     setGame(levelType)
//   });
// }
// function setScore(){
//     let score=0
//     document.getElementById("score").innerHTML ="Score: "+score.toString();
// }
function setTimer(){
    // Set the date we're counting down to
    let countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

    // Update the count down every 1 second
    let x = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("timer").innerHTML ="Time Left: "+ days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
    }, 1000);
}
setTimer();
// function openNav() {
//     document.getElementById("mySidebar").style.width = "250px";
//     document.getElementById("topnav").style.marginLeft = "250px";
//   }
  
//   function closeNav() {
//     document.getElementById("mySidebar").style.width = "0";
//     document.getElementById("topnav").style.marginLeft= "0";
// }

// async function setGame(levelType){
//     let interface=document.getElementById('interface');
//     interface.innerHTML=' <div id="mySidebar" class="sidebar">\
//       <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>\
//       <a href="#">Pause</a>\
//       <a href="#">Resume</a>\
//       <a href="#">Restart</a>\
//       <a href="#">End Game</a>\
//     </div>\
//     <div id="topnav" class="topnav">\
//     <ul>\
//     <a  id="settings" href="#home">☰ Settings</a>\
//     <a href="#news">action1</a>\
//     <a href="#contact">action2</a>\
//     <a href="#about">action3</a>\
//     <a href="#score" id="score"  >Score:</a>\
//     <a href="#about" class="rounded bg-gradient-4 timer" id="timer" ></a>\
//     </ul>\
//     </div>\
//     </div><div id="map" class="map"></div>'
//     document.getElementById('settings').addEventListener('click',openNav);
//     switch(levelType) {
//         case 'easy':
//            setMapGame();
//         //    alert("Your Misiion is:xxxxxx")
//             break;
//         case 'medium':
//             break;
//         case 'hard':
//             break;

//     }
//     setTimer();
//     setScore();
// }

function setMapGame(){
    function degrees_to_radians(degrees) {
        var pi = Math.PI;
        return degrees * (pi / 180);
    }


var Bomb = /*@__PURE__*/(function (Control) {
    function Bomb(opt_options) {
      var options = opt_options || {};

      var main = document.createElement('button');
      main.innerHTML = '<i class="fa-plus"></i>'
      main.className='btnpanel rounded' 
      main.onclick=()=>{
        document.getElementById('bomb').style.display = 'inline';
        document.getElementById('pickColor').style.display = 'inline';
        document.getElementById('draw').style.display = 'inline';
        document.getElementById('paintBrush').style.display = 'inline';
      }
  
      var bomb = document.createElement('button');
      bomb.innerHTML = '<i class="fas fa-bomb fa-2x"></i>'
      bomb.className='btnpanel rounded' 
      bomb.id='bomb'
    //   button.onclick=()=>{document.getElementById()}

      var pickColor = document.createElement('div');
      pickColor.id='pickColor'
      pickColor.innerHTML = ''//<i class="fas fa-bomb"></i>'
      pickColor.className='btnpanel rounded' 
     //   button.onclick=()=>{document.getElementById()}


       
      var draw = document.createElement('button');
      draw.innerHTML = '<svg  focusable="false" data-prefix="fas" data-icon="draw-polygon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-draw-polygon fa-w-14 fa-3x"><path fill="currentColor" d="M384 352c-.35 0-.67.1-1.02.1l-39.2-65.32c5.07-9.17 8.22-19.56 8.22-30.78s-3.14-21.61-8.22-30.78l39.2-65.32c.35.01.67.1 1.02.1 35.35 0 64-28.65 64-64s-28.65-64-64-64c-23.63 0-44.04 12.95-55.12 32H119.12C108.04 44.95 87.63 32 64 32 28.65 32 0 60.65 0 96c0 23.63 12.95 44.04 32 55.12v209.75C12.95 371.96 0 392.37 0 416c0 35.35 28.65 64 64 64 23.63 0 44.04-12.95 55.12-32h209.75c11.09 19.05 31.49 32 55.12 32 35.35 0 64-28.65 64-64 .01-35.35-28.64-64-63.99-64zm-288 8.88V151.12A63.825 63.825 0 0 0 119.12 128h208.36l-38.46 64.1c-.35-.01-.67-.1-1.02-.1-35.35 0-64 28.65-64 64s28.65 64 64 64c.35 0 .67-.1 1.02-.1l38.46 64.1H119.12A63.748 63.748 0 0 0 96 360.88zM272 256c0-8.82 7.18-16 16-16s16 7.18 16 16-7.18 16-16 16-16-7.18-16-16zM400 96c0 8.82-7.18 16-16 16s-16-7.18-16-16 7.18-16 16-16 16 7.18 16 16zM64 80c8.82 0 16 7.18 16 16s-7.18 16-16 16-16-7.18-16-16 7.18-16 16-16zM48 416c0-8.82 7.18-16 16-16s16 7.18 16 16-7.18 16-16 16-16-7.18-16-16zm336 16c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16z" class=""></path></svg>'
      draw.className='btnpanel rounded'
      draw.id='draw'
      draw.onclick=()=>{
        document.getElementById('form').style.display = 'inline';
        document.getElementById('closeButton').onclick=()=>{
            document.getElementById('form').style.display='none';
        }
    }
 

      var paintBrush = document.createElement('button');
      paintBrush.innerHTML = '<i class="fas fa-palette fa-2x" aria-hidden="true"></i> <input style="display:none;" type="color" value="#ff0000" id="colorWell">'
      paintBrush.className='btnpanel rounded' 
      paintBrush.id='paintBrush'
      paintBrush.onclick=()=>{document.getElementById("colorWell").click(); }

    //   var timer = document.createElement('div');
    //   timer.innerHTML ='<div class="rounded bg-gradient-4 text-white shadow p-5 text-center mb-5" id="timer"></div>'
    //   timer.className='btnpanel' 
    //   timer.onclick=()=>{alert('paintBrush')}


      var element = document.createElement('div');
      element.className = 'ol-unselectable ol-mycontrol';
      element.appendChild(main);
      element.appendChild(bomb);
      element.appendChild(draw);
      element.appendChild(pickColor);
      element.appendChild(paintBrush);
    //   element.appendChild(button4);
  
      Control.call(this, {
        element: element,
        target: options.target,
      });
      setTimer();
    //   button.addEventListener('click', this.handleRotateNorth.bind(this), false);
    }
  
    // if ( Control ) RotateNorthControl.__proto__ = Control;
    Bomb.prototype = Object.create( Control && Control.prototype );
    Bomb.prototype.constructor = Bomb;
  
    Bomb.prototype.handleRotateNorth = function handleRotateNorth () {
      this.getMap().getView().setRotation(0);
    };
  
    return Bomb;
  }(ol.control.Control));

/****************************************/
/*            Basic Map                 */
/****************************************/

// API key at https://www.maptiler.com/cloud/
var key = 'GA7N1mQcvcTE7mnV8sG1';
var attributions =
    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
    '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors<de/a>';

const mapVectorSource = new ol.source.Vector({
    features: []
})
const mapVectorLayer = new ol.layer.Vector({
    source: mapVectorSource,
});
const view=new ol.View({
    // center: center,
    center: [35.217018, 31.771959],
    projection: 'EPSG:4326',
    zoom: 5,
    // minZoom: 1,
    // maxZoom: 20,
});
const map = new ol.Map({
    target: document.getElementById('map'),
    view: view,
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM() //original map
            // source: new ol.source.XYZ({
            //     attributions: attributions,
            //     url: 'https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=' + key,
            //     tileSize: 512,
            // }),
        }), mapVectorLayer],
        controls: ([]) //controls: ol.control.defaults().extend([]),
});

let external_control = new ol.control.Zoom({
    target: document.getElementById('external_control') });
map.addControl(external_control);
external_control = new ol.control.FullScreen({
    target: document.getElementById('external_control') });
map.addControl(external_control);
external_control = new ol.control.OverviewMap({
    target: document.getElementById('external_control') });
map.addControl(external_control);
external_control = new ol.control.Rotate({autoHide:false,
    target: document.getElementById('external_control') });
map.addControl(external_control);
// document.getElementById('rotate-left').addEventListener("click",function() {
//     view.animate({
//       rotation: view.getRotation() + Math.PI / 2
//     });
// });

// document.getElementById('rotate-right').addEventListener("click",function() {
//     view.animate({
//       rotation: view.getRotation() - Math.PI / 2
//     });
// });
external_control = new Bomb({
    target: document.getElementById('external_control') 
});
map.addControl(external_control);

// new ol.control.ZoomToExtent({
//     extent: [
//       813079.7791264898,
//       5929220.284081122,
//       848966.9639063801,
//       5936863.986909639 ],
//   }) 

/****************************************/
/*         Israel Start Icon            */
/****************************************/


// const startMarker = new ol.Feature({
//     geometry: new ol.geom.Point([35.217018, 31.771959]),
// });
// startMarker.setStyle(new ol.style.Style({
//     image: new ol.style.Icon({
//         fill:new ol.style.Fill({
//             color:"white",
//         }),
   
//         src: "./images/jetTransparent.png",//'https://openlayers.org/en/v4.6.5/examples/data/icon.png'//
//         scale:1,
//         // rotation:30,
//         rotateWithView:false,
//     }),
//     // text: new ol.style.Text({
//     //     font: '15px Narkisim, bold',
//     //     text: 'Israel',
//     //     fill: new ol.style.Fill({ color: '#f3f3f3' }),
//     //     stroke: new ol.style.Stroke({
//     //         color: '#002986', width: 3
//     //     })
//     // }),
// }))
// mapVectorSource.addFeature(startMarker);




/****************************************/
/*         Flash Animation              */
/****************************************/

var duration = 3000;
function flash(feature) {
    var start = new Date().getTime();
    var listenerKey = mapVectorLayer.on('postrender', animate);

    function animate(event) {
        var vectorContext = ol.render.getVectorContext(event);
        var frameState = event.frameState;
        var flashGeom = feature.getGeometry().clone();
        var elapsed = frameState.time - start;
        var elapsedRatio = elapsed / duration;
        // radius will be 5 at start and 30 at end.
        var radius = ol.easing.easeOut(elapsedRatio) * 25 + 5;
        var opacity = ol.easing.easeOut(1 - elapsedRatio);

        var style = new ol.style.Style({
            image: new ol.style.Circle({
                radius: radius,
                stroke: new ol.style.Stroke({
                    color: 'rgba(243, 243, 243, ' + opacity + ')',
                    width: 0.25 + opacity,
                }),
            }),
        });

        vectorContext.setStyle(style);
        vectorContext.drawGeometry(flashGeom);
        if (elapsed > duration) {
            ol.Observable.unByKey(listenerKey);
            return;
        }
        // tell OpenLayers to continue postrender animation
        map.render();
    }
}
mapVectorSource.on('addfeature', function (e) {
    flash(e.feature);
});



/****************************************/
/*         Request for Airplanes        */
/****************************************/

function requestForIsraelAirplanes() {

    let a = new Date().getTime();
    let searchA = Math.floor(a / 1000 + 900 + 330 * 60)
    console.log(searchA);
    console.log(a);
    let requestURL = 'https://opensky-network.org/api/states/all?time=' + searchA;
    let request = new XMLHttpRequest();


    request.open('GET', requestURL, true);
    request.responseType = 'json';
    request.onload = function (e) {
        if (request.readyState === 4) {
            if (request.status === 200) {
                // console.log(request.response)
                request.response.states.forEach((el) => {
                    if (el[2] === "Israel" && !mapVectorSource.getFeatureById(parseInt(el[0]))) {
                        // if (!mapVectorSource.getFeatureById(el[0])) {
                        console.log(el);
                        // debugger
                        let airplane = new ol.Feature({
                            geometry: new ol.geom.Point([el[5], el[6]]),
                            _icao24: el[0],
                            _callsign: el[1],
                            _origin_country:el[2],
                            _time_position:el[3],
                            _last_contact:el[4],
                            _longitude:el[5],
                            _latitude:el[6],
                            _baro_altitude:el[7],
                            _on_ground:el[8],
                            _velocity:el[9],
                            _true_track:el[10],
                            _vertical_rate:el[11],
                            _sensors:el[12],
                            _geo_altitude:el[13],
                            _squawk:el[14],
                            _spi:el[15],
                            _position_source:el[16],
                        })
                        airplane.setId(parseInt(el[0]));
                        console.log(airplane);
                        console.log(mapVectorSource.getFeaturesAtCoordinate([el[5], el[6]]));

                        // airplane._icao24 = el[0];
                        // airplane._callsign = el[1];
                        airplane.setStyle(new ol.style.Style({
                            image: new ol.style.Icon({
                                // src: images.airplane,
                                src: "./images/airplane.png",
                                rotation: degrees_to_radians(el[10]),
                                rotateWithView:true,
                            })
                        }))
                        // let lon = 
                        // let lat = el[6]
                        mapVectorSource.addFeature(airplane)
                        // debugger
                    }
                    else { //update coordinates:
                        if (mapVectorSource.getFeatureById(parseInt(el[0]))) {
                            console.log(`airplane: ${el[0]} updated`);
                            mapVectorSource.getFeatureById(parseInt(el[0])).getGeometry().setCoordinates([el[5], el[6]]);
                        }
                    }
                })
            } else {
                console.error(request.statusText);
            }
        }
    }.bind(this);
    request.onerror = function (e) {
        console.error(request.statusText);
    };
    request.send(null);
}
//popup!
var popup = new ol.Overlay({
    element: document.getElementById('popup'),
  });
  map.addOverlay(popup);
  map.on('click', function (evt) {
    var element = popup.getElement();
    var coordinate = evt.coordinate;
    var hdms = ol.coordinate.toStringHDMS(ol.proj.toLonLat(coordinate));//try with airplane!
    console.log(map);//.getFeaturesAtCoordinate(coordinate));

    $(element).popover('dispose');
    popup.setPosition(coordinate);
    $(element).popover({
      container: element,
      placement: 'top',
      animation: false,
      html: true,
      content: '<p>The location you clicked was:</p><code>' + hdms + '</code>',
    });
    $(element).popover('show');
  });

setInterval(requestForIsraelAirplanes, 5000);
map.once('postrender', function(event) {

   console.log("rendered map")
   alert("lala")
});
}

setMapGame();

// requestForIsraelAirplanes();
