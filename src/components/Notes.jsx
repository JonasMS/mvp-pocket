var Notes = props => (
  <div className="notesList">
    {populateNotes(props.notes)}
  </div>

);

var populateNotes = notes => {
  var noteStyle;
  //for every note in note
  return notes.map((note, idx) => {
    noteStyle = {
      top: note.top,
    };
    console.log('style: ', noteStyle);
    return <Note key={idx} style={noteStyle} />
  });
}