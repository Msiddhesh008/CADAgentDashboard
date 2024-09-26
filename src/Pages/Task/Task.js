import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import TuneIcon from "@mui/icons-material/Tune";
import FilterAltTwoToneIcon from "@mui/icons-material/FilterAltTwoTone";
import FileUploadTwoToneIcon from "@mui/icons-material/FileUploadTwoTone";
import ListAltTwoToneIcon from '@mui/icons-material/ListAltTwoTone';
import ViewQuiltTwoToneIcon from '@mui/icons-material/ViewQuiltTwoTone';
import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
import TaskListView from "../../Components/TaskListView/TaskListView";
import TaskGridView from "../../Components/TaskGridView/TaskGridView";
import TaskTimelineView from "../../Components/TaskTimelineView/TaskTimelineView";

const Task = () => {
  const [activeButton, setActiveButton] = useState("List View");

  const handleButtonClick = (buttonLabel) => {
    setActiveButton(buttonLabel);
  };

  return (
    <Paper
      elevation={0}
      className=" h-100 d-flex flex-column  justify-content-start align-items-start "
      square={true}
    >
      <div className="d-flex p-3 pb-4 w-100 justify-content-between">
        <div className="col-md-3 mb-4 mb-md-0 col-12 d-flex align-itmes-center">
          <TextField
            fullWidth
            id="filled-search"
            label="Search field"
            type="search"
            variant="outlined"
            size="small"
            inputProps={{
              height: "14px",
            }}
          />
        </div>

        <div className="col-md-5 col-12 d-flex justify-content-center">
          <div className="row gap-2 w-100 justify-content-center">
            <div className="col-5 p-0 d-flex align-items-center">
              <Button variant="contained" className="button-contained m-0">
                <AddIcon /> Add New Task
              </Button>
            </div>

            <div className="col-3 p-0 d-flex align-items-center">
              <Button
                variant="text"
                style={{
                  textTransform: "none",
                  backgroundColor: "#E2ECFF",
                }}
                className="button-outlind w-100"
              >
                <FileUploadTwoToneIcon color="primary" />
                Export
              </Button>
            </div>
            <div
              className="col-1 pointer rounded-2 d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#E2ECFF",
                marginTop: "0.1rem",
                marginBottom: "0.1rem",
              }}
            >
              <TuneIcon color="primary" />
            </div>
            <div
              className="col-1 pointer  rounded-2 d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#E2ECFF",
                marginTop: "0.1rem",
                marginBottom: "0.1rem",
              }}
            >
              <FilterAltTwoToneIcon color="primary" />
            </div>
          </div>
        </div>
      </div>

<Paper
  elevation={0}
  square={true}
  style={{
    backgroundColor: "#ffffff",
  }}
  className="d-flex flex-column flex-wrap  w-100">

  <div className=" p-3 gap-3 d-flex justify-content-start">
    <Button
      onClick={() => handleButtonClick("List View")}
      variant="text"
      style={{
        textTransform:"none",
        backgroundColor: activeButton === "List View" ? "#FFFFFF" : "#FFFFFF",
        color: activeButton === "List View" ? "#191D88" : "#c4c4c4",
        borderRadius: "0",
        fontSize: "15px",
        borderBottom: activeButton === "List View" ? "2px solid #191D88" : "2px solid #ffffff",
      }}
    >
     <ListAltTwoToneIcon/> List View
    </Button>
    <Button
      onClick={() => handleButtonClick("Grid View")}
      variant="text"
      style={{
        textTransform:"none",
        backgroundColor:
          activeButton === "Grid View" ? "#FFFFFF" : "#FFFFFF",
        color: activeButton === "Grid View" ? "#191D88" : "#c4c4c4",
        borderRadius: "0",
        fontSize: "15px",
        borderBottom: activeButton === "Grid View" ? "2px solid #191D88" : "2px solid #ffffff",
      }}
    >
      <ViewQuiltTwoToneIcon /> Grid View
    </Button>
    <Button
      onClick={() => handleButtonClick("Timeline View")}
      variant="text"
      style={{
        textTransform:"none",
        backgroundColor:
          activeButton === "Timeline View" ? "#FFFFFF" : "#FFFFFF",
        color: activeButton === "Timeline View" ? "#191D88" : "#c4c4c4",
        borderRadius: "0",
        fontSize: "15px",
        borderBottom: activeButton === "Timeline View" ? "2px solid #191D88" : "2px solid #ffffff",
      }}
    >
      <GridViewTwoToneIcon/> Timeline View
    </Button>
  </div>
  <Paper elevation={0} square>
    {activeButton === "List View" ? (
      <TaskListView />
    ) : activeButton === "Grid View" ? (
      <TaskGridView />
    ) : (
      <TaskTimelineView />
    )}
  </Paper>
</Paper>
    </Paper>
  );
};

export default Task;
