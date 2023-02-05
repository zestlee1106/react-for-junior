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

### useEffect 에서 destroyed 를 사용하다

- react 에서는 destroy 훅이 따로 없는가 봉가...
- destroy 시점을 알기 위해서는 useEffect 에서 특정 함수를 리턴해 주면 된다
- dependency 가 없는 useEffect 에서, 특정 함수를 리턴해주면... 해당 함수가 컴포넌트가 destroy 될 때 실행이 된다

++

- dependency 가 있는 함수도 destroy 가 동작한다
- 컴포넌트 내부에서 사용하는 state 가 있다면, 그리고 해당 state 가 바뀔 때마다 setInterval 을 하는 useEffect 가 있다면 useEffect 에서 clearInterval 을 해 주는 함수를 리턴해주는 코드가 있어야 할 것 같다는 생각이 든다.

예시)

```javascript
useEffect(() => {
  const id = setInterval(() => {
    setCount(count + 1);
  }, 1000);

  return () => clearInterval(id);
}, [count]);
```

## useState

- state 를 직접 수정하면 절대 안 됨. 반드시 set 함수를 통해서 바꿔야 한다.
- 왜냐하면 state 는 constant 일 뿐더러, let 으로 선언했다 하더라도 state 를 직접 변경하면 리액트가 render 함수를 호출하지 않기 때문에, UI 가 변경되지 않게 된다.

## React route

- react 에서는 라우트 기능을 사용하기 위해서 react route dom 이라는 것을 import 해서 쓴다
- App.js 에서 Router, Route 컴포넌트를 import 해 오고, Route 내부에 해당 경로에 보여 주고 싶은 컴포넌트를 넣으면 된다
- Vue 랑 매우 다른 점은, Vue 는 js 형태로 route 를 맵핑해 주고 있으나, React 는 컴포넌트 형태로 각각을 맵핑해 준다는 것이다
- Switch 는 한 라우트에서 한 화면만 보여 주기 위한 컴포넌트이다
- 만약 RouteLink 같은 기능을 사용하고 싶다면, Link 컴포넌트를 사용하면 된다

## dynamic route

- 동적 라우팅을 하고 싶을 수 있다 (예를 들어 /movie/234)
- 그럴 땐 Route 컴포넌트의 path props 에 :name 만 추가해 주면 된다.
  예시)

```javascript
<Route path="/movie/:id">
  <Detail />
</Route>
```

- 이렇게 하면, Detail 컴포넌트에서 useParams 를 이용하여 파라미터를 받아올 수 있다.
- : 뒤에 붙인 이름이 파라미터 명이 된다.

---

## gh-pages

- gh-pages 라는 패키지를 사용하면, package.json 에 있는 homepage 에 deploy 를 해 준다
- `gh-pages -d build` 스크립트를 이용하면 되고, predeploy 라고 스크립트를 하나 더 생성해서 deploy 전 build 도 해 주게끔 만들자
