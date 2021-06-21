import React, { Component } from "react";
import "./Post.css";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          post: data,
        });
      });
  }
  render() {
    const postData = this.state.post.map((element) => {
      return (
        <div>
          <p>{element.id}</p>
          <h1 className="title">{element.title}</h1>
          <p>{element.body}</p>
        </div>
      );
    });
    return (
      <div>
        <div>
          <h1>These are posts</h1>
        </div>
        {postData}
      </div>
    );
  }
}

export default Post;
