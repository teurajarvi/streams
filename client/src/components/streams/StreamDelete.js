import React from "react";
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends React.Component {
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

export default StreamDelete;
