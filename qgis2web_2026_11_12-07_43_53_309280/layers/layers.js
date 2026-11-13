var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_MSelenCentralSmallNgellasmall_ngella_2 = new ol.format.GeoJSON();
var features_MSelenCentralSmallNgellasmall_ngella_2 = format_MSelenCentralSmallNgellasmall_ngella_2.readFeatures(json_MSelenCentralSmallNgellasmall_ngella_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenCentralSmallNgellasmall_ngella_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenCentralSmallNgellasmall_ngella_2.addFeatures(features_MSelenCentralSmallNgellasmall_ngella_2);
var lyr_MSelenCentralSmallNgellasmall_ngella_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenCentralSmallNgellasmall_ngella_2, 
                style: style_MSelenCentralSmallNgellasmall_ngella_2,
                popuplayertitle: 'M - Selen Central(Small Ngella) — small_ngella',
                interactive: true,
                title: '<img src="styles/legend/MSelenCentralSmallNgellasmall_ngella_2.png" /> M - Selen Central(Small Ngella) — small_ngella'
            });
var format_MSelenCentralBigNgellabig_ngella__3 = new ol.format.GeoJSON();
var features_MSelenCentralBigNgellabig_ngella__3 = format_MSelenCentralBigNgellabig_ngella__3.readFeatures(json_MSelenCentralBigNgellabig_ngella__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenCentralBigNgellabig_ngella__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenCentralBigNgellabig_ngella__3.addFeatures(features_MSelenCentralBigNgellabig_ngella__3);
var lyr_MSelenCentralBigNgellabig_ngella__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenCentralBigNgellabig_ngella__3, 
                style: style_MSelenCentralBigNgellabig_ngella__3,
                popuplayertitle: 'M - Selen Central(Big Ngella) — big_ngella_',
                interactive: true,
                title: '<img src="styles/legend/MSelenCentralBigNgellabig_ngella__3.png" /> M - Selen Central(Big Ngella) — big_ngella_'
            });
var format_ANZCentralTulagianz_centraltulagi__4 = new ol.format.GeoJSON();
var features_ANZCentralTulagianz_centraltulagi__4 = format_ANZCentralTulagianz_centraltulagi__4.readFeatures(json_ANZCentralTulagianz_centraltulagi__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZCentralTulagianz_centraltulagi__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZCentralTulagianz_centraltulagi__4.addFeatures(features_ANZCentralTulagianz_centraltulagi__4);
var lyr_ANZCentralTulagianz_centraltulagi__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZCentralTulagianz_centraltulagi__4, 
                style: style_ANZCentralTulagianz_centraltulagi__4,
                popuplayertitle: 'ANZ Central(Tulagi) — anz_centraltulagi_',
                interactive: true,
                title: '<img src="styles/legend/ANZCentralTulagianz_centraltulagi__4.png" /> ANZ Central(Tulagi) — anz_centraltulagi_'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_MSelenCentralSmallNgellasmall_ngella_2.setVisible(true);lyr_MSelenCentralBigNgellabig_ngella__3.setVisible(true);lyr_ANZCentralTulagianz_centraltulagi__4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_MSelenCentralSmallNgellasmall_ngella_2,lyr_MSelenCentralBigNgellabig_ngella__3,lyr_ANZCentralTulagianz_centraltulagi__4];
lyr_MSelenCentralSmallNgellasmall_ngella_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenCentralBigNgellabig_ngella__3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ANZCentralTulagianz_centraltulagi__4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenCentralSmallNgellasmall_ngella_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenCentralBigNgellabig_ngella__3.set('fieldImages', {'fid': '', 'Name': '', 'Type': '', 'Location': '', 'Province': '', 'Latitude': '', 'Longitude': '', });
lyr_ANZCentralTulagianz_centraltulagi__4.set('fieldImages', {'fid': '', 'Name': '', 'Type': '', 'Location': '', 'Province': '', 'Latitude': '', 'Longitude': '', });
lyr_MSelenCentralSmallNgellasmall_ngella_2.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenCentralBigNgellabig_ngella__3.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_ANZCentralTulagianz_centraltulagi__4.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_ANZCentralTulagianz_centraltulagi__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});