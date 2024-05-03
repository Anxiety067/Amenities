// Leaflet map initialization
var map = L.map("map").setView([28.2550576, 83.9765783], 15);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

//Svar marker = L.marker([28.2550576, 83.9765783]).addTo(map);
var roaddata = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          coordinates: [
            [83.97774420450548, 28.256528863842178],
            [83.9776077698566, 28.25682174474693],
            [83.97727202365394, 28.257303170955822],
            [83.97705269277907, 28.25763072652417],
            [83.97683879268214, 28.257922203858854],
            [83.97676546422832, 28.258111205687428],
            [83.97662464725863, 28.25840704767363],
            [83.97611833970211, 28.258955281942363],
            [83.97570270596344, 28.259426664729745],
            [83.9752733529997, 28.259763081738853],
            [83.97489358907177, 28.26006923015879],
            [83.97465134422112, 28.260283037176663],
            [83.9741140903028, 28.26071819723694],
            [83.97379040010406, 28.260918363405565],
            [83.97354211751133, 28.260993623520733],
            [83.97347355104205, 28.261047041326563],
            [83.9728508355168, 28.261233642560967],
            [83.97215729992274, 28.26150796373163],
            [83.97236925780163, 28.26177712910902],
            [83.9728881535321, 28.26211295009395],
            [83.97336516188244, 28.262520911414796],
            [83.97325083960715, 28.262963030871106],
            [83.97330844026595, 28.263339142350475],
            [83.9735950566897, 28.26359807978183],
            [83.97399862572178, 28.26387872099845],
            [83.97440670477681, 28.26423078436285],
            [83.97449211025878, 28.264377619179427],
            [83.97453933067095, 28.264554693079745],
            [83.97463726856563, 28.264780406491653],
            [83.97474399953097, 28.265263991420255],
            [83.97492651644444, 28.26572225650294],
            [83.97501330276617, 28.266114090109767],
            [83.97526709257482, 28.2663927239427],
            [83.97563456170099, 28.266620495725746],
            [83.97588508387048, 28.26687622395174],
            [83.97596318089285, 28.26707501680832],
            [83.97605409170956, 28.267430705807385],
            [83.9760515657814, 28.267892770532896],
            [83.97600369836289, 28.268159382790998],
            [83.97604953213994, 28.268413243683852],
            [83.97613112606848, 28.268509229487123],
            [83.97657148138711, 28.268829592122202],
            [83.97669238415591, 28.268967731321084],
            [83.97675646802287, 28.2691441304637],
            [83.97674619998247, 28.269316158302274],
            [83.97661146586836, 28.26941678907488],
            [83.97639849662357, 28.269561976226015],
            [83.9760879679738, 28.26982143360624],
            [83.9759292110902, 28.27001165565744],
            [83.97590558267876, 28.27015659341197],
            [83.9760784909488, 28.270372606716847],
            [83.97641257809306, 28.27075479352868],
            [83.9768167160077, 28.271123009719503],
            [83.97750374505904, 28.271480339203308],
            [83.97792707869519, 28.27146745811173],
            [83.97801796826423, 28.271521457290135],
            [83.97818441436334, 28.271439768321827],
            [83.97873244776042, 28.271556963896813],
            [83.97906452217615, 28.27163100455884],
            [83.97942639223447, 28.27160071987707],
            [83.97988560109638, 28.271358207070236],
            [83.98006078371736, 28.27108285392748],
            [83.98011462186918, 28.27089733802262],
            [83.98002871798474, 28.270617831932498],
            [83.9797560358989, 28.270148408329916],
            [83.97953118557393, 28.269967092282542],
            [83.97932882180396, 28.26943456072891],
            [83.97909449131214, 28.268968060426232],
            [83.97897668893523, 28.268600115967303],
            [83.97904691271094, 28.268301863121366],
            [83.97916621433808, 28.26795040932673],
            [83.97932928144877, 28.267584220085155],
            [83.97945264539823, 28.267253210153726],
            [83.9795918075842, 28.26686593483211],
            [83.97967960911114, 28.266559219703225],
            [83.97973933566783, 28.266310172342926],
            [83.97975530603873, 28.265934195325926],
            [83.97977414753035, 28.26555992752165],
            [83.97980251492186, 28.265003577917682],
            [83.97988860503949, 28.26437782158017],
            [83.97986654903991, 28.264122971740946],
            [83.9797142158875, 28.263562014404897],
            [83.97954582973915, 28.2629987598597],
            [83.97939535539422, 28.262512833852128],
            [83.97940737817936, 28.26219210396313],
            [83.97950369191557, 28.261819750067403],
            [83.97951343287968, 28.26112701323312],
            [83.980001403171, 28.26043655591775],
            [83.98059697137217, 28.259628027732944],
            [83.98082136391008, 28.259322424682637],
            [83.98110637473576, 28.258857468829802],
            [83.9811803613901, 28.25854583632257],
            [83.9812619749942, 28.25805256827202],
            [83.98138109658368, 28.25761731935893],
            [83.98155303124844, 28.25729905423671],
            [83.9817995290174, 28.25682612636335],
            [83.9819276738591, 28.256475050396602],
            [83.98209631045728, 28.256066560321187],
            [83.98235854964264, 28.255322835914683],
            [83.98258594929149, 28.25484588702726],
            [83.98301717938762, 28.254341491341563],
            [83.98347903652734, 28.25390162233741],
            [83.98399946781655, 28.253573889171946],
            [83.98450668469854, 28.253273285483886],
            [83.98479990353087, 28.253030751486065],
            [83.98500476516227, 28.252724620898405],
            [83.98527500769995, 28.25233113749391],
            [83.98549021552958, 28.251996193964047],
            [83.98583066638253, 28.25147235510572],
            [83.9860456758588, 28.25095945594964],
            [83.986134431273, 28.250615661045984],
            [83.98633195474724, 28.250099745993964],
            [83.98651307511778, 28.24965359974786],
            [83.98667571209603, 28.249200047826676],
            [83.98676524293586, 28.248939567109062],
            [83.98668370850038, 28.248661426733676],
            [83.98633797555465, 28.2483747680307],
            [83.98628451338988, 28.248500897706293],
            [83.98626586439298, 28.248654950761633],
            [83.9858593609519, 28.24905117310631],
            [83.98538848463824, 28.249529955640924],
            [83.98509145185432, 28.249792561499746],
            [83.98459682082176, 28.25015417322517],
            [83.98401643033657, 28.250625363449316],
            [83.98331572459381, 28.251095531017782],
            [83.98292033569845, 28.251394018082237],
            [83.98259955379928, 28.25172269310316],
            [83.98224706996393, 28.252279859967288],
            [83.98171042643963, 28.252716726352276],
            [83.98129212371629, 28.253083102507517],
            [83.98023653719423, 28.254023931094338],
            [83.97942760034783, 28.254705623539962],
            [83.97907007119136, 28.2550665337171],
            [83.97861486450017, 28.255327655461883],
            [83.97830985570789, 28.255611804928364],
            [83.97805443464154, 28.25592454920519],
            [83.977751013395, 28.256514442967998],
          ],
          type: "LineString",
        },
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          coordinates: [
            [83.97675697907204, 28.25806013994307],
            [83.97601185714433, 28.25775377623131],
            [83.97574699217148, 28.257623791824983],
            [83.97531023263917, 28.25733984345368],
            [83.9747508192824, 28.256929702173593],
            [83.97461897295989, 28.256943204972856],
            [83.97447892658113, 28.257036180259163],
            [83.97435674001798, 28.256966145016207],
            [83.97374129955824, 28.256529774052566],
            [83.97362358047872, 28.25634038652109],
            [83.97336134546407, 28.256068005127005],
            [83.97321151768472, 28.256149084194362],
            [83.97300828093296, 28.256337988864615],
            [83.97278666505616, 28.256614234556864],
            [83.97263756171787, 28.256819120789828],
            [83.97259851443727, 28.256957568015537],
            [83.97250112386695, 28.25728510534252],
            [83.97223776051544, 28.257570971389654],
            [83.97234101596524, 28.25773497939609],
            [83.97254907241597, 28.25800079937163],
            [83.97281788509667, 28.25835532369811],
            [83.97328245817852, 28.258733729668805],
            [83.97313004812997, 28.25890554054216],
            [83.97290039360422, 28.259164328416603],
            [83.97286035230445, 28.25958915051767],
            [83.97258896831465, 28.25980073482458],
            [83.97258998507601, 28.259901066345904],
            [83.97243254336166, 28.260131702924525],
            [83.97201690210716, 28.26052578327409],
            [83.97162558023467, 28.260922143419407],
            [83.9720792616954, 28.261369285840075],
            [83.97215732073147, 28.261507940826377],
          ],
          type: "LineString",
        },
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          coordinates: [
            [83.97328025951339, 28.258734746902277],
            [83.9733976935085, 28.25877605567031],
            [83.97367076220269, 28.258836470295904],
            [83.97381528084713, 28.25891633904986],
            [83.97414589213048, 28.25912776900816],
            [83.97417652192007, 28.259310397838675],
            [83.97473855136883, 28.259556080852647],
            [83.97527003229817, 28.25976667551049],
          ],
          type: "LineString",
        },
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          coordinates: [
            [83.97446377938792, 28.264329395285714],
            [83.97453760160676, 28.264297406705893],
            [83.97479184567283, 28.264307340565637],
            [83.97511270394722, 28.264264049178948],
            [83.97554879208292, 28.26419950421571],
            [83.97626240607508, 28.264046454329105],
            [83.97709072481882, 28.26393537266715],
            [83.97771891829984, 28.263821706229436],
            [83.97836291302525, 28.26364522744636],
            [83.97893236258017, 28.26342006412243],
            [83.97958211934315, 28.26312408180293],
          ],
          type: "LineString",
        },
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          coordinates: [
            [83.97676743515478, 28.258105648289444],
            [83.9769145304586, 28.258187671943176],
            [83.97717306835312, 28.258326616124606],
            [83.97735972002431, 28.258433132869698],
            [83.97762069221784, 28.258573038443373],
            [83.97774327161466, 28.258634802871555],
            [83.97757011562447, 28.258860039324475],
            [83.97715050923932, 28.25940339549534],
            [83.97694146687718, 28.259302250296457],
            [83.97663454397417, 28.259701687561204],
            [83.97582852718921, 28.259282845358058],
          ],
          type: "LineString",
        },
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          coordinates: [
            [83.98633734972321, 28.248378976835127],
            [83.9862884050711, 28.248288352714326],
            [83.98631078327122, 28.24806547059589],
            [83.98643690481879, 28.24779857796939],
            [83.98667384960186, 28.247362185498375],
            [83.98686417897767, 28.24707198254835],
            [83.98718002568415, 28.246793131030415],
            [83.98761674043482, 28.24644739293626],
            [83.9879179803379, 28.24622990121439],
            [83.98819878117007, 28.246051236006863],
            [83.98885563073878, 28.24586671436481],
            [83.98893925694779, 28.24576823941689],
            [83.98902103043025, 28.245472893694426],
            [83.9891143079617, 28.244921708452267],
          ],
          type: "LineString",
        },
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          coordinates: [
            [83.97216207943637, 28.26151100762999],
            [83.971878796527, 28.261722548696667],
            [83.97142031625509, 28.262030785811945],
            [83.9708999265647, 28.262191085490798],
            [83.97061631818457, 28.26232492248134],
            [83.97046551069195, 28.26246877872758],
            [83.97044064562283, 28.262538511750876],
            [83.9702836395955, 28.26300466894621],
            [83.96995306342308, 28.26341876890322],
          ],
          type: "LineString",
        },
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          coordinates: [
            [83.97951426948532, 28.261152385971016],
            [83.97936220817002, 28.261089362419042],
            [83.97925278664292, 28.261083222825874],
            [83.97912523436503, 28.26121298933991],
            [83.97901220392862, 28.261299706895173],
            [83.97896980273237, 28.261306121292847],
            [83.97866845959129, 28.26119193426868],
            [83.97857509499823, 28.261132965492322],
            [83.97837361882972, 28.261035571799454],
            [83.97826390844511, 28.261022925526703],
            [83.97814784836908, 28.260887789439238],
            [83.97806375433129, 28.2607719176101],
            [83.97770666800653, 28.26051363561774],
            [83.97751340862675, 28.26052507229153],
            [83.97733375990515, 28.26063100685883],
            [83.97720321968546, 28.260663382848065],
            [83.97692879346914, 28.26064751615762],
            [83.97683938289998, 28.260640756905516],
            [83.97670383006465, 28.2605210078262],
            [83.97643508454917, 28.260390972477424],
            [83.97602946780847, 28.26019717861584],
            [83.97581638018397, 28.260086223020906],
            [83.97544965741554, 28.25985331117718],
            [83.97533702652066, 28.259713190040927],
          ],
          type: "LineString",
        },
      },
    ],
  };

