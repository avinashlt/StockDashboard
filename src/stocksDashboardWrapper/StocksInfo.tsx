import React from 'react';
import { Grid, Paper, Typography, Box, Button, Avatar, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: "blue",
}));

const StocksInfo = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      {/* Container Grid */}
      <Grid container spacing={2}>
        
        <Grid item xs={4}>
          <StyledPaper>
            {/* Sidebar */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">Navigation</Typography>
              <Typography>Dashboard</Typography>
              <Typography>Markets</Typography>
              <Typography>Transactions</Typography>
              <Typography>Profile</Typography>
              <Typography>Settings</Typography>
            </Box>
            <Box sx={{ mt: 2, p: 2, bgcolor: 'lightgrey', borderRadius: 2 }}>
              <Typography variant="h6">Upgrade Plan</Typography>
              <Button variant="contained">Upgrade Now</Button>
            </Box>
          </StyledPaper>
        </Grid>

        {/* Right Section - 8 columns */}
        <Grid item xs={8}>
          <StyledPaper>
            {/* Header and Overview Section */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6">Overview</Typography>
              <Button variant="contained">View All Details</Button>
            </Box>
            
            {/* Widgets */}
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <StyledPaper>
                  <Typography variant="subtitle1">Total Sales</Typography>
                  <Typography variant="h4">$3,450</Typography>
                </StyledPaper>
              </Grid>
              <Grid item xs={4}>
                <StyledPaper>
                  <Typography variant="subtitle1">Cost</Typography>
                  <Typography variant="h4">$3,450</Typography>
                </StyledPaper>
              </Grid>
              <Grid item xs={4}>
                <StyledPaper>
                  <Typography variant="subtitle1">Revenue</Typography>
                  <Typography variant="h4">$3,450</Typography>
                </StyledPaper>
              </Grid>
            </Grid>

            {/* Stock Market */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6">Stock Market</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <StyledPaper>
                    <Typography>Netflix - 5690.00</Typography>
                    <Typography>Microsoft - 2690.00</Typography>
                    <Typography>Tesla - 7690.00</Typography>
                  </StyledPaper>
                </Grid>
              </Grid>
            </Box>

            {/* Cash Flow */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6">Cash Flow</Typography>
              <StyledPaper>
                {/* Placeholder for Chart */}
                <Typography>Chart Placeholder</Typography>
              </StyledPaper>
            </Box>

            {/* Latest Transactions */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6">Latest Transactions</Typography>
              <StyledPaper>
                <Typography>Apple Inc. - $9789.00</Typography>
                <Typography>Amazon - $6789.00</Typography>
                <Typography>IBM - $1673.00</Typography>
              </StyledPaper>
            </Box>
          </StyledPaper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StocksInfo;
