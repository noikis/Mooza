import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import { removeComment } from '../../actions/post';

const CommentItem = ({
  auth,
  postId,
  removeComment,
  comment: { _id, date, name, text, user },
}) => {
  return (
    <div className='post bg-white p-1 my-1'>
      <div>
        <Link to={`posts/${user}/`}>
          <img
            className='round-img'
            src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
            alt=''
          />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1'>{text} </p>
        <p className='post-date'>
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>
        {!auth.loading && user === auth.user._id && (
          <button
            className='btn btn-danger'
            onClick={(e) => removeComment(postId, _id)}
          >
            x
          </button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  removeComment: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { removeComment })(CommentItem);
