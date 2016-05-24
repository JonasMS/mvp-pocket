var Article = props => (
  <div onMouseUp={ e => props.handleController(e) }
    className="article" >
    <h1 className="title"> { props.content.title } </h1>
    <div className="article-details">
      <div className="author"> { props.content.author } </div>
      <div className="date"> { props.content.date } </div>
      <div className="publisher"> { props.content.publisher } </div>
    </div>
    <image className="head-image" src={props.content.image}/>

    <pre className="text"> { props.content.text } </pre>
  </div>
);



Window.Article = Article;