// Create a GeoJSON layer and add it to the map
L.geoJSON(roaddata, {
  style: {
    color: "grey", // set the color of the road
    weight: 3, // set the width of the road
  },
}).addTo(map);

// Define custom icon for bank
var customIconbank = L.icon({
  iconUrl: "bank.png",
  iconSize: [40, 40],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

//geojosn feature
var geojsonbank = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9773385, 28.2572426] },
      properties: {
        Amenities: "Bank",
        Name: "Lumbini bikas bank ltd",
        Opening_Ti: "10:00:00.000+05:45",
        Closing_Ti: "17:00:00.000+05:45",
        Contact_No: 0,
        _Locaton_l: 28.2572426,
        _Locaton_1: 83.9773385,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9725433, 28.2609439] },
      properties: {
        Amenities: "Bank",
        Name: "Prime bank ltd",
        Opening_Ti: "10:00:00.000+05:45",
        Closing_Ti: "16:00:00.000+05:45",
        Contact_No: 6144416,
        _Locaton_l: 28.2609439,
        _Locaton_1: 83.9725433,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9721771, 28.2616779] },
      properties: {
        Amenities: "Bank",
        Name: "Machhapuchhre Bank",
        Opening_Ti: "10:00:00.000+05:45",
        Closing_Ti: "15:00:00.000+05:45",
        Contact_No: 97715970555,
        _Locaton_l: 28.2616779,
        _Locaton_1: 83.9721771,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9716701, 28.260842] },
      properties: {
        Amenities: "Bank",
        Name: "NIMB Ltd",
        Opening_Ti: "09:00:00.000+05:45",
        Closing_Ti: "16:00:00.000+05:45",
        Contact_No: 0,
        _Locaton_l: 28.260842,
        _Locaton_1: 83.9716701,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9723997, 28.2613548] },
      properties: {
        Amenities: "Bank",
        Name: "Muktinath Bikas Bank",
        Opening_Ti: "10:00:00.000+05:45",
        Closing_Ti: "16:00:00.000+05:45",
        Contact_No: 61445331,
        _Locaton_l: 28.2613548,
        _Locaton_1: 83.9723997,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.972896, 28.2611489] },
      properties: {
        Amenities: "Bank",
        Name: "Himalayan Bank Limited",
        Opening_Ti: "10:00:00.000+05:45",
        Closing_Ti: "16:00:00.000+05:45",
        Contact_No: 61443430,
        _Locaton_l: 28.2611489,
        _Locaton_1: 83.972896,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9797296, 28.2633318] },
      properties: {
        Amenities: "Bank",
        Name: "Garima Bikas Bank",
        Opening_Ti: "10:00:00.000+05:45",
        Closing_Ti: "16:00:00.000+05:45",
        Contact_No: 0,
        _Locaton_l: 28.2633318,
        _Locaton_1: 83.9797296,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9786651, 28.2554831] },
      properties: {
        Amenities: "Bank",
        Name: "NIC Asia bank Ltd",
        Opening_Ti: "10:00:00.000+05:45",
        Closing_Ti: "16:00:00.000+05:45",
        Contact_No: 0,
        _Locaton_l: 28.25542,
        _Locaton_1: 83.97825,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9867831, 28.248605] },
      properties: {
        Amenities: "Bank",
        Name: "Kamana sewa bikash bank",
        Opening_Ti: "10:00:00.000+05:45",
        Closing_Ti: "16:00:00.000+05:45",
        Contact_No: 61444600,
        _Locaton_l: 28.248605,
        _Locaton_1: 83.9867831,
      },
    },
  ],
};

