import Survey from './components/survey';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="center">
        <Survey />
    	</div>)
  }

};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);