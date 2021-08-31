import React from "react";
import Modal from "../Modal";
import history from "../../history";

const StreamDelete = () => {
  /** Use React Fragment to enable two separate jsx functions
      in one go since if used extra <div> it will make the
      UI looking bad. React Fragment is like <></> but no
      Lint warnings */
  const actions = (
    <React.Fragment>
      <button className='ui button negative'>Delete</button>
      <button className='ui button'>Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      <div>Delete Stream</div>
      <Modal
        title='Delete Stream'
        content='Are you sure you want to delete this stream?'
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

export default StreamDelete;
