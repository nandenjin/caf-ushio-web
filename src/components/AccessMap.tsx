/** @jsxImportSource @emotion/react */

import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet'
import MapMarkerA from '@/assets/map_marker-a.svg'
import MapMarkerB from '@/assets/map_marker-b.svg'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

const iconA = new Icon({
  iconUrl: MapMarkerA.src,
  iconSize: [50, 50],
  iconAnchor: [25, 50],
})
const iconB = new Icon({
  iconUrl: MapMarkerB.src,
  iconSize: [50, 50],
  iconAnchor: [25, 50],
})

export const AccessMap: React.FC = () => (
  <MapContainer
    // center={[35.66245446610594, 139.73190271000337]}
    bounds={[
      [35.663226489978356, 139.73075824343888],
      [35.66178029050727, 139.73285043035602],
    ]}
    scrollWheelZoom={false}
    className="text"
    style={{
      aspectRatio: 3 / 2,
    }}
  >
    <LayersControl>
      <LayersControl.BaseLayer checked name="OpenStreetMap">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.jp/styles/osm-bright-ja/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="OpenStreetMap tonar">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.jp/styles/maptiler-toner-ja/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="地理院地図">
        <TileLayer
          attribution='&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html">地理院地図</a>'
          url="https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="航空写真">
        <TileLayer
          attribution='&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html">地理院地図</a>'
          url="https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg"
        />
      </LayersControl.BaseLayer>
    </LayersControl>
    <Marker position={[35.66186480110263, 139.73151354308388]} icon={iconA}>
      <Popup>
        現代芸術振興財団 ギャラリー
        <br />
        ピラミデビル 4F
      </Popup>
    </Marker>
    <Marker position={[35.66273175523786, 139.73187680937633]} icon={iconB}>
      <Popup>
        関連展示: Instant Sympathy - Roppongi
        <br />
        ラピロス六本木 エントランス（六本木駅3番出口）
      </Popup>
    </Marker>
  </MapContainer>
)
