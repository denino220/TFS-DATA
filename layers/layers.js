ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([4352954.322546, -770837.939240, 4384353.051639, -748900.763739]);
var wms_layers = [];


        var lyr_GoogleLabels_0 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Wilaya_3 = new ol.format.GeoJSON();
var features_Wilaya_3 = format_Wilaya_3.readFeatures(json_Wilaya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wilaya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wilaya_3.addFeatures(features_Wilaya_3);
var lyr_Wilaya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wilaya_3, 
                style: style_Wilaya_3,
                popuplayertitle: "Wilaya",
                interactive: true,
                title: '<img src="styles/legend/Wilaya_3.png" /> Wilaya'
            });
var format_Output_4 = new ol.format.GeoJSON();
var features_Output_4 = format_Output_4.readFeatures(json_Output_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Output_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Output_4.addFeatures(features_Output_4);
var lyr_Output_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Output_4, 
                style: style_Output_4,
                popuplayertitle: "Output",
                interactive: true,
                title: 'Output'
            });
var format_Output_5 = new ol.format.GeoJSON();
var features_Output_5 = format_Output_5.readFeatures(json_Output_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Output_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Output_5.addFeatures(features_Output_5);
var lyr_Output_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Output_5, 
                style: style_Output_5,
                popuplayertitle: "Output",
                interactive: true,
    title: 'Output<br />\
    <img src="styles/legend/Output_5_0.png" /> 0-5 min<br />\
    <img src="styles/legend/Output_5_1.png" /> 5-15 min<br />\
    <img src="styles/legend/Output_5_2.png" /> 15-30 min<br />\
    <img src="styles/legend/Output_5_3.png" /> 30-60 min<br />\
    <img src="styles/legend/Output_5_4.png" /> 1-2 hrs<br />\
    <img src="styles/legend/Output_5_5.png" /> 2-5 hrs<br />\
    <img src="styles/legend/Output_5_6.png" /> >5 hrs<br />'
        });
var format_Output_6 = new ol.format.GeoJSON();
var features_Output_6 = format_Output_6.readFeatures(json_Output_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Output_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Output_6.addFeatures(features_Output_6);
var lyr_Output_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Output_6, 
                style: style_Output_6,
                popuplayertitle: "Output",
                interactive: true,
    title: 'Output<br />\
    <img src="styles/legend/Output_6_0.png" /> from searches_1 to locations_1<br />\
    <img src="styles/legend/Output_6_1.png" /> from searches_10 to locations_1<br />\
    <img src="styles/legend/Output_6_2.png" /> from searches_11 to locations_1<br />\
    <img src="styles/legend/Output_6_3.png" /> from searches_12 to locations_1<br />\
    <img src="styles/legend/Output_6_4.png" /> from searches_13 to locations_1<br />\
    <img src="styles/legend/Output_6_5.png" /> from searches_14 to locations_1<br />\
    <img src="styles/legend/Output_6_6.png" /> from searches_15 to locations_1<br />\
    <img src="styles/legend/Output_6_7.png" /> from searches_16 to locations_1<br />\
    <img src="styles/legend/Output_6_8.png" /> from searches_17 to locations_1<br />\
    <img src="styles/legend/Output_6_9.png" /> from searches_18 to locations_1<br />\
    <img src="styles/legend/Output_6_10.png" /> from searches_19 to locations_1<br />\
    <img src="styles/legend/Output_6_11.png" /> from searches_2 to locations_1<br />\
    <img src="styles/legend/Output_6_12.png" /> from searches_20 to locations_1<br />\
    <img src="styles/legend/Output_6_13.png" /> from searches_21 to locations_1<br />\
    <img src="styles/legend/Output_6_14.png" /> from searches_22 to locations_1<br />\
    <img src="styles/legend/Output_6_15.png" /> from searches_3 to locations_1<br />\
    <img src="styles/legend/Output_6_16.png" /> from searches_4 to locations_1<br />\
    <img src="styles/legend/Output_6_17.png" /> from searches_5 to locations_1<br />\
    <img src="styles/legend/Output_6_18.png" /> from searches_6 to locations_1<br />\
    <img src="styles/legend/Output_6_19.png" /> from searches_7 to locations_1<br />\
    <img src="styles/legend/Output_6_20.png" /> from searches_8 to locations_1<br />\
    <img src="styles/legend/Output_6_21.png" /> from searches_9 to locations_1<br />'
        });
