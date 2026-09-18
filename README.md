# 서진이 캐릭터 스튜디오

사진을 참고해 제작한 AI 캐릭터 시트 2장. 각 PNG는 1536×1024이며 얼굴과 전신 6개 각도를 포함합니다.
성인 모습은 약 25세의 창작 콘셉트이며 실제 미래 외모 예측이 아닙니다.

Flow용 장면 예시:
첨부 레퍼런스의 서진이 한 명이 등장한다. 얼굴과 헤어스타일, 의상을 일관되게 유지한다. 자연스러운 실사 영상. 부드러운 햇빛 아래 천천히 걷다가 카메라를 보고 미소 짓는다. 한 장면의 연속된 영상으로 표현한다. 캐릭터 시트의 분할 화면, 라벨, 글자는 영상에 넣지 않는다.

Flow 적용과 영상 생성은 별도입니다.

## 콘티 v3 (2026-09-18)
- `index.html`: 60초, 15개 편집 구간. 엄마의 키링 → 과거·현재 → 동탄역 시간여행 → 시민의 빛 → 미래의 서진 → 숙제 완성.
- `webtoon-conti.html`: 같은 이야기의 50컷 텍스트 콘티. 별도 `webtoon.html`에서 24개 핵심 컷의 작화를 볼 수 있다.
- `VOICE_PRESETS_SEOJIN.json`: 내레이터 1명 기준, 실제 서비스 보이스 ID 미기입.
- `assets/hwaseong-slogan.png`, `assets/hwaseong-brandmark.png`: [화성특례시 BI](https://www.hscity.go.kr/www/intro/gnrlSttus/ctyhllSymbol/ctyhllSymbol04.jsp) 원본. 출처와 원본 이용 조건·공모전 안내를 적용한다.
- 현재 작업은 콘티 개정이며 영상 생성·녹음·제출 완료가 아니다. 기존 ZIP은 캐릭터 외형 참고용이다.

## 그림 웹툰 (2026-09-18)
- `webtoon.html`: 6장·24개 핵심 컷의 세로 웹툰. 반응형 화면, 한국어 말풍선·내레이션·효과음, 연출 메모 토글.
- `webtoon-conti.html`: 기존 50컷 상세 제작 문서.
- `assets/webtoon/chapter-1.png`부터 `chapter-6.png`: 내장 image_gen으로 만든 4컷 원본 6장. CSS에서 원본의 각 사분면을 표시한다. 4장은 첫 점등의 순서를 보정한 `chapter-4-v2.png`를 사용하며 최초 원본도 보존한다.
- `assets/webtoon/PROMPTS.json`: 사용한 프롬프트. `DIALOGUE.txt`: 한국어 읽기 대본.
- 이미지는 영상 구도 참고용이며 실제 장소·차량의 세부 형태는 제작 전 대조한다. 기존 캐릭터 시트를 외형 기준으로 사용했다.
