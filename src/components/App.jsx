class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageHome: true,
      articleList: [],
      articleContent: {},
      noteStatus: {},
      articleNotes: []
    };
  };

  componentWillMount() {
    //request articles from db
    $.ajax({
      method: 'GET',
      url:'http://localhost:3000/v1/articles',
      contentType: 'application/json',
      success: data => {
        this.setState({ articleList: data.data });
      },
      error: () => { console.log('error on GET'); }
    });
  }

  componentDidMount() {
    window.addEventListener('keydown',
     e => this.createNoteHandler(e)
     , false);
  }

  changePageHandler() {
    // let val = !this.state.currentPageHome;
    this.setState({ currentPageHome: !this.state.currentPageHome });
  }

  getContentHandler(content) {
    this.setState({ articleContent: content });
  }

  controllerHandler(e) {
    let sel = window.getSelection();
    let range = sel.focusOffset - sel.anchorOffset;
    let controlBox = document.getElementById('controlBox');

    // console.log(sel);
    // console.log('range: ', range);
    // console.log('mouse X: ', e.clientX + 'px', ' mouse Y: ', e.clientY + 'px');

    this.setState({ noteStatus:
      {
        top: e.clientY,
        left: e.clientX,
        sel: sel,
        range: range
      }
    });

    //if a selection is made
    if ( range !== 0 ) {
      //create a controlBox element
      controlBox.style.top = e.clientY + 'px';
      controlBox.style.left = e.clientX + 'px';
      controlBox.style.visibility = 'visible';

      //TODO: save annotation to db
    } else {
      controlBox.style.visibility = 'hidden';
       }
  }

  createNoteHandler(e) {
    //if viewing article
    if ( !this.state.currentPageHome ) {
      //'n' key is pressed
      if ( e.which === 78 ) {
        console.log('create new note')
        //create new note w/ top and left values
        this.setState({ articleNotes: this.state.articleNotes.concat(
          [this.state.noteStatus]
        )})
        console.log(this.state.articleNotes);
      } else if ( e.which === 72 && this.state.noteStatus.range !== 0 ) { //'h' key is pressed
        console.log('highlight selected text')
      } else if ( e.which === 9 && this.state.noteStatus.range !== 0 ) { //'tab' key is pressed
        console.log('create new note && highlight')
      }
    }
  }

  render() {
    if (this.state.currentPageHome) {
      return (
        <div>
          <Home changePage={this.changePageHandler.bind(this)}
            getContent={this.getContentHandler.bind(this)}
            collection={this.state.articleList}
            pageIsHome={this.state.currentPageHome}
            content={this.state.articleContent} />
        </div>)
    }
      //if controlBox is defined render it
    // } else if (this.state.controlBox) {
    //   console.log('rendering ControlBox');
    //   console.log(this.state.controlBox);
    //   return (
    //     <div>
    //       <Article makeAnnotation={this.annotationHandler.bind(this)}
    //       content={this.state.articleContent} />

    //       <ControlBox stylesheet={this.state.controlBox} />
    //     </div>
    //   )

    // }
      return (
        <div>
          <Article handleController={this.controllerHandler.bind(this)}
            notes={this.state.articleNotes}
            createNote={this.createNoteHandler.bind(this)}
            content={this.state.articleContent} />

          <ControlBox />
        </div>
      )
    }
};
