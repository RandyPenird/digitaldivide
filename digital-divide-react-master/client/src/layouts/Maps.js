import React from "react";
import ReactDOMServer from "react-dom/server";
import { Map,TileLayer, GeoJSON} from 'react-leaflet';
import { Box, InputLabel } from "@material-ui/core";
import Legend from './Legend';
import 'leaflet/dist/leaflet.css';
import "assets/App.css";
import {mapConfig} from '../Config';
import { map } from "leaflet";
const defaultProps = {
};
const normalStyle = {
  color: "black",
  fontSize: "20px",
  padding: "5px",
};
const mapStyle = {
  width:'100%',
  height:'700px',
}
function MyPopup(props) {
  const { avg_d_mbps_wt,avg_u_mbps_wt,NeighName } = props;
  return (
    <Box border={0}style={{ backgroundColor: "white" }} {...defaultProps}>
        <InputLabel style={normalStyle}>{NeighName} </InputLabel>
        <InputLabel style={normalStyle}>Download:{avg_d_mbps_wt} Mbps</InputLabel>
        <InputLabel style={normalStyle}>Upload:{avg_u_mbps_wt} Mbps</InputLabel>
    </Box>
  );
}
export default function Maps(props) {
    const onEachFeature = async(feature, layer) => {
        const popupOptions = {
        minWidth: 250,
        maxWidth: 500,
        className: "popup-classname"
        };
        let avg_d_mbps_wt = Math.round(feature.properties.avg_d_mbps_wt/1000);
        let avg_u_mbps_wt = Math.round(feature.properties.avg_u_mbps_wt/1000);
        let NeighName = feature.properties.NeighName;
        let fillColor;
        await mapConfig.color.map(config=>{
          if(avg_d_mbps_wt>config.range[0]){
            fillColor = config.color
          }
        })
        // console.log(fillColor,avg_d_mbps_wt,avg_u_mbps_wt)
        layer.setStyle({
          weight: 1,
          color: mapConfig.borderColor,
          fillColor:fillColor,
          fillOpacity:mapConfig.opacity,
        });
        const popupContentNode = <MyPopup avg_d_mbps_wt={avg_d_mbps_wt} avg_u_mbps_wt={avg_u_mbps_wt} NeighName={NeighName} />;
        const popupContentHtml = ReactDOMServer.renderToString(popupContentNode);
        layer.bindTooltip(popupContentHtml, popupOptions);
    }
    console.log(props)
    if(props.locations.length){
      return (
          <div>
              {/* <Map center={[-81.35, 28.35]} zoom={9}> */}
              <Map 
                center={[28.475, -81.35]} 
                zoom={11} 
                maxWidth={30} 
                // style={mapStyle} 
                // doubleClickZoom={false}
                // dragging={false} 
                // zoomSnap={false} 
                // zoomDelta={false} 
                // trackResize={false}
                // touchZoom={false}
                // scrollWheelZoom={false}              
              >
                <TileLayer
                  // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON data={props.locations} onEachFeature={onEachFeature} radius={2000} crs={'urn:ogc:def:crs:EPSG::26916'} />
                <Legend/>
              </Map> 
          </div>
      );
    }else{
      return (
        <div>
          
        </div>
      )
    }
}