// Function to add or remove the GeoJSON layer based on checkbox state
 function toggleBankMarkers(checked) {
  if (checked) {
    // Add GeoJSON layer with markers using custom icon
    bankMarkers.addTo(map);
  } else {
    // Remove GeoJSON layer from the map
    map.removeLayer(bankMarkers);
  }
}

// Add GeoJSON layer with markers using custom icon
var bankMarkers = L.geoJSON(geojsonbank, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: customIconbank }).bindPopup(
      "<img src='bank.png' alt='Bank Image' style='width:100%;max-width:200px;height:auto;'>" +
      "Amenities:" +
      feature.properties.Amenities +
      "<br>Name:   " +
      feature.properties.Name +
      "<br>Opening_Time:   " +
      feature.properties.Opening_Ti +
      "<br>Closing_Time:   " +
      feature.properties.Closing_Ti +
      "<br>Contact No:   " +
      feature.properties.Contact_No
    );
  },
});

// Initially add GeoJSON layer with markers using custom icon
toggleBankMarkers(false);

// Event listener for checkbox change
var checkbox = document.getElementById('bankCheckbox'); // Assuming 'bankCheckbox' is the ID of your checkbox
checkbox.addEventListener('change', function () {
  toggleBankMarkers(this.checked);
});

var customIconcafe = L.icon({
  iconUrl: "cafe.png",
  iconSize: [25, 25],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

var geojsoncafe = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9768451, 28.258329] },
      properties: {
        Amenities: "Cafe",
        Name: "The roof top restaurants",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "20:00:00.000+05:45",
        Contact_No: 9803781502,
        _Locaton_l: 28.258329,
        _Locaton_1: 83.9768451,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9717883, 28.2607567] },
      properties: {
        Amenities: "Cafe",
        Name: "Olive restaurant",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "22:00:00.000+05:45",
        Contact_No: 61440997,
        _Locaton_l: 28.2607567,
        _Locaton_1: 83.9717883,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9721743, 28.2612382] },
      properties: {
        Amenities: "Cafe",
        Name: "Kausi rooftop restaurant",
        Opening_Ti: "10:00:00.000+05:45",
        Closing_Ti: "21:00:00.000+05:45",
        Contact_No: 9762862839,
        _Locaton_l: 28.2612382,
        _Locaton_1: 83.9721743,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9750883, 28.2597734] },
      properties: {
        Amenities: "Cafe",
        Name: "Samriddhi Cafe and Restaurant",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "20:30:00.000+05:45",
        Contact_No: 9846039923,
        _Locaton_l: 28.2597734,
        _Locaton_1: 83.9750883,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9766993, 28.2596371] },
      properties: {
        Amenities: "Cafe",
        Name: "Nero Cafe and Restaurant",
        Opening_Ti: "08:00:00.000+05:45",
        Closing_Ti: "19:00:00.000+05:45",
        Contact_No: 9825191216,
        _Locaton_l: 28.2596371,
        _Locaton_1: 83.9766993,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9739993, 28.2609756] },
      properties: {
        Amenities: "Cafe",
        Name: "Hot 'N' Spicy Foodland Cafe",
        Opening_Ti: "08:00:00.000+05:45",
        Closing_Ti: "20:30:00.000+05:45",
        Contact_No: 9846025186,
        _Locaton_l: 28.2609756,
        _Locaton_1: 83.9739993,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9769454, 28.2582932] },
      properties: {
        Amenities: "Cafe",
        Name: "Mongolian Mo Mo Resturant",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "21:00:00.000+05:45",
        Contact_No: 9822502224,
        _Locaton_l: 28.2582932,
        _Locaton_1: 83.9769454,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.972865, 28.2613117] },
      properties: {
        Amenities: "Cafe",
        Name: "Poon Momo Restaurant",
        Opening_Ti: "08:00:00.000+05:45",
        Closing_Ti: "21:00:00.000+05:45",
        Contact_No: 9846708111,
        _Locaton_l: 28.2613117,
        _Locaton_1: 83.972865,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9721229, 28.2616693] },
      properties: {
        Amenities: "Cafe",
        Name: "The Chowk Cafe",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "20:00:00.000+05:45",
        Contact_No: 9824133260,
        _Locaton_l: 28.2616693,
        _Locaton_1: 83.9721229,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9725285, 28.2621169] },
      properties: {
        Amenities: "Cafe",
        Name: "Area One Nine cafe",
        Opening_Ti: "06:00:00.000+05:45",
        Closing_Ti: "22:00:00.000+05:45",
        Contact_No: 9704281733,
        _Locaton_l: 28.2621169,
        _Locaton_1: 83.9725285,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9797048, 28.2633753] },
      properties: {
        Amenities: "Cafe",
        Name: "The Chowk Cafe",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "19:00:00.000+05:45",
        Contact_No: 9816686956,
        _Locaton_l: 28.2633753,
        _Locaton_1: 83.9797048,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9886793, 28.2458951] },
      properties: {
        Amenities: "Cafe",
        Name: "Brown Beans cafe",
        Opening_Ti: "08:00:00.000+05:45",
        Closing_Ti: "22:00:00.000+05:45",
        Contact_No: 9820629939,
        _Locaton_l: 28.2458951,
        _Locaton_1: 83.9886793,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9861233, 28.2503184] },
      properties: {
        Amenities: "Cafe",
        Name: "The Lantern cafe nd restro",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "20:30:00.000+05:45",
        Contact_No: 0,
        _Locaton_l: 28.2503184,
        _Locaton_1: 83.9861233,
      },
    },
  ],
};

// Function to add or remove the GeoJSON layer based on checkbox state
function toggleCafeMarkers(checked) {
  if (checked) {
    // Add GeoJSON layer with markers using custom icon
    cafeMarkers.addTo(map);
  } else {
    // Remove GeoJSON layer from the map
    map.removeLayer(cafeMarkers);
  }
}

