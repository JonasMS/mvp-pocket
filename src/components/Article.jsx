var Article = props => (
  <div className="article">
    <h1>Article</h1>
    <div className="title"> { props.content.title } </div>
    <div className="author"> { props.content.author } </div>
    <div className="date"> { props.content.date } </div>
    <div className="publisher"> { props.content.publisher } </div>
    <image className="head-image" src={props.content.image}/>
    <div className="text"> { props.content.text } </div>
  </div>
);

Window.Article = Article;

