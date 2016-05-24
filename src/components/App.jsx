class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageHome: true,
      articleContent: {}
    };
  };

  changePageHandler() {
    // let val = !this.state.currentPageHome;
    this.setState({ currentPageHome: !this.state.currentPageHome });
  }

  getContentHandler(content) {
    this.setState({ articleContent: content });
  }

  render() {
    if (this.state.currentPageHome) {
      return (
        <div>
          <Home changePage={this.changePageHandler.bind(this)}
          getContent={this.getContentHandler.bind(this)}
           pageIsHome={this.state.currentPageHome}
           content={this.state.articleContent} />
        </div>)
    }
      return (
        <div>
          <Article content={this.state.articleContent} />
        </div>)
  }

};
