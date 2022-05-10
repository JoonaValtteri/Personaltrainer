import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { format } from 'date-fns'

function Traininglist() {
    const [trainings, setTrainings] = useState([]);
    const [msg, setMsg] = useState('');
    const [open, setOpen] = useState(false);


    useEffect(() => {
        fetchTrainings();
    }, []);

    const fetchTrainings = () => {
        fetch("https://customerrest.herokuapp.com/api/trainings")
            .then(response => response.json())
            .then(data => setTrainings(data.content))
    }

    const deleteTraining = (link) => {
        if (window.confirm('Are you sure?')) {
            fetch(link, { method: 'DELETE' })
                .then(response => {
                    if (response.ok) {
                        setMsg('Training deleted')
                        setOpen(true);
                        fetchTrainings();
                    }
                    else {
                        alert('Something went wrong');
                    }
                })
        }
    }

    const columns = [
        { field: 'date', sortable: true, filter: true, valueFormatter: params => format(new Date(params.value), 'dd.MM.yyyy HH:MM') },
        { field: 'duration', sortable: true, filter: true },
        { field: 'activity', sortable: true, filter: true },
        {
            headerName: 'Delete',
            width: 100,
            field: 'links.1.href',
            cellRenderer: params =>
                <IconButton color="error" onClick={() => deleteTraining(params.value)}>
                    <DeleteIcon />
                </IconButton>
        },
    ]

    return (
        <>
            <div className="ag-theme-material" style={{ height: 600, width: '90%' }}>
                <AgGridReact
                    columnDefs={columns}
                    rowData={trainings}
                    pagination={true}
                    paginationPageSize={10}
                    suppressCellFocus={true}

                />
            </div>
            <Snackbar
                open={open}
                message={msg}
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
            />
        </>
    )

}

export default Traininglist;