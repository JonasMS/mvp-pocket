var Collection = props => (
  <div>
    <h1>Collection</h1>
    {populateList(props.collection)}
  </div>
);

var populateList = list => {
  return list.map((item, idx) => {
    return <ArticleCard key={idx} article={item} />
  });
}

Window.Collection = Collection;

