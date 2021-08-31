import React from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  /** Use React Fragment to enable two separate jsx functions
      in one go since if used extra <div> it will make the
      UI looking bad. React Fragment is like <></> but no
      Lint warnings */
  renderActions() {
    return (
      <React.Fragment>
        <button className='ui button negative'>Delete</button>
        <button className='ui button'>Cancel</button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        <div>Delete Stream</div>
        <Modal
          title='Delete Stream'
          content='Are you sure you want to delete this stream?'
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

export default connect(null, { fetchStream })(StreamDelete);
