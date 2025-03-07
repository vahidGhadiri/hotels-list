import { FC } from "react";
import { Marker as LeafletMarker, Popup } from "react-leaflet";
import "./styles.css";

interface PopupData {
  onClick?: VoidFunction;
  image?: string;
  title: string;
}

export interface MarkerProps {
  position: [number, number];
  popup?: PopupData;
}

const Marker: FC<MarkerProps> = ({ position, popup }) => {
  return (
    <LeafletMarker position={position}>
      {popup && (
        <Popup>
          <div className="w-full" onClick={() => popup.onClick?.()}>
            {popup.image && (
              <img
                className="w-full h-15 object-cover"
                src={popup.image}
                alt={popup.title}
              />
            )}
            <div className="p-3">
              <h3 className="text-caption-1 m-0">{popup.title}</h3>
            </div>
          </div>
        </Popup>
      )}
    </LeafletMarker>
  );
};

export default Marker;
