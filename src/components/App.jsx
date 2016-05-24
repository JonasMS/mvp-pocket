class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageHome: true,
      articleContent: {}
    };
  };

  render() {
    if (this.state.currentPageHome) {
      return (<div> <Home content={this.state.articleContent}/> </div>)
    }
      return (<div> <Article content={this.state.articleContent} /> </div>)
  }

};
