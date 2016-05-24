var Search = props => (
  <div>
    <input id="article-input" onChange={ event => props.changeE(event) } value={ props.searchVal }/>
    <input id="save-btn" onClick={ () => props.submitE() } type="submit" value="Save"/>
  </div>
);


Window.Search = Search;
