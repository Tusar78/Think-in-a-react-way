import React from "react";

const formatDate = (dt) => {
  return dt.toLocaleDateString();
};

class Avatar extends React.Component {
  render() {
    const { name, avatarURL } = this.props.author;
    return (
      <div className="avatar">
        <img src={avatarURL} alt={name} />
      </div>
    );
  }
}

class UserInfo extends React.Component {
  render() {
    const {
      author,
      author: { name },
    } = this.props.comment;
    return (
      <div className="user__info">
        <Avatar author={author}></Avatar>
        <div className="user__info-name">
          <h2>{name}</h2>
        </div>
      </div>
    );
  }
}

class Comment extends React.Component {
  render() {
    const { text, date } = this.props.comment;
    return (
      <div className="user__name">
        <UserInfo comment={this.props.comment}></UserInfo>
        <div className="comment__text">
          <p>{text}</p>
        </div>
        <div className="comment__date">{formatDate(date)}</div>
      </div>
    );
  }
}

export default Comment;
