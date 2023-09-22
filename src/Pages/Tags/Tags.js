import React, { Fragment, useState } from 'react';
import './Tags.css';
import Table from '../../Tables/TagsTable/Table';
import { Typography } from '@mui/material';
import PrimaryButton from '../../Components/PrimaryButton';
import LocalOfferTwoToneIcon from '@mui/icons-material/LocalOfferTwoTone';
import AddTag from '../../Components/AddTag/AddTag';
import CustomTag from '../../Components/CustomTag/CustomTag';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

const Tags = () => {
  const [addTagVisible, setAddTagVisible] = useState(false);

  const [rows, setRows] = useState([
    createData(<CustomTag />, "Lorem Firfs Lorem ipsum", "10 March 2023", false, <DeleteTwoToneIcon style={{ color: "#FD394A", cursor:"pointer" }} />, 0),
    createData(<CustomTag />, "Lorem ipsum Lorem ipsum", "10 March 2023", false, <DeleteTwoToneIcon style={{ color: "#FD394A", cursor:"pointer" }} />, 1),
    createData(<CustomTag />, "Lorem ipsum Lorem ipsum", "10 March 2023", false, <DeleteTwoToneIcon style={{ color: "#FD394A", cursor:"pointer" }} />, 2),
    createData(<CustomTag />, "Lorem ipsum Lorem ipsum", "10 March 2023", false, <DeleteTwoToneIcon style={{ color: "#FD394A", cursor:"pointer" }} />, 3),
    createData(<CustomTag />, "Lorem ipsum Lorem ipsum", "10 March 2023", false, <DeleteTwoToneIcon style={{ color: "#FD394A", cursor:"pointer" }} />, 4),
  ]);

  const handleSwitchChange = (index) => {
    const updatedRows = [...rows];
    updatedRows[index].status = !updatedRows[index].status;
    setRows(updatedRows);
  };

  function createData(name, description, createdDate, status, action, index) {
    return { name, description, createdDate, status, action, index };
  }

  const handleAdd = () => {
    const newRow = createData(
      <CustomTag />,
      "Additional Item 1 Description",
      "1 March 1995",
      false,
      <DeleteTwoToneIcon style={{ color: "#FD394A" }} />,
      rows.length
    );
    setRows((prevRows) => [...prevRows, newRow]);
  };

  const handleDelete = (indexToDelete) => {
    // Filter out the row with the specified index
    const updatedRows = rows.filter((row) => row.index !== indexToDelete);
    setRows(updatedRows);
  };


  const handleTagVisible = () => {
    setAddTagVisible(!addTagVisible);
  };

  return (
    <div className='p-3 overflow-auto w-85 text-dark h-auto rounded-2 d-flex flex-column justify-content-start align-items-center fs-2 fw-bold'>
      {addTagVisible ? (
        <AddTag handleAdd={handleAdd} />
      ) : (
        <Fragment>
          <div className='d-flex justify-content-between align-items-center w-100 mb-5 mt-4'>
            <Typography style={{ color: "#555" }} variant="h6">
              Tags List
            </Typography>
            <PrimaryButton
              onClick={handleTagVisible}
              title="Add new tag"
              icon={<LocalOfferTwoToneIcon color="white" />}
              padding="0.4rem 1rem"
            />
          </div>
          <Table rows={rows} handleSwitchChange={handleSwitchChange} handleDelete={handleDelete} />
        </Fragment>
      )}
    </div>
  );
};

export default Tags;
