import React from "react";
// import PropTypes from 'prop-types'

import { P, Modal } from "@allied-solutions/affinity";

// main component
export const IdleTimeout = ({ loginButtonProps, sessionStatus }) => {
  return (
    <>
      <Modal
        id="IdleTimeout--state-expired"
        isOpen={sessionStatus === "expired"}
        type="warning"
      >
        <Modal.Overlay />
        <Modal.Dialog textAlign="center">
          <Modal.Header
            typeStyle="displaySmall"
            color="secondary"
            iconBg
            iconAlign="center"
          >
            Imagine You received the email
          </Modal.Header>
          <P typeStyle="bodyMedium" color="secondary" mb={8}>
            Click below to reset your password
          </P>
          <Modal.Footer>
            <Modal.Footer.Button
              id="IdleTimeout__Button--logBackIn"
              variant="warning"
              {...loginButtonProps}
            >
              Reset Password
            </Modal.Footer.Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>
  );
};