// Add GeoJSON layer with markers using custom icon for cafe
var cafeMarkers = L.geoJSON(geojsoncafe, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: customIconcafe }).bindPopup(
      "<img src='cafe.png' alt='Cafe Image' style='width:100%;max-width:200px;height:auto;'>" +
      "Amenities:" +
      feature.properties.Amenities +
      "<br>Name:   " +
      feature.properties.Name +
      "<br>Opening_Time:   " +
      feature.properties.Opening_Ti +
      "<br>Closing_Time:   " +
      feature.properties.Closing_Ti +
      "<br>Contact No:   " +
      feature.properties.Contact_No
    );
  },
});

// Initially add GeoJSON layer with markers using custom icon for cafe
toggleCafeMarkers(false);

// Event listener for checkbox change
var checkbox = document.getElementById('cafeCheckbox'); // Assuming 'cafeCheckbox' is the ID of your checkbox
checkbox.addEventListener('change', function () {
  toggleCafeMarkers(this.checked);
});


// Define custom icon for futsal
var customIconFutsal = L.icon({
  iconUrl: "futsal.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

var geojsonFutsal = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [83.9736613, 28.2590814] },
      "properties": {
        "Amenities": "Futsal",
        "Name": "Miras futsal",
        "Opening_Time": "06:00:00.000+05:45",
        "Closing_Time": "19:00:00.000+05:45",
        "Contact_No": 9806602731,
        "_Locaton_l": 28.2590814,
        "_Locaton_1": 83.9736613
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [83.985838, 28.2510946] },
      "properties": {
        "Amenities": "Futsal",
        "Name": "Chin Futsal",
        "Opening_Time": "06:00:00.000+05:45",
        "Closing_Time": "19:00:00.000+05:45",
        "Contact_No": 61440122,
        "_Locaton_l": 28.2510946,
        "_Locaton_1": 83.985838
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [83.96623, 28.2655495] },
      "properties": {
        "Amenities": "Futsal",
        "Name": "Moon Futsal",
        "Opening_Time": "06:00:00.000+05:45",
        "Closing_Time": "20:00:00.000+05:45",
        "Contact_No": 981926604,
        "_Locaton_l": 28.2655495,
        "_Locaton_1": 83.96623
      }
    }
  ]
};

// Function to add or remove the GeoJSON layer based on checkbox state
function toggleFutsalMarkers(checked) {
  if (checked) {
    // Add GeoJSON layer with futsal markers using custom icon
    futsalMarkers.addTo(map);
  } else {
    // Remove GeoJSON layer of futsal from the map
    map.removeLayer(futsalMarkers);
  }
}

// Add GeoJSON layer with markers using custom icon for futsal
var futsalMarkers = L.geoJSON(geojsonFutsal, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: customIconFutsal }).bindPopup(
      "<img src='futsal.png' alt='Futsal Image' style='width:100%;max-width:200px;height:auto;'>" +
      "Amenities:" +
      feature.properties.Amenities +
      "<br>Name:   " +
      feature.properties.Name +
      "<br>Opening Time:   " +
      feature.properties.Opening_Time +
      "<br>Closing Time:   " +
      feature.properties.Closing_Time +
      "<br>Contact No:   " +
      feature.properties.Contact_No
    );
  },
});

// Initially add GeoJSON layer with markers using custom icon for futsal
toggleFutsalMarkers(false);

// Event listener for checkbox change
var futsalCheckbox = document.getElementById('futsalCheckbox'); // Assuming 'futsalCheckbox' is the ID of your checkbox
futsalCheckbox.addEventListener('change', function () {
  toggleFutsalMarkers(this.checked);
});

// Define custom icon for gym
var customIcongym = L.icon({
  iconUrl: "gym.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

var geojsongym = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9759131, 28.2593894] },
      properties: {
        Amenities: "Gym",
        Name: "The Giant Fitness and Health Club",
        Opening_Ti: "05:00:00.000+05:45",
        Closing_Ti: "21:00:00.000+05:45",
        Contact_No: 9846022716,
        _Locaton_l: 28.2593894,
        _Locaton_1: 83.9759131,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9740917, 28.2567283] },
      properties: {
        Amenities: "Gym",
        Name: "Jay Shiva Shambho Gym and Fitness",
        Opening_Ti: "05:00:00.000+05:45",
        Closing_Ti: "20:00:00.000+05:45",
        Contact_No: 9846023753,
        _Locaton_l: 28.2567283,
        _Locaton_1: 83.9740917,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9837682, 28.2598113] },
      properties: {
        Amenities: "Gym",
        Name: "Open Gym",
        Opening_Ti: "",
        Closing_Ti: "",
        Contact_No: 0,
        _Locaton_l: 28.2598113,
        _Locaton_1: 83.9837682,
      },
    },
  ],
};

// Function to add or remove the GeoJSON layer based on checkbox state
function toggleGymMarkers(checked) {
  if (checked) {
    // Add GeoJSON layer with markers using custom icon
    gymMarkers.addTo(map);
  } else {
    // Remove GeoJSON layer from the map
    map.removeLayer(gymMarkers);
  }
}

// Add GeoJSON layer with markers using custom icon for gym
var gymMarkers = L.geoJSON(geojsongym, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: customIcongym }).bindPopup(
      "<img src='gym.png' alt='Gym Image' style='width:100%;max-width:200px;height:auto;'>" +
      "Amenities:" +
      feature.properties.Amenities +
      "<br>Name:   " +
      feature.properties.Name +
      "<br>Opening_Time:   " +
      feature.properties.Opening_Ti +
      "<br>Closing_Time:   " +
      feature.properties.Closing_Ti +
      "<br>Contact No:   " +
      feature.properties.Contact_No
    );
  },
});

// Initially add GeoJSON layer with markers using custom icon for gym
toggleGymMarkers(false);

// Event listener for checkbox change
var checkbox = document.getElementById('gymCheckbox'); // Assuming 'gymCheckbox' is the ID of your checkbox
checkbox.addEventListener('change', function () {
  toggleGymMarkers(this.checked);
});

// Define custom icon for pharmacy
var customIconpharmacy = L.icon({
  iconUrl: "pharmacy.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

var geojsonpharmacy = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9728641, 28.2611221] },
      properties: {
        Amenities: "Pharmacy",
        Name: "Shrijana medical health clinic",
        Opening_Ti: "06:30:00.000+05:45",
        Closing_Ti: "20:30:00.000+05:45",
        Contact_No: 64798343,
        _Locaton_l: 28.2611221,
        _Locaton_1: 83.9728641,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9778667, 28.2562688] },
      properties: {
        Amenities: "Pharmacy",
        Name: "Anirag medical clinic",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "21:00:00.000+05:45",
        Contact_No: 9846287960,
        _Locaton_l: 28.2562688,
        _Locaton_1: 83.9778667,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.979802, 28.2630201] },
      properties: {
        Amenities: "Pharmacy",
        Name: "Sharmila medical hall",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "19:30:00.000+05:45",
        Contact_No: 9846031332,
        _Locaton_l: 28.2630201,
        _Locaton_1: 83.979802,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9776567, 28.2568177] },
      properties: {
        Amenities: "Pharmacy",
        Name: "Get Well Medical",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "21:00:00.000+05:45",
        Contact_No: 9846077588,
        _Locaton_l: 28.2568177,
        _Locaton_1: 83.9776567,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9769127, 28.2579446] },
      properties: {
        Amenities: "Pharmacy",
        Name: "Samyam Medical Center",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "20:00:00.000+05:45",
        Contact_No: 9856082817,
        _Locaton_l: 28.2579446,
        _Locaton_1: 83.9769127,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9719827, 28.261651] },
      properties: {
        Amenities: "Pharmacy",
        Name: "Aacharya Health Clinic",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "22:00:00.000+05:45",
        Contact_No: 9856080333,
        _Locaton_l: 28.261651,
        _Locaton_1: 83.9719827,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9798557, 28.2646976] },
      properties: {
        Amenities: "Pharmacy",
        Name: "Anup Pharmacy",
        Opening_Ti: "08:00:00.000+05:45",
        Closing_Ti: "20:00:00.000+05:45",
        Contact_No: 9815129826,
        _Locaton_l: 28.2646976,
        _Locaton_1: 83.9798557,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9866212, 28.2479888] },
      properties: {
        Amenities: "Pharmacy",
        Name: "Nawajivan Darshan pharmacy",
        Opening_Ti: "06:00:00.000+05:45",
        Closing_Ti: "19:00:00.000+05:45",
        Contact_No: 9856017824,
        _Locaton_l: 28.2479888,
        _Locaton_1: 83.9866212,
      },
    },
  ],
};

