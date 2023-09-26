import React, { useState, useCallback, useRef, useEffect   } from 'react'
import DataTable from 'react-data-table-component';
import './User.css'
import PrimaryButton from '../../Components/PrimaryButton';
import { AiOutlinePlus, AiOutlineUpload } from "react-icons/ai";
import { TfiImport } from 'react-icons/tfi'
import { BsArchive } from 'react-icons/bs'
import { BiFilterAlt } from 'react-icons/bi'
import  SecondaryButton  from '../../Components/SecondaryButton';
import downloadCSV from './DownloadCSV';
import { FormControlLabel, TextField } from '@mui/material';
import { Checkbox } from '@mui/material';
  import AddUser from './AddUser';
import ProfilePic from './ProfilePic';



const User = () => {

  const [selectedRows, setSelectedRows] = useState([]);

    const columns = [
      {
        name: 'Name',
        cell: (row) => <ProfilePic data={row} />,
        sortable: true,
        
      },
      {
        name: 'Email Address',
        selector: (row) => row.email,
        sortable: true,
      },
      {
        name: 'Designation',
        selector: (row) => row.designation,
        sortable: true,

      },
      {
        name: 'Reporting Manager',
        selector: (row) => row.reporting,
        sortable: true,
      },
      {
        name: 'Assign Client',
        selector: (row) => row.assign,
        sortable: true,
      }
    ];

  const data = [
    {
      id: 1,
      name: 'Amelia Jones',
      email: 'Ameliajones@gmail.com',
      designation: 'UIUX Designer',
      reporting: 'Prajakta',
      assign: 'Priyanka',
      profilePic: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXIlMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Emma Smith',
      email: 'Emmasmith@gmail.com',
      designation: 'Backend Developer',
      reporting: 'Shweta',
      assign: 'Priyanka',
      profilePic: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXIlMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'Charlotte Jones',
      email: 'Charlottejones@gmail.com',
      designation: 'Frontend Developer',
      reporting: 'Priyanka',
      assign: 'Priyanka',
      profilePic: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXIlMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      name: 'Olivia Jones',
      email: 'Oliviajones@gmail.com',
      designation: 'Tester',
      reporting: 'Dipti',
      assign: 'Priyanka',
      profilePic: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXIlMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      name: 'Olivia Williams',
      email: 'Oliviajones@gmail.com',
      designation: 'SEO',
      reporting: 'Pooja',
      assign: 'Priyanka',
      profilePic: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXIlMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: "50px", // override the row height
      },
    },
    headCells: {
      style: {
        padding: '12px',
      },
    },
    cells: {
      style: {
        padding: '12px',
      },
    },
  };

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle] = useState(false);

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) => {
      if (typeof value === 'string') {
        return value.toLowerCase().includes(filterText.toLowerCase());
      } else if (typeof value === 'number') {
        // Convert the number to a string and then perform the search
        return value.toString().includes(filterText);
      }
      return false;
    })
  );


  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <div className="w-100">
        <TextField
          size="small"
          sx={{
            backgroundColor: "#F4F4FE",
            width: "100%",
            height: "37px",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none", // Remove the border
            },
            "& input::placeholder": {
              fontSize: "16px", // Adjust the font size as needed
            },
            "& label": {
              fontSize: "15px", // Adjust the font size as needed
            },
          }}
          className="col-11 col-md-7 text-small hello"
          id="outlined-basic"
          label="Search"
          variant="outlined" 
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
    );
  }, []);

  const handleExportClick = () => {
    console.log("it works");
    downloadCSV(data, "movie_list.csv"); // Pass your data and the desired filename
  };

  const handleChange = useCallback(state => {
    setSelectedRows(state.selectedRows);
    console.log(state.selectedRows)
  }, []);



  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formControlLabelStyle = {
    "& .MuiFormControlLabel-label": {
      color: '#131313',
      fontFamily: 'Open Sans',
      fontSize: '11.397px',
      fontStyle: 'normal',
      fontEeight: 400,
      lineHeight: 'normal',
      textTransform: 'capitalize'
    }
  }

  // filter by category dropdown starts

  const [isDivVisible, setIsDivVisible] = useState(false);
  const divRef = useRef(null);
  const buttonRef = useRef(null);

  const handleButtonClick = () => {
    setIsDivVisible(!isDivVisible);
  };

  const handleClickOutside = (e) => {
    if (
      divRef.current &&
      !divRef.current.contains(e.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target)
    ) {
      setIsDivVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // filter by category dropdown ends 



  return (
    <div className="bg-white">
      <div className="border-top border-bottom d-flex align-items-center justify-content-between p-3">
        <div>{subHeaderComponentMemo}</div>
        <div className="d-flex gap-2">
          <PrimaryButton
            variant="contained"
            title="Add"
            padding="0.2rem 1.2rem"
            icon={<AiOutlinePlus size={13} />}
            fontSize="14px"
            onClick={openModal}
          />
          <SecondaryButton
            title="Import"
            padding="0.2rem 1.2rem"
            icon={<TfiImport size={13} />}
            fontSize="13px"
          />
          <SecondaryButton
            title="Export"
            padding="0.2rem 1.2rem"
            icon={<AiOutlineUpload size={16} />}
            fontSize="13px"
            onClick={handleExportClick}
          />
          <SecondaryButton
            title="Archive"
            padding="0.2rem 1.2rem"
            icon={<BsArchive size={14} />}
            fontSize="13px"
          />
          <div className='position-relative'>
            <button className='filter-category h-100' onClick={handleButtonClick} ref={buttonRef}>
              <BiFilterAlt />
            </button>
            {isDivVisible && (
            <div ref={divRef} className="category-filter-dropdown">
                <FormControlLabel
                  value="ID"
                  control={
                    <Checkbox
                      sx={{
                        color: '#4CCD8D',
                        "&.Mui-checked": {
                          color: '#4CCD8D',
                        },
                        "& .MuiSvgIcon-root": { fontSize: 18 },
                      }}
                    />}
                  label="ID"
                  labelPlacement="end"
                  sx={{ ...formControlLabelStyle }}
                  onChange={(e) => console.log(e.target.value)}
                />
                <FormControlLabel
                  value="First Name"
                  control={
                    <Checkbox
                      sx={{
                        color: '#4CCD8D',
                        "&.Mui-checked": {
                          color: '#4CCD8D',
                        },
                        "& .MuiSvgIcon-root": { fontSize: 18 },
                      }}
                    />}
                  label="First Name"
                  labelPlacement="end"
                  sx={{ ...formControlLabelStyle }}
                  onChange={(e) => console.log(e.target.value)}
                />
                <FormControlLabel
                  value="Last Name"
                  control={
                    <Checkbox
                      sx={{
                        color: '#4CCD8D',
                        "&.Mui-checked": {
                          color: '#4CCD8D',
                        },
                        "& .MuiSvgIcon-root": { fontSize: 18 },
                      }}
                    />}
                  label="Last Name"
                  labelPlacement="end"
                  sx={{ ...formControlLabelStyle }}
                  onChange={(e) => console.log(e.target.value)}
                />
                <FormControlLabel
                  value="Email"
                  control={
                    <Checkbox
                      sx={{
                        color: '#4CCD8D',
                        "&.Mui-checked": {
                          color: '#4CCD8D',
                        },
                        "& .MuiSvgIcon-root": { fontSize: 18 },
                      }}
                    />}
                  label="Email"
                  labelPlacement="end"
                  sx={{ ...formControlLabelStyle }}
                  onChange={(e) => console.log(e.target.value)}
                />
                <FormControlLabel
                  value="Designation"
                  control={
                    <Checkbox
                      sx={{
                        color: '#4CCD8D',
                        "&.Mui-checked": {
                          color: '#4CCD8D',
                        },
                        "& .MuiSvgIcon-root": { fontSize: 18 },
                      }}
                    />}
                  label="Designation"
                  labelPlacement="end"
                  sx={{ ...formControlLabelStyle }}
                  onChange={(e) => console.log(e.target.value)}
                />
                <FormControlLabel
                  value="Repoting Manager"
                  control={
                    <Checkbox
                      sx={{
                        color: '#4CCD8D',
                        "&.Mui-checked": {
                          color: '#4CCD8D',
                        },
                        "& .MuiSvgIcon-root": { fontSize: 18 },
                      }}
                    />}
                  label="Repoting Manager"
                  labelPlacement="end"
                  sx={{ ...formControlLabelStyle }}
                  onChange={(e) => console.log(e.target.value)}
                />
                <FormControlLabel
                  value="Assign Client"
                  control={
                    <Checkbox
                      sx={{
                        color: '#4CCD8D',
                        "&.Mui-checked": {
                          color: '#4CCD8D',
                        },
                        "& .MuiSvgIcon-root": { fontSize: 18 },
                      }}
                    />}
                  label="Assign Client"
                  labelPlacement="end"
                  sx={{ ...formControlLabelStyle }}
                  onChange={(e) => console.log(e.target.value)}
                />
            </div>
            )}
          </div>
        </div>
      </div>

      <DataTable
        // title="Data Table with Search"
        columns={columns}
        data={filteredData}
        customStyles={customStyles}
        pagination
        paginationResetDefaultPage={resetPaginationToggle}
        subHeader
        // subHeaderComponent={subHeaderComponentMemo}
        // highlightOnHover
        // pointerOnHover
        selectableRows
        onSelectedRowsChange={handleChange}
        selectableRowsComponent={Checkbox}
        // sortIcon={<ArrowDownward  />}
      />
      {isModalOpen && (
        <AddUser handleClose={closeModal} open={isModalOpen} />
      )}
    </div>
    
  )
}

export default User;
