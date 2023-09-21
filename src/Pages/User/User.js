import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import './User.css'
import PrimaryButton from '../../Components/PrimaryButton';
import { AiOutlinePlus, AiOutlineUpload } from "react-icons/ai";
import { TfiImport } from 'react-icons/tfi'
import { BsArchive } from 'react-icons/bs'
import { BiFilterAlt } from 'react-icons/bi'
import  SecondaryButton  from '../../Components/SecondaryButton';
import downloadCSV from './DownloadCSV';
import { TextField } from '@mui/material';


const User = () => {

    const columns = [
      {
        name: 'Title',
        selector: (row) => row.title,
        sortable: true,
        
      },
      {
        name: 'Year',
        selector: (row) => row.year,
        sortable: true,
      },
      {
        name: 'name',
        selector: (row) => row.name,
        sortable: true,

      },
      {
        name: 'contact',
        selector: (row) => row.contact,
        sortable: true,
      },
    ];

  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
      name: 'sid',
      contact: 123445
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
      name: 'yasin',
      contact: 123445,
    },
    {
      id: 3,
      title: 'Ghostbusters',
      year: '1984',
      name: 'bobby',
      contact: 123445,
    },
    {
      id: 4,
      title: 'Ghostbusters',
      year: '1984',
      name: 'uday',
      contact: 123445,
    },
    {
      id: 5,
      title: 'fff',
      year: '1984',
      name: 'uday',
      contact: 123445,
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: '50px', // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };

  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {

    return (
      <div className='w-100'>
        <TextField
          size='small'
          sx={{
            backgroundColor: "#F4F4FE",
            width: '100%',
            height: '37px',
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none', // Remove the border
            },
            '& input::placeholder': {
              fontSize: '16px', // Adjust the font size as needed
            },
            '& label': {
              fontSize: '15px', // Adjust the font size as needed
            },
          }}
          className='col-11 col-md-7 text-small'
          id="outlined-basic"
          label="Search"
          variant="outlined" 
          />
      </div>
    );
  }, [filterText, resetPaginationToggle]);


  const handleExportClick = () => {
    console.log('it works')
    downloadCSV(data, 'movie_list.csv'); // Pass your data and the desired filename
  };

  
  return (
    <div className='bg-white'>
      <div className='border-top border-bottom d-flex align-items-center justify-content-between p-3'>
        <div>
          {subHeaderComponentMemo}
        </div>
        <div className='d-flex gap-2'>
          <PrimaryButton 
            variant="contained"
            title="Add"
            padding="0.2rem 1.2rem"
            icon={<AiOutlinePlus size={13} />}
            fontSize="14px"
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
          <div>
            <button className='filter-category'>
              <BiFilterAlt />
            </button>
            
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
        highlightOnHover
        pointerOnHover
      />
    </div>
  )
}

export default User