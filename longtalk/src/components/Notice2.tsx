import React, { useState } from "react";
import styled from "styled-components";

export default function Notice2() {
  return (
    <div>
      <br />
      <h2>제1회 소통영화제 「롱톡」 선정작 발표 안내</h2>
      <br />
      <Text>
        <p>
          르포(REPORTAGE)가 주관하는 제1회 소통영화제 「롱톡」에서 상영할 12편의
          선정작을 발표합니다. 작품 출품은 소통영화제 「롱톡」 출품 사이트를
          통해 9월 21일(목)부터 10월 15일(일) 17시까지 이루어졌습니다. 내부의
          심사 기준을 토대로 꼼꼼하고 엄정한 심사를 거쳐 영화제가 지향하는 바를
          잘 드러내는 작품들을 선정하였습니다. 선정작은 다음과 같습니다.
        </p>
        <p>
          <b>[최종 선정작]</b>
        </p>
        <p>
          - 벽(Wall)
          <br /> - 수능을 치려면(Zombie-Free Test Day)
          <br /> - 한낮의 침입자(Beyond the Veil)
          <br /> - 껌벅(Flicker)
          <br /> - 워킹맘(Working Mom)
          <br /> - 당신은 안드로이드입니까(Are You an Android?)
          <br /> - 모서리의 쓸모 - 보조바퀴(Training Wheels)
          <br /> - 그리고 집(I’m Here)
          <br /> - 아빠가 자꾸 살아 돌아와(Dad Keeps Coming Back Alive)
          <br /> - 언니를 기억해(Remember Our Sister)
          <br /> - 202 201
        </p>
        <p>
          12편의 작품 모두 축하드립니다. 해당 작품들에는 개별적으로 연락 드릴
          예정입니다. 또한 선정작 이외에도 출품해주신 작품들과 보내주신 관심에
          감사드리며 앞으로도 많은 관심과 사랑 부탁드립니다. 감사합니다.
        </p>
        <br />
        <br />
      </Text>
    </div>
  );
}

const Text = styled.div`
  font-family: Pretendard Variable;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
`;
