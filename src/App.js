import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Container } from '@mui/material';
import PostList from './components/PostList';

const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        SUSHANT REACT ASSIGNMENT
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <PostList />
            </Container>
        </>
    );
};

export default App;
