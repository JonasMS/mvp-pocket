class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: ''
    };
  };

  sendUrl(url) {
    console.log('POST made', typeof url);
    $.ajax({
      method: 'POST',
      url: '/saveArticle',
      data: JSON.stringify({ url: url }),
      contentType: 'application/json',
      success: data => {
        this.props.content = data;
        console.log(this.props.content);
      },
      error: () => { 'error on POST'; }
    });
  }

  searchValHandler (event) {
    // this.searchVal = event.target.value;
    console.log('updateSearchVal');
    this.setState({ searchVal: event.target.value })
  }

  submitSearchHandler () {
    //make post request with this.state.searchVal
    // this.sendUrl(event.target.value);
    console.log('made search submission', this.state.searchVal);
    this.sendUrl(this.state.searchVal);
  }

  render() {
    return (
      <div>
        <div>Hello World!</div>
        <div>
          <Dash searchVal={ this.state.searchVal } changeE={ this.searchValHandler.bind(this) } submitE={ this.submitSearchHandler.bind(this) } />
        </div>
        <div>
          <Collection />
        </div>
      </div>
    );
  }

};

Window.Home = Home;