// Function to add or remove the GeoJSON layer based on checkbox state
function togglePharmacyMarkers(checked) {
  if (checked) {
    // Add GeoJSON layer with markers using custom icon
    pharmacyMarkers.addTo(map);
  } else {
    // Remove GeoJSON layer from the map
    map.removeLayer(pharmacyMarkers);
  }
}

// Add GeoJSON layer with markers using custom icon for pharmacy
var pharmacyMarkers = L.geoJSON(geojsonpharmacy, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: customIconpharmacy }).bindPopup(
      "<img src='pharmacy.png' alt='Pharmacy Image' style='width:100%;max-width:200px;height:auto;'>" +
      "Amenities:" +
      feature.properties.Amenities +
      "<br>Name:   " +
      feature.properties.Name +
      "<br>Opening_Time:   " +
      feature.properties.Opening_Ti +
      "<br>Closing_Time:   " +
      feature.properties.Closing_Ti +
      "<br>Contact No:   " +
      feature.properties.Contact_No
    );
  },
});

// Initially add GeoJSON layer with markers using custom icon for pharmacy
togglePharmacyMarkers(false);

// Event listener for checkbox change
var checkbox = document.getElementById('pharmacyCheckbox'); // Assuming 'pharmacyCheckbox' is the ID of your checkbox
checkbox.addEventListener('change', function () {
  togglePharmacyMarkers(this.checked);
});

// Define custom icon for mart
var customIconmart = L.icon({
  iconUrl: "mart.png",
  iconSize: [28, 28],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

var geojsonmart = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.977509, 28.2565991] },
      properties: {
        Amenities: "Mart",
        Name: "New Thapa Store",
        Opening_Ti: "06:00:00.000+05:45",
        Closing_Ti: "08:00:00.000+05:45",
        Contact_No: 61440891,
        _Locaton_l: 28.2565991,
        _Locaton_1: 83.977509,
        Image: "thapa.jpg",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9763729, 28.2586189] },
      properties: {
        Amenities: "Mart",
        Name: "Bindabasini Cheura Udhyog",
        Opening_Ti: "06:30:00.000+05:45",
        Closing_Ti: "19:30:00.000+05:45",
        Contact_No: 9856033262,
        _Locaton_l: 28.2586189,
        _Locaton_1: 83.9763729,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9783211, 28.2558745] },
      properties: {
        Amenities: "Mart",
        Name: "Bhandari Kirana Pasal",
        Opening_Ti: "06:30:00.000+05:45",
        Closing_Ti: "21:30:00.000+05:45",
        Contact_No: 985608851,
        _Locaton_l: 28.2558745,
        _Locaton_1: 83.9783211,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9712798, 28.2606592] },
      properties: {
        Amenities: "Mart",
        Name: "Big Bazar Departmental Store",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "20:00:00.000+05:45",
        Contact_No: 9804111310,
        _Locaton_l: 28.2606592,
        _Locaton_1: 83.9712798,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9718016, 28.2610733] },
      properties: {
        Amenities: "Mart",
        Name: "Baniya Shopping Centre",
        Opening_Ti: "06:00:00.000+05:45",
        Closing_Ti: "19:30:00.000+05:45",
        Contact_No: 61443259,
        _Locaton_l: 28.2610733,
        _Locaton_1: 83.9718016,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9723606, 28.2617751] },
      properties: {
        Amenities: "Mart",
        Name: "Lamachaur Traders",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "20:00:00.000+05:45",
        Contact_No: 9856022230,
        _Locaton_l: 28.2617751,
        _Locaton_1: 83.9723606,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9797901, 28.2660902] },
      properties: {
        Amenities: "Mart",
        Name: "ABC mini mart",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "23:00:00.000+05:45",
        Contact_No: 9817149476,
        _Locaton_l: 28.2660902,
        _Locaton_1: 83.9797901,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9774388, 28.2585982] },
      properties: {
        Amenities: "Mart",
        Name: "Lamachaur Grocery Stores",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "20:00:00.000+05:45",
        Contact_No: 9846043949,
        _Locaton_l: 28.2585982,
        _Locaton_1: 83.9774388,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9866867, 28.2481121] },
      properties: {
        Amenities: "Mart",
        Name: "PKB shopping center",
        Opening_Ti: "06:00:00.000+05:45",
        Closing_Ti: "22:00:00.000+05:45",
        Contact_No: 9866762142,
        _Locaton_l: 28.2481121,
        _Locaton_1: 83.9866867,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9867935, 28.2472722] },
      properties: {
        Amenities: "Mart",
        Name: "Bhaskar shopping center",
        Opening_Ti: "06:00:00.000+05:45",
        Closing_Ti: "22:00:00.000+05:45",
        Contact_No: 9847620796,
        _Locaton_l: 28.2472722,
        _Locaton_1: 83.9867935,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9883206, 28.2462096] },
      properties: {
        Amenities: "Mart",
        Name: "Kyaa",
        Opening_Ti: "07:30:00.000+05:45",
        Closing_Ti: "20:00:00.000+05:45",
        Contact_No: 46030699,
        _Locaton_l: 28.2462096,
        _Locaton_1: 83.9883206,
      },
    },
  ],
};

var shopImageMapping = {
  "New Thapa Store": "./mart images/thapa.jpg",
  "Baniya Shopping Centre": "./mart images/baniya.jpg",
  "Bhandari Kirana Pasal": "./mart images/bandari.jpg",
  "Bindabasini Cheura Udhyog": "./mart images/bindhabasini.jpg",
  "Big Bazar Departmental Store": "./mart images/bigbazar.jpg",
  "Lamachaur Traders": "./mart images/lamchaur.jpg",
  "ABC mini mart": "./mart images/abc.jpg",
  "Lamachaur Grocery Stores": "./mart images/lamachaur.jpg",
  "PKB shopping center": "./mart images/pkb.jpg",
  "Bhaskar shopping center": "./mart images/vaskar.jpg",
  "Kyaa": "./mart images/kyaa.jpg",
};

// Function to add or remove the GeoJSON layer based on checkbox state
function toggleMartMarkers(checked) {
  if (checked) {
    // Add GeoJSON layer with markers using custom icon
    martMarkers.addTo(map);
  } else {
    // Remove GeoJSON layer from the map
    map.removeLayer(martMarkers);
  }
}

