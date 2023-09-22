import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

declare global {
  interface Window {
    kakao: any;
  }
  const kakao: any;
}

export default function SimpleMapContainer(): JSX.Element {
  const kakaoMapRef = useRef<any | null>(null);
  const [kakaoMap, setKakaoMap] = useState<any>(null);

  useEffect(() => {
    const container = document.getElementById("simple-map-container");
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_KEY}&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const center = new kakao.maps.LatLng(37.5509131, 126.921113);
        const options = {
          center,
          level: 5,
        };

        const map = new kakao.maps.Map(container, options);
        setKakaoMap(map);
        kakaoMapRef.current = map; // map 인스턴스를 kakaoMapRef.current에 할당
      });
    };
  }, []);

  useEffect(() => {
    if (!kakaoMap) {
      return;
    }

    const markerPosition = new kakao.maps.LatLng(37.5509131, 126.921113);
    const marker = new kakao.maps.Marker({
      map: kakaoMap,
      position: markerPosition,
    });

    kakao.maps.event.addListener(marker, "click", function () {
      openRoutePage(markerPosition);
    });
  }, [kakaoMap]);

  const openRoutePage = (position: any) => {
    const name = "KT&G 상상마당"; // 원하는 장소 이름으로 변경 가능
    const lat = position.getLat();
    const lng = position.getLng();
    const url = `https://map.kakao.com/link/to/${name},${lat},${lng}`;
    window.open(url, "_blank"); // 새 창에서 길찾기 페이지 열기
  };

  return <Container id="simple-map-container" />;
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  margin-top: 10px;
  border-radius: 10px;
`;
