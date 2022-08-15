import React, { useEffect, useRef } from "react";
import style from "styled-components";
const MapContainer = style.div`
  width: 100%;
  height: 314px;
  @media only screen and (max-width: 500px) {
      height: 224px;
    }
`;

const { kakao } = window;
function Map({ address }) {
  const mapRef = useRef();
  useEffect(() => {
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(37.606985002299545, 127.04176711490993),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });
  }, []);
  return <MapContainer id="map" ref={mapRef}></MapContainer>;
}

export default Map;
