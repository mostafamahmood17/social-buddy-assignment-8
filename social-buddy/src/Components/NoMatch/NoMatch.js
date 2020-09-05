import React from 'react';
import Box from '@material-ui/core/Box';

const NoMatch = () => {
    return (
        <div style={{ width: '100%' }}>
        <Box color = "#ba000d" fontSize= "5rem" border={5} textAlign="center"  m={5} p={5}>
            Sorry!!! Page Not Found
        </Box>
        </div>
        
    );
};

export default NoMatch;