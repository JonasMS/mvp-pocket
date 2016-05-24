var Article = props => (
  <div>
    <h1>Article</h1>
    <div> { props.content.title } </div>
    <div> { props.content.author } </div>
    <div> { props.content.date } </div>
    <div> { props.content.publisher } </div>
    <image src={props.content.image}/>
    <div> { props.content.text } </div>
  </div>
);

Window.Article = Article;