// Add GeoJSON layer with markers using custom icon for mart
var martMarkers = L.geoJSON(geojsonmart, {
  pointToLayer: function (feature, latlng) {
    var shopName = feature.properties.Name;
    var imageSrc = shopImageMapping[shopName] || "default.jpg";
    return L.marker(latlng, { icon: customIconmart }).bindPopup(
      "<img src='" +
      imageSrc +
      "' alt='" +
      shopName +
      "' style='width:100%;max-width:200px;height:auto;'>" +
      "<br>Amenities:" +
      feature.properties.Amenities +
      "<br>Name:   " +
      feature.properties.Name +
      "<br>Opening_Time:   " +
      feature.properties.Opening_Ti +
      "<br>Closing_Time:   " +
      feature.properties.Closing_Ti +
      "<br>Contact No:   " +
      feature.properties.Contact_No
    );
  },
});

// Initially add GeoJSON layer with markers using custom icon for mart
toggleMartMarkers(false);

// Event listener for checkbox change
var checkbox = document.getElementById('martCheckbox'); // Assuming 'martCheckbox' is the ID of your checkbox
checkbox.addEventListener('change', function () {
  toggleMartMarkers(this.checked);
});

// Define custom icon for saloon
var customIconsaloon = L.icon({
  iconUrl: "saloon.png",
  iconSize: [28, 28],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

var geojsonsaloon = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9714735, 28.2607026] },
      properties: {
        Amenities: "Saloon",
        Name: "Ankit handsome parlour & sailoon",
        Opening_Ti: "07:30:00.000+05:45",
        Closing_Ti: "19:30:00.000+05:45",
        Contact_No: 9827178929,
        _Locaton_l: 28.2607026,
        _Locaton_1: 83.9714735,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9724316, 28.2613821] },
      properties: {
        Amenities: "Saloon",
        Name: "Sachin haircutting & handsome parlour",
        Opening_Ti: "06:00:00.000+05:45",
        Closing_Ti: "20:30:00.000+05:45",
        Contact_No: 9826135498,
        _Locaton_l: 28.2613821,
        _Locaton_1: 83.9724316,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9777781, 28.2563505] },
      properties: {
        Amenities: "Saloon",
        Name: "Namaskar haircutting saloon & parlour",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "19:30:00.000+05:45",
        Contact_No: 9846483533,
        _Locaton_l: 28.2563505,
        _Locaton_1: 83.9777781,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.972865, 28.2613117] },
      properties: {
        Amenities: "Saloon",
        Name: "Namaskar Barbar Shop",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "19:00:00.000+05:45",
        Contact_No: 9846463533,
        _Locaton_l: 28.2613117,
        _Locaton_1: 83.972865,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.978059, 28.2559813] },
      properties: {
        Amenities: "Saloon",
        Name: "Bethany Barber Shop",
        Opening_Ti: "08:00:00.000+05:45",
        Closing_Ti: "20:00:00.000+05:45",
        Contact_No: 9846082256,
        _Locaton_l: 28.2559813,
        _Locaton_1: 83.978059,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9882958, 28.2461547] },
      properties: {
        Amenities: "Saloon",
        Name: "Barber club",
        Opening_Ti: "09:00:00.000+05:45",
        Closing_Ti: "19:00:00.000+05:45",
        Contact_No: 9806712605,
        _Locaton_l: 28.2461547,
        _Locaton_1: 83.9882958,
      },
    },
  ],
};

// Function to add or remove the GeoJSON layer based on checkbox state
function toggleSaloonMarkers(checked) {
  if (checked) {
    // Add GeoJSON layer with markers using custom icon
    saloonMarkers.addTo(map);
  } else {
    // Remove GeoJSON layer from the map
    map.removeLayer(saloonMarkers);
  }
}

// Add GeoJSON layer with markers using custom icon for saloon
var saloonMarkers = L.geoJSON(geojsonsaloon, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: customIconsaloon }).bindPopup(
      "<img src='saloon.png' alt='Saloon Image' style='width:100%;max-width:200px;height:auto;'>" +
      "Amenities:" +
      feature.properties.Amenities +
      "<br>Name:   " +
      feature.properties.Name +
      "<br>Opening_Time:   " +
      feature.properties.Opening_Ti +
      "<br>Closing_Time:   " +
      feature.properties.Closing_Ti +
      "<br>Contact No:   " +
      feature.properties.Contact_No
    );
  },
});

// Initially add GeoJSON layer with markers using custom icon for saloon
toggleSaloonMarkers(false);

// Event listener for checkbox change
var checkbox = document.getElementById('saloonCheckbox'); // Assuming 'saloonCheckbox' is the ID of your checkbox
checkbox.addEventListener('change', function () {
  toggleSaloonMarkers(this.checked);
});

// Define custom icon for stationery
var customIconstationery = L.icon({
  iconUrl: "stationery.png",
  iconSize: [28, 28],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

var geojsonstationery = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.977592, 28.2569439] },
      properties: {
        Amenities: "Stationery",
        Name: "Lamachour stationery",
        Opening_Ti: "05:45:00.000+05:45",
        Closing_Ti: "20:30:00.000+05:45",
        Contact_No: 9846146264,
        _Locaton_l: 28.2569439,
        _Locaton_1: 83.977592,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9798262, 28.2629564] },
      properties: {
        Amenities: "Stationery",
        Name: "Darsan pustak pasal and stationery",
        Opening_Ti: "08:00:00.000+05:45",
        Closing_Ti: "19:30:00.000+05:45",
        Contact_No: 61444131,
        _Locaton_l: 28.2629564,
        _Locaton_1: 83.9798262,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9776329, 28.2563883] },
      properties: {
        Amenities: "Stationery",
        Name: "Bani Edu Store",
        Opening_Ti: "05:30:00.000+05:45",
        Closing_Ti: "19:00:00.000+05:45",
        Contact_No: 9802381886,
        _Locaton_l: 28.2563883,
        _Locaton_1: 83.9776329,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9776289, 28.2563239] },
      properties: {
        Amenities: "Stationery",
        Name: "Infomax Stationery",
        Opening_Ti: "05:45:00.000+05:45",
        Closing_Ti: "20:00:00.000+05:45",
        Contact_No: 9856013073,
        _Locaton_l: 28.2563239,
        _Locaton_1: 83.9776289,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9722848, 28.2616739] },
      properties: {
        Amenities: "Stationery",
        Name: "Ekta Books Distributors",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "20:00:00.000+05:45",
        Contact_No: 61443409,
        _Locaton_l: 28.2616739,
        _Locaton_1: 83.9722848,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9799913, 28.263174] },
      properties: {
        Amenities: "Stationery",
        Name: "Radha Photo Studio And Stationery",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "19:00:00.000+05:45",
        Contact_No: 9806778503,
        _Locaton_l: 28.263174,
        _Locaton_1: 83.9799913,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9864466, 28.2480784] },
      properties: {
        Amenities: "Stationery",
        Name: "Sunrise stationery nd gift shop",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "19:00:00.000+05:45",
        Contact_No: 9866348425,
        _Locaton_l: 28.2480784,
        _Locaton_1: 83.9864466,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9883418, 28.2460183] },
      properties: {
        Amenities: "Stationery",
        Name: "Ambika cosmetic nd stationery",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "20:00:00.000+05:45",
        Contact_No: 9846196566,
        _Locaton_l: 28.2460183,
        _Locaton_1: 83.9883418,
      },
    },
  ],
};

// Function to add or remove the GeoJSON layer based on checkbox state
function toggleStationeryMarkers(checked) {
  if (checked) {
    // Add GeoJSON layer with markers using custom icon
    stationeryMarkers.addTo(map);
  } else {
    // Remove GeoJSON layer from the map
    map.removeLayer(stationeryMarkers);
  }
}

