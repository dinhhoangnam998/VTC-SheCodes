import { Box, Grid, Paper, TextField, Typography } from '@mui/material';

export default function Members() {
    return (
        <Paper sx={{ p: 2 }}>
            <Grid container>
                <Grid item xs={6}>
                    <Box p={2}>
                        <Typography variant="h4" align="center">
                            Members
                        </Typography>

                        <Box
                            sx={{
                                '& > *': {
                                    maxWidth: 400,
                                    marginX: 'auto'
                                }
                            }}
                        >
                            <Box>
                                <TextField margin="normal" variant="standard" fullWidth value={'Đinh Thị Hường'}></TextField>
                            </Box>
                            <Box>
                                <TextField margin="normal" variant="standard" fullWidth value={'Hoàng Thị Hồng Ngọc'}></TextField>
                            </Box>
                            <Box>
                                <TextField margin="normal" variant="standard" fullWidth value={'Nguyễn Thị Hương'}></TextField>
                            </Box>
                            <Box>
                                <TextField margin="normal" variant="standard" fullWidth value={'Nguyễn Thị Huyền'}></TextField>
                            </Box>
                            <Box>
                                <TextField margin="normal" variant="standard" fullWidth value={'Lương Thị Mai Linh'}></TextField>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ p: 2, pl: 2.5, borderLeft: '1px solid grey', height: '100%' }}>
                        <Typography variant="h4" align="center">
                            Roles
                        </Typography>

                        <Box
                            sx={{
                                '& > *': {
                                    maxWidth: 400,
                                    marginX: 'auto'
                                }
                            }}
                        >
                            <Box>
                                <TextField margin="normal" variant="standard" fullWidth value={'Web Developer'}></TextField>
                            </Box>
                            <Box>
                                <TextField margin="normal" variant="standard" fullWidth value={'Designer'}></TextField>
                            </Box>
                            <Box>
                                <TextField margin="normal" variant="standard" fullWidth value="Backend Developer"></TextField>
                            </Box>
                            <Box>
                                <TextField margin="normal" variant="standard" fullWidth value="Mobile Developer"></TextField>
                            </Box>
                            <Box>
                                <TextField margin="normal" variant="standard" fullWidth value="Tester"></TextField>
                            </Box>
                            {/* <Box>
                                <TextField margin="normal" variant="standard" fullWidth value="Project Manager"></TextField>
                            </Box> */}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}
