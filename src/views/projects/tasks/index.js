import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, IconButton } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Tasks() {
    // const rows = [
    //     { name: '1', task: 'Task 1', deadline: '20/09/2022', assignee: 'Đinh Hường', reviewer: 'Hồng Ngọc', status: 'Working', delete: '' }
    // ];

    const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => ({
        name: '1',
        task: 'Task 1',
        deadline: '20/09/2022',
        description: 'Lorem ipsum',
        assignee: 'Đinh Hường',
        reviewer: 'Hồng Ngọc',
        status: 'Working',
        delete: ''
    }));
    return (
        <Box>
            <Box pt={1} pb={2} textAlign="right">
                <Button variant="contained" color="success" startIcon={<AddBoxIcon />} onClick={() => setOpen(true)}>
                    Thêm Task
                </Button>

                {/* <AddForm {...{ open, handleClose }} /> */}
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Task</TableCell>
                            <TableCell align="right">Deadline</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Assignee</TableCell>
                            <TableCell align="right">Reviewer</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.task}
                                </TableCell>
                                <TableCell align="right">{row.deadline}</TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right">{row.assignee}</TableCell>
                                <TableCell align="right">{row.reviewer}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right">
                                    <IconButton size="small" color="error">
                                        <DeleteForeverIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