// Add GeoJSON layer with markers using custom icon for stationery
var stationeryMarkers = L.geoJSON(geojsonstationery, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: customIconstationery }).bindPopup(
      "<img src='stationery.png' alt='Stationery Image' style='width:100%;max-width:200px;height:auto;'>" +
      "Amenities:" +
      feature.properties.Amenities +
      "<br>Name:   " +
      feature.properties.Name +
      "<br>Opening_Time:   " +
      feature.properties.Opening_Ti +
      "<br>Closing_Time:   " +
      feature.properties.Closing_Ti +
      "<br>Contact No:   " +
      feature.properties.Contact_No
    );
  },
});

// Initially add GeoJSON layer with markers using custom icon for stationery
toggleStationeryMarkers(false);

// Event listener for checkbox change
var checkbox = document.getElementById('stationeryCheckbox'); // Assuming 'stationeryCheckbox' is the ID of your checkbox
checkbox.addEventListener('change', function () {
  toggleStationeryMarkers(this.checked);
});

// Define custom icon for tailor
var customIcontailor = L.icon({
  iconUrl: "tailor.png",
  iconSize: [30, 30],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

var geojsontailor = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.977581, 28.2569631] },
      properties: {
        Amenities: "Tailor",
        Name: "Ram Tailors",
        Opening_Ti: "07:30:00.000+05:45",
        Closing_Ti: "18:00:00.000+05:45",
        Contact_No: 9803987591,
        _Locaton_l: 28.2569631,
        _Locaton_1: 83.977581,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9750842, 28.2601478] },
      properties: {
        Amenities: "Tailor",
        Name: "Avinav Bikram Tailors",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "19:00:00.000+05:45",
        Contact_No: 9846421887,
        _Locaton_l: 28.2601478,
        _Locaton_1: 83.9750842,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9718592, 28.261829] },
      properties: {
        Amenities: "Tailor",
        Name: "Aashika tailors",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "19:00:00.000+05:45",
        Contact_No: 9806623690,
        _Locaton_l: 28.261829,
        _Locaton_1: 83.9718592,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9770607, 28.2583502] },
      properties: {
        Amenities: "Tailor",
        Name: "Aasish Fancy nd Tailor",
        Opening_Ti: "07:00:00.000+05:45",
        Closing_Ti: "19:00:00.000+05:45",
        Contact_No: 9800504148,
        _Locaton_l: 28.2583502,
        _Locaton_1: 83.9770607,
      },
    },
  ],
};

// Function to add or remove the GeoJSON layer based on checkbox state
function toggleTailorMarkers(checked) {
  if (checked) {
    // Add GeoJSON layer with markers using custom icon
    tailorMarkers.addTo(map);
  } else {
    // Remove GeoJSON layer from the map
    map.removeLayer(tailorMarkers);
  }
}

// Add GeoJSON layer with markers using custom icon for tailor
var tailorMarkers = L.geoJSON(geojsontailor, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: customIcontailor }).bindPopup(
      "<img src='tailor.png' alt='Tailor Image' style='width:100%;max-width:200px;height:auto;'>" +
      "Amenities:" +
      feature.properties.Amenities +
      "<br>Name:   " +
      feature.properties.Name +
      "<br>Opening_Time:   " +
      feature.properties.Opening_Ti +
      "<br>Closing_Time:   " +
      feature.properties.Closing_Ti +
      "<br>Contact No:   " +
      feature.properties.Contact_No
    );
  },
});

// Initially add GeoJSON layer with markers using custom icon for tailor
toggleTailorMarkers(false);

// Event listener for checkbox change
var checkbox = document.getElementById('tailorCheckbox'); // Assuming 'tailorCheckbox' is the ID of your checkbox
checkbox.addEventListener('change', function () {
  toggleTailorMarkers(this.checked);
});

// Define custom icon for recreation
var customIconrecreation = L.icon({
  iconUrl: "recreation.png",
  iconSize: [30, 30],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

var geojsonrecreation = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9723556, 28.2602985] },
      properties: {
        Amenities: "Recreation",
        Name: "Lamachour church",
        Opening_Ti: "06:00:00.000+05:45",
        Closing_Ti: "07:00:00.000+05:45",
        Contact_No: 61441255,
        _Locaton_l: 28.2602985,
        _Locaton_1: 83.9723556,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9726349, 28.2620069] },
      properties: {
        Amenities: "Recreation",
        Name: "Himaz cinema",
        Opening_Ti: "11:00:00.000+05:45",
        Closing_Ti: "02:00:00.000+05:45",
        Contact_No: 61444444,
        _Locaton_l: 28.2620069,
        _Locaton_1: 83.9726349,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9735, 28.263807] },
      properties: {
        Amenities: "Recreation",
        Name: "Thuli pokhari Jaleshowr shiva temple",
        Opening_Ti: "05:00:00.000+05:45",
        Closing_Ti: "20:00:00.000+05:45",
        Contact_No: 0,
        _Locaton_l: 28.263807,
        _Locaton_1: 83.9735,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9737313, 28.2637482] },
      properties: {
        Amenities: "Recreation",
        Name: "Sahid bhawana smriti park",
        Opening_Ti: "",
        Closing_Ti: "",
        Contact_No: 0,
        _Locaton_l: 28.2637482,
        _Locaton_1: 83.9737313,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.974489, 28.2645608] },
      properties: {
        Amenities: "Recreation",
        Name: "Way to gharmi",
        Opening_Ti: "",
        Closing_Ti: "",
        Contact_No: 0,
        _Locaton_l: 28.2645608,
        _Locaton_1: 83.974489,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.97441, 28.264605] },
      properties: {
        Amenities: "Recreation",
        Name: "Dhiki jato",
        Opening_Ti: "",
        Closing_Ti: "",
        Contact_No: 0,
        _Locaton_l: 28.264605,
        _Locaton_1: 83.97441,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9804684, 28.2626077] },
      properties: {
        Amenities: "Recreation",
        Name: "Ma kalika mandir",
        Opening_Ti: "",
        Closing_Ti: "",
        Contact_No: 0,
        _Locaton_l: 28.2626077,
        _Locaton_1: 83.9804684,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.974352, 28.2645935] },
      properties: {
        Amenities: "Recreation",
        Name: "Dhiki Jato",
        Opening_Ti: "",
        Closing_Ti: "",
        Contact_No: 0,
        _Locaton_l: 28.2645935,
        _Locaton_1: 83.974352,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9755191, 28.266224] },
      properties: {
        Amenities: "Recreation",
        Name: "Pokhara Planetarium and Science Centre",
        Opening_Ti: "06:00:00.000+05:45",
        Closing_Ti: "18:00:00.000+05:45",
        Contact_No: 9856087780,
        _Locaton_l: 28.266224,
        _Locaton_1: 83.9755191,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9760395, 28.2673344] },
      properties: {
        Amenities: "Recreation",
        Name: "Bat Cave",
        Opening_Ti: "05:00:00.000+05:45",
        Closing_Ti: "17:00:00.000+05:45",
        Contact_No: 0,
        _Locaton_l: 28.2673344,
        _Locaton_1: 83.9760395,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9794334, 28.2711542] },
      properties: {
        Amenities: "Recreation",
        Name: "Mahendra Cave",
        Opening_Ti: "05:00:00.000+05:45",
        Closing_Ti: "17:00:00.000+05:45",
        Contact_No: 61440065,
        _Locaton_l: 28.2711542,
        _Locaton_1: 83.9794334,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9885524, 28.246103] },
      properties: {
        Amenities: "Recreation",
        Name: "Gorkha Memorial museum",
        Opening_Ti: "08:00:00.000+05:45",
        Closing_Ti: "16:30:00.000+05:45",
        Contact_No: 66444762,
        _Locaton_l: 28.246103,
        _Locaton_1: 83.9885524,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.989285, 28.2459037] },
      properties: {
        Amenities: "Recreation",
        Name: "KI Singh pool",
        Opening_Ti: "07:30:00.000+05:45",
        Closing_Ti: "17:30:00.000+05:45",
        Contact_No: 9804189870,
        _Locaton_l: 28.2459037,
        _Locaton_1: 83.989285,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9765783, 28.2550576] },
      properties: {
        Amenities: "Recreation",
        Name: "WRC Centre RIC",
        Opening_Ti: "",
        Closing_Ti: "",
        Contact_No: 0,
        _Locaton_l: 28.2550576,
        _Locaton_1: 83.9765783,
      },
    },
  ],
};

