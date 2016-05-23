var Dash = props => (
  <div>
    <Search searchVal={ props.searchVal } changeE={ props.changeE } submitE={ props.submitE }/>
  </div>
);

window.Dash = Dash;