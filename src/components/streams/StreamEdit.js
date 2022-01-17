import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <form className="ui form">
          <input type="hidden" name="_method" value="put" />
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              name="title"
              defaultValue={this.props.stream.title}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <textarea
              name="description"
              defaultValue={this.props.stream.description}
            />
          </div>
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
