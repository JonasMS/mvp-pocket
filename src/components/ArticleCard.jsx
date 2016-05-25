var ArticleCard = props => (
  <div class="articleCard">
    <div className="cardTitle"> { props.article.title } </div>
    <div className="cardAuthor"> { props.article.author } </div>
    <div className="cardDate"> { props.article.data } </div>
  </div>

);