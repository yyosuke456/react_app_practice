import React from 'react';

const App = () => {
  return <div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
  </div>
}

const Cat = () => {
  return (
    <div>
      <a>Meow</a>
    </div>
  )
}

// function App() {
//   const greeting = "Hi tom";
//   const dom = <h1 className="foo">Hello, World! {greeting}</h1>;
//   const click = <input type="text" onClick={() => {console.log("clicked")}}/>;
//   const change = <input type="text" id="bar" onChange={() => {console.log("changed")}}/>;
//   const div = (// reactの制約で、返すのは1つのタグでないといけないので、divで囲む
//     <div>
//       <label htmlFor="bar">bar</label>
//       {change}
//     </div>
//   );
//   const fragment = (// ↑でdivいらないのになーを避けることができる
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       {change}
//     </React.Fragment>
//   );
//   return fragment;
// }

export default App;