// Function to add or remove the GeoJSON layer based on checkbox state
function toggleRecreationMarkers(checked) {
  if (checked) {
    // Add GeoJSON layer with markers using custom icon
    recreationMarkers.addTo(map);
  } else {
    // Remove GeoJSON layer from the map
    map.removeLayer(recreationMarkers);
  }
}

// Add GeoJSON layer with markers using custom icon for recreation
var recreationMarkers = L.geoJSON(geojsonrecreation, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: customIconrecreation }).bindPopup(
      "<img src='recreation.png' alt='Recreation Image' style='width:100%;max-width:200px;height:auto;'>" +
      "Amenities:" +
      feature.properties.Amenities +
      "<br>Name:   " +
      feature.properties.Name +
      "<br>Opening_Time:   " +
      feature.properties.Opening_Ti +
      "<br>Closing_Time:   " +
      feature.properties.Closing_Ti +
      "<br>Contact No:   " +
      feature.properties.Contact_No
    );
  },
});

// Initially add GeoJSON layer with markers using custom icon for recreation
toggleRecreationMarkers(false);

// Event listener for checkbox change
var checkbox = document.getElementById('recreationCheckbox'); // Assuming 'recreationCheckbox' is the ID of your checkbox
checkbox.addEventListener('change', function () {
  toggleRecreationMarkers(this.checked);
});

// Define custom icon for hospital
var customIconhospital = L.icon({
  iconUrl: "hospital.png",
  iconSize: [30, 30],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

var geojsonhospital = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9887892, 28.243845] },
      properties: {
        Amenities: "Hospital",
        Name: "Deep hospital",
        Opening_Ti: "",
        Closing_Ti: "",
        Contact_No: 61580058,
        _Locaton_l: 28.243845,
        _Locaton_1: 83.9887892,
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9815687, 28.2583213] },
      properties: {
        Amenities: "Hospital",
        Name: "Matrishisu MteriHospital",
        Opening_Ti: "",
        Closing_Ti: "",
        Contact_No: 61443144,
        _Locaton_l: 28.2583213,
        _Locaton_1: 83.9815687,
      },
    },
  ],
};

// Function to add or remove the GeoJSON layer based on checkbox state
function toggleHospitalMarkers(checked) {
  if (checked) {
    // Add GeoJSON layer with markers using custom icon
    hospitalMarkers.addTo(map);
  } else {
    // Remove GeoJSON layer from the map
    map.removeLayer(hospitalMarkers);
  }
}

// Add GeoJSON layer with markers using custom icon for hospital
var hospitalMarkers = L.geoJSON(geojsonhospital, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: customIconhospital }).bindPopup(
      "<img src='hospital.png' alt='Hospital Image' style='width:100%;max-width:200px;height:auto;'>" +
      "Amenities:" +
      feature.properties.Amenities +
      "<br>Name:   " +
      feature.properties.Name +
      "<br>Opening_Time:   " +
      feature.properties.Opening_Ti +
      "<br>Closing_Time:   " +
      feature.properties.Closing_Ti +
      "<br>Contact No:   " +
      feature.properties.Contact_No
    );
  },
});

// Initially add GeoJSON layer with markers using custom icon for hospital
toggleHospitalMarkers(false);

// Event listener for checkbox change
var checkbox = document.getElementById('hospitalCheckbox'); // Assuming 'hospitalCheckbox' is the ID of your checkbox
checkbox.addEventListener('change', function () {
  toggleHospitalMarkers(this.checked);
});


// Define custom icon for hostel
var customIconhostel = L.icon({
  iconUrl: "hostel.png",
  iconSize: [30, 30],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

var geojsonhostel = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [83.9794208, 28.254735] },
      "properties": {
        "Amenities": "Hostel",
        "Name": "Kc boys hostel",
        "Opening_Ti": "05:00:00.000+05:45",
        "Closing_Ti": "21:00:00.000+05:45",
        "Contact_No": 984616199,
        "_Locaton_l": 28.254735,
        "_Locaton_1": 83.9794208
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [83.9778149, 28.2606212] },
      "properties": {
        "Amenities": "Hostel",
        "Name": "Mini Hostel",
        "Opening_Ti": "07:00:00.000+05:45",
        "Closing_Ti": "21:00:00.000+05:45",
        "Contact_No": 9829174327,
        "_Locaton_l": 28.2606212,
        "_Locaton_1": 83.9778149
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [83.9775265, 28.2606017] },
      "properties": {
        "Amenities": "Hostel",
        "Name": "Micro Hostel",
        "Opening_Ti": "07:00:00.000+05:45",
        "Closing_Ti": "20:00:00.000+05:45",
        "Contact_No": 9846231302,
        "_Locaton_l": 28.2606017,
        "_Locaton_1": 83.9775265
      }
    }
  ]
};

// Function to add or remove the GeoJSON layer based on checkbox state
function toggleHostelMarkers(checked) {
  if (checked) {
    // Add GeoJSON layer with markers using custom icon
    hostelMarkers.addTo(map);
  } else {
    // Remove GeoJSON layer from the map
    map.removeLayer(hostelMarkers);
  }
}

// Add GeoJSON layer with markers using custom icon for hostel
var hostelMarkers = L.geoJSON(geojsonhostel, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: customIconhostel }).bindPopup(
      "<img src='hostel.png' alt='Hostel Image' style='width:100%;max-width:200px;height:auto;'>" +
      "Amenities:" +
      feature.properties.Amenities +
      "<br>Name:   " +
      feature.properties.Name +
      "<br>Opening_Time:   " +
      feature.properties.Opening_Ti +
      "<br>Closing_Time:   " +
      feature.properties.Closing_Ti +
      "<br>Contact No:   " +
      feature.properties.Contact_No
    );
  },
});

// Initially add GeoJSON layer with markers using custom icon for hostel
toggleHostelMarkers(false);

// Event listener for checkbox change
var checkbox = document.getElementById('hostelCheckbox'); // Assuming 'hostelCheckbox' is the ID of your checkbox
checkbox.addEventListener('change', function () {
  toggleHostelMarkers(this.checked);
});

var searchControl = new L.Control.Search({
  position: "middle", // position of the search control on the map
  layer: L.tileLayer.grayscale({}), // specify the layer to search (in this case, the tile layer)
  propertyName: "name", // field in the layer that contains the search text
  marker: false, // set to true if you want to show a marker for the found location
});

searchControl.on("search:locationfound", function (e) {
  // handle the found location event
  // e.latlng contains the coordinates of the found location
});

map.addControl(searchControl);
