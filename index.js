function Button(props) {
  //   Write your code here.
  const { name, className } = props;
  return <button className={className}>{name}</button>;
}

const element = (
  //   Write your code here.
  <div className="background">
    <h1 className="heading">Social Components</h1>
    <div>
      <Button name="Like" className="like-btn" />
      <Button name="Comment" className="comment-btn" />
      <Button name="Share" className="share-btn" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
