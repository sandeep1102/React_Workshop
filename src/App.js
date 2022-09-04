// import logo from './logo.svg';
import './App.css';
import ErrorBoundaryMain from './components/ErrorBoundary/ErrorBoundaryMain';
// import ConditionalRendering from './components/ConditionalRendering';
// import EventHandling from './components/EventHandling';
// import EventHandlingFunction from './components/EventHandlingFunction';
// import Counter from './components/Counter';
// import PropsMethod from './components/PropsMethod';
// import StateSample from './components/StateSample';
// import SampleProps from './components/SampleProps';
// import SampleProps1 from './components/SampleProps1';
// import SamplePropsFunc from './components/SamplePropsFunc';
// import Counter from './components/Counter';

function App() {
  // const params = {name: "Sandeep", age: 28}
  
//   function clickHandler(){
//     alert('Hi')
// }
  return (
    <div className="App">
      {/* <SampleProps name="Nitesh" age={28}></SampleProps>
      <SampleProps name="Sandeep"></SampleProps>
      <SamplePropsFunc {...params} />
      <SampleProps1> 
        <h2> Hello Everyone</h2>
      </SampleProps1> */}
      {/* <PropsMethod clickEvent= {clickHandler}></PropsMethod> */}
      {/* <PropsMethod name="Sandeep" age={28} designation="Senior Developer"/> */}
      {/* <StateSample ></StateSample> */}
      {/* <Counter></Counter> */}
      {/* <EventHandling></EventHandling> */}
      {/* <EventHandlingFunction></EventHandlingFunction> */}
      {/* <ConditionalRendering></ConditionalRendering> */}
      <ErrorBoundaryMain></ErrorBoundaryMain>
    </div>
  );
}

export default App;
