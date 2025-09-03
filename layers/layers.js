var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LINESEGMENTPALANANQGIS_1 = new ol.format.GeoJSON();
var features_LINESEGMENTPALANANQGIS_1 = format_LINESEGMENTPALANANQGIS_1.readFeatures(json_LINESEGMENTPALANANQGIS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LINESEGMENTPALANANQGIS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LINESEGMENTPALANANQGIS_1.addFeatures(features_LINESEGMENTPALANANQGIS_1);
var lyr_LINESEGMENTPALANANQGIS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LINESEGMENTPALANANQGIS_1, 
                style: style_LINESEGMENTPALANANQGIS_1,
                popuplayertitle: 'LINE-SEGMENT-PALANAN-QGIS',
                interactive: true,
                title: '<img src="styles/legend/LINESEGMENTPALANANQGIS_1.png" /> LINE-SEGMENT-PALANAN-QGIS'
            });
var format_NODEIDPALANANQGISWITHPIC1_2 = new ol.format.GeoJSON();
var features_NODEIDPALANANQGISWITHPIC1_2 = format_NODEIDPALANANQGISWITHPIC1_2.readFeatures(json_NODEIDPALANANQGISWITHPIC1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NODEIDPALANANQGISWITHPIC1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NODEIDPALANANQGISWITHPIC1_2.addFeatures(features_NODEIDPALANANQGISWITHPIC1_2);
var lyr_NODEIDPALANANQGISWITHPIC1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NODEIDPALANANQGISWITHPIC1_2, 
                style: style_NODEIDPALANANQGISWITHPIC1_2,
                popuplayertitle: 'NODE-ID-PALANAN-QGIS WITH PIC1',
                interactive: true,
                title: '<img src="styles/legend/NODEIDPALANANQGISWITHPIC1_2.png" /> NODE-ID-PALANAN-QGIS WITH PIC1'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_LINESEGMENTPALANANQGIS_1.setVisible(true);lyr_NODEIDPALANANQGISWITHPIC1_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LINESEGMENTPALANANQGIS_1,lyr_NODEIDPALANANQGISWITHPIC1_2];
lyr_LINESEGMENTPALANANQGIS_1.set('fieldAliases', {'SECTION': 'SECTION', 'FROM NODE': 'FROM NODE', 'TO NODE': 'TO NODE', 'PHASING': 'PHASING', 'PHASE COND': 'PHASE COND', 'NEUTRAL CO': 'NEUTRAL CO', 'FROM X': 'FROM X', 'FROM Y': 'FROM Y', 'TO X': 'TO X', 'TO Y': 'TO Y', });
lyr_NODEIDPALANANQGISWITHPIC1_2.set('fieldAliases', {'NODE ID': 'NODE ID', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'POLE HT': 'POLE HT', 'POLE TYPE': 'POLE TYPE', 'POLE TOP ASSEMBLY': 'POLE TOP ASSEMBLY', 'TRANSFORMER ID': 'TRANSFORMER ID', 'Pvt. Meter No. (for PVT DT)': 'Pvt. Meter No. (for PVT DT)', 'KVA RATING': 'KVA RATING', 'DT TAPPING': 'DT TAPPING', 'FUSE RATING': 'FUSE RATING', 'FUSE TYPE': 'FUSE TYPE', 'BRGY.': 'BRGY.', 'MUNICIPALITY': 'MUNICIPALITY', 'PHOTOS': 'PHOTOS', });
lyr_LINESEGMENTPALANANQGIS_1.set('fieldImages', {'SECTION': 'TextEdit', 'FROM NODE': 'TextEdit', 'TO NODE': 'TextEdit', 'PHASING': 'TextEdit', 'PHASE COND': 'TextEdit', 'NEUTRAL CO': 'TextEdit', 'FROM X': 'TextEdit', 'FROM Y': 'TextEdit', 'TO X': 'TextEdit', 'TO Y': 'TextEdit', });
lyr_NODEIDPALANANQGISWITHPIC1_2.set('fieldImages', {'NODE ID': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', 'POLE HT': 'Range', 'POLE TYPE': 'TextEdit', 'POLE TOP ASSEMBLY': 'TextEdit', 'TRANSFORMER ID': 'TextEdit', 'Pvt. Meter No. (for PVT DT)': 'TextEdit', 'KVA RATING': 'TextEdit', 'DT TAPPING': 'TextEdit', 'FUSE RATING': 'TextEdit', 'FUSE TYPE': 'TextEdit', 'BRGY.': 'TextEdit', 'MUNICIPALITY': 'TextEdit', 'PHOTOS': 'ExternalResource', });
lyr_LINESEGMENTPALANANQGIS_1.set('fieldLabels', {'SECTION': 'no label', 'FROM NODE': 'no label', 'TO NODE': 'no label', 'PHASING': 'no label', 'PHASE COND': 'no label', 'NEUTRAL CO': 'no label', 'FROM X': 'no label', 'FROM Y': 'no label', 'TO X': 'no label', 'TO Y': 'no label', });
lyr_NODEIDPALANANQGISWITHPIC1_2.set('fieldLabels', {'NODE ID': 'no label', 'LONGITUDE': 'no label', 'LATITUDE': 'no label', 'POLE HT': 'no label', 'POLE TYPE': 'no label', 'POLE TOP ASSEMBLY': 'no label', 'TRANSFORMER ID': 'no label', 'Pvt. Meter No. (for PVT DT)': 'no label', 'KVA RATING': 'no label', 'DT TAPPING': 'no label', 'FUSE RATING': 'no label', 'FUSE TYPE': 'no label', 'BRGY.': 'no label', 'MUNICIPALITY': 'no label', 'PHOTOS': 'no label', });
lyr_NODEIDPALANANQGISWITHPIC1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});