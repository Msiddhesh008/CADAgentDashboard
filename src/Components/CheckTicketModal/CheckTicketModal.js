import * as React from "react";
import Modal from "@mui/material/Modal";
import { Paper } from "@mui/material";

const CheckTicketModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <div className="p-2">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            p: 2,
            pt: 3,
          }}
        >
          <table class="table table-borderless">
            <thead>
              <tr>
                <th className="col-4 pb-3">Ticket Status</th>
                <th onClick={handleClose} className="text-end pb-3 pointer">
                  X
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pb-3">Ticket Id</td>
                <td className="pb-3">785695</td>
              </tr>
              <tr>
                <td className="pb-3">Subject</td>
                <td className="pb-3">Lorem ipsum dolor sit amet.</td>
              </tr>
              <tr>
                <td className="pb-3">Status</td>
                <td className="pb-3">In Prosses</td>
              </tr>
            </tbody>
          </table>
        </Paper>
      </Modal>
    </div>
  );
};

export default CheckTicketModal;
