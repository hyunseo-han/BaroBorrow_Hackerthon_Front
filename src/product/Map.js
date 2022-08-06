import React, { useEffect } from "react";
import style from "styled-components";
const MapContainer = style.div`
    width: 100%;
    height: 314px;
    @media only screen and (max-width: 375px) {
        height: 157px;
      }
`;

const { kakao } = window;
function Map({ address }) {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.606985002299545, 127.04176711490993),
      level: 3,
    };
    var map = new kakao.maps.Map(container, options);
    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });
  }, []);
  return <MapContainer id="map"></MapContainer>;
}

export default Map;
