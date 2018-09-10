# calcSprite v1.0.0
스프라이트 이미지 크기를 계산할 수 있습니다.

## 매개변수

이름 | 형태 | 설명
| :---- | :-- | :-- |
size | number | 스프라이트 이미지 크기
from | number | 아이콘 크기
to | number | 변환크기
position | number | 좌표

한 축의 크기만 계산합니다.

## 반환
````javascript
{
    pixel : {
        size : number,
	    position : number
	},
    percentage : {
        size : number,
	    position : number
	}
}
````
window객체에 calcSprite이라는 함수로 들어있습니다.