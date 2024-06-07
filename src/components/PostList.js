import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import { Container, TextField, List, ListItem, ListItemText, Typography } from '@mui/material';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await fetchPosts();
                setPosts(data);
                setFilteredPosts(data);
            } catch (error) {
                console.error('Failed to fetch posts', error);
            }
        };

        getPosts();
    }, []);

    useEffect(() => {
        setFilteredPosts(
            posts.filter(post =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, posts]);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Posts
            </Typography>
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <List>
                {filteredPosts.map(post => (
                    <ListItem key={post.id} divider>
                        <ListItemText
                            primary={post.title}
                            secondary={post.body}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default PostList;