var format_Officendogo_7 = new ol.format.GeoJSON();
var features_Officendogo_7 = format_Officendogo_7.readFeatures(json_Officendogo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Officendogo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Officendogo_7.addFeatures(features_Officendogo_7);
var lyr_Officendogo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Officendogo_7, 
                style: style_Officendogo_7,
                popuplayertitle: "Office ndogo",
                interactive: true,
                title: '<img src="styles/legend/Officendogo_7.png" /> Office ndogo'
            });
var format_MakaoMakuu_8 = new ol.format.GeoJSON();
var features_MakaoMakuu_8 = format_MakaoMakuu_8.readFeatures(json_MakaoMakuu_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MakaoMakuu_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MakaoMakuu_8.addFeatures(features_MakaoMakuu_8);
var lyr_MakaoMakuu_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MakaoMakuu_8, 
                style: style_MakaoMakuu_8,
                popuplayertitle: "Makao Makuu",
                interactive: true,
                title: '<img src="styles/legend/MakaoMakuu_8.png" /> Makao Makuu'
            });

lyr_GoogleLabels_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_Wilaya_3.setVisible(true);lyr_Output_4.setVisible(true);lyr_Output_5.setVisible(true);lyr_Output_6.setVisible(true);lyr_Officendogo_7.setVisible(true);lyr_MakaoMakuu_8.setVisible(true);
var layersList = [lyr_GoogleLabels_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,lyr_Wilaya_3,lyr_Output_4,lyr_Output_5,lyr_Output_6,lyr_Officendogo_7,lyr_MakaoMakuu_8];
lyr_Wilaya_3.set('fieldAliases', {'dist_name': 'dist_name', });
lyr_Output_4.set('fieldAliases', {'search_id': 'search_id', 'location_id': 'location_id', 'part_id': 'part_id', 'part_type': 'part_type', 'part_mode': 'part_mode', 'part_directions': 'part_directions', 'part_distance': 'Distance (m)', 'part_travel_time': 'Travel time (s)', });
lyr_Output_5.set('fieldAliases', {'search_id': 'search_id', 'location_id': 'location_id', 'prop_travel_time': 'Travel time (s)', 'prop_distance': 'Distance (m)', 'prop_route': 'prop_route', });
lyr_Output_6.set('fieldAliases', {'search_id': 'search_id', 'location_id': 'location_id', 'prop_travel_time': 'Travel time (s)', 'prop_distance': 'Distance (m)', 'prop_route': 'prop_route', });
lyr_Officendogo_7.set('fieldAliases', {'id': 'id', });
lyr_MakaoMakuu_8.set('fieldAliases', {'id': 'id', });
lyr_Wilaya_3.set('fieldImages', {'dist_name': 'TextEdit', });
lyr_Output_4.set('fieldImages', {'search_id': '', 'location_id': '', 'part_id': '', 'part_type': '', 'part_mode': '', 'part_directions': '', 'part_distance': '', 'part_travel_time': '', });
lyr_Output_5.set('fieldImages', {'search_id': '', 'location_id': '', 'prop_travel_time': '', 'prop_distance': '', 'prop_route': '', });
lyr_Output_6.set('fieldImages', {'search_id': '', 'location_id': '', 'prop_travel_time': '', 'prop_distance': '', 'prop_route': '', });
lyr_Officendogo_7.set('fieldImages', {'id': 'TextEdit', });
lyr_MakaoMakuu_8.set('fieldImages', {'id': 'TextEdit', });
lyr_Wilaya_3.set('fieldLabels', {'dist_name': 'header label - always visible', });
lyr_Output_4.set('fieldLabels', {'search_id': 'no label', 'location_id': 'no label', 'part_id': 'no label', 'part_type': 'no label', 'part_mode': 'no label', 'part_directions': 'no label', 'part_distance': 'no label', 'part_travel_time': 'no label', });
lyr_Output_5.set('fieldLabels', {'search_id': 'inline label - always visible', 'location_id': 'inline label - visible with data', 'prop_travel_time': 'inline label - always visible', 'prop_distance': 'inline label - always visible', 'prop_route': 'inline label - always visible', });
lyr_Output_6.set('fieldLabels', {'search_id': 'inline label - always visible', 'location_id': 'inline label - always visible', 'prop_travel_time': 'inline label - always visible', 'prop_distance': 'inline label - always visible', 'prop_route': 'inline label - always visible', });
lyr_Officendogo_7.set('fieldLabels', {'id': 'no label', });
lyr_MakaoMakuu_8.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_MakaoMakuu_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});