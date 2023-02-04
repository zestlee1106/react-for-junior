# create react app 을 이용해서 리액트를 만들어 보자

## create react app 을 사용하면서 얻을수 있는 이점

1. 필요한 패키지들을 npm 을 통해서 추가가 가능하다. 코드를 간결하게 쓸 수가 있음
2. IDE 의 최대 이점인 intel 기능을 쓸 수가 있다
3. 파일들을 모듈화해서 컴포넌트들 더 쉽게 분리할 수 있다. (import, export)
4. **style 을 모듈화 할 수 있다**
   - 만약 분리한 컴포넌트의 css 에서 class 명이 중복된다면,  
     react 에서 알아서 랜덤한 클래스를 만들어 주기 때문에, 스타일을 덮어 씌우지 않는다.  
     이것은 css 파일을 ~~~~.module.css 로 생성했을 때만 적용이 된다.

## strictMode?

- strictMode 는 create react 로 리액트 프로젝트를 만들면 저절로 감싸져서 나온다
- 해당 태그가 있을 경우 그릴 때 자손까지 검사하기 때문에 렌더가 두 번 실행된다

## useEffect

- component 내부에 있는 코드들은 렌더링이 될 때 항상 실행된다
- state 가 바뀔 때마다 컴포넌트는 렌더링이 된다
- 그 말은 즉슨, state 가 바뀔 때마다 component 의 내부에 있는 코드들은 항상 실행이 된다
- 예를 들어 API 를 호출하는 로직이 내부에 있다면, 어느 state 가 바뀔 때마다 항상 실행되기 때문에, 필요없는 리소스를 잡아먹을 수 있다.
- 그럴 일을 덜기 위해서 useEffect 를 사용히는 것이다.
- 두번쨰 인자에 텅 빈 array 를 넣으면 초기 렌더 시점에만 실행이 되고, 특정 state 를 넣으면 해당 state 가 바뀔 때에만 실행이 된다.
