class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div>
        <div>Hello World!</div>
        <div>
          <Dash />
        </div>
        <div>
          <Articles />
        </div>
      </div>
    );
  }
}