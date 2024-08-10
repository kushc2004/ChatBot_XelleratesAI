const React = require('react');
const Chatbot = require('./components/chatbot').default;  // Use .default if Chatbot is an ES module
require('./styles/App.css');


function App() {
  return (
    <div className="App">
      <Chatbot />
    </div>
  );
}

export default App;
