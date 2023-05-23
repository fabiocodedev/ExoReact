import './App.css';
import Title from './components/title/Title';
import Side from './components/side/Side';
import Content from './components/content/Content';


function App() {
  return (

    <div className="App">
      <Title/>
      <div id="cont">
        <Side/>
        <Content/>
      </div>
    </div>
  );
}

export default App
