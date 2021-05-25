import { MapControl, withLeaflet } from "react-leaflet";
import L from "leaflet";
import {mapConfig} from '../Config';
class Legend extends MapControl {
  createLeafletElement(props) {}

  componentDidMount() {

    const legend = L.control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      const labelCell = (color,range) => {
        return ('<i style="background:' +
        color +
        '"></i> ' +
        range[0] +
        ((range[1]!=='+') ? "&ndash;" + range[1] + '' : "+"));
      }
      let labels = [ "Download Speed (Mbps)" ];

      mapConfig.color.map(config=>{
          labels.push(labelCell(config.color,config.range));

      })

      div.innerHTML = labels.join("<br>");
      return div;
    };

    const { map } = this.props.leaflet;
    legend.addTo(map);
  }
}

export default withLeaflet(Legend);