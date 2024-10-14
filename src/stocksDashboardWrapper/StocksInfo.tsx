import React from 'react';
import { Grid, Paper, Typography, Box, Button, Avatar, IconButton, Divider } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { styled } from '@mui/system';
import { green, blue, red, yellow, grey } from '@mui/material/colors';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: grey[900],
  background: grey[100],
  borderRadius: 15,
  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const StocksInfo = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2, backgroundColor: grey[200], minHeight: '100vh' }}>
      {/* Container Grid */}
      <Grid container spacing={2}>
        {/* Left Section - 4 columns */}
        <Grid item xs={4}>
          <StyledPaper>
            {/* Sidebar */}
            <Box sx={{ mt: 2, mb: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: blue[600] }}>
                <AccountBalanceWalletIcon fontSize="large" /> Navigation
              </Typography>
              <Divider />
              <Box sx={{ mt: 2 }}>
                <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <MenuBookIcon sx={{ mr: 1, color: blue[500] }} /> Dashboard
                </Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <ShowChartIcon sx={{ mr: 1, color: green[500] }} /> Markets
                </Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <AttachMoneyIcon sx={{ mr: 1, color: yellow[700] }} /> Transactions
                </Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Avatar sx={{ mr: 1, width: 24, height: 24 }} /> Profile
                </Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <UpgradeIcon sx={{ mr: 1, color: red[500] }} /> Settings
                </Typography>
              </Box>
              <Box sx={{ mt: 4, p: 2, bgcolor: 'lightblue', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Upgrade Plan</Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Upgrade Now
                </Button>
              </Box>
            </Box>
          </StyledPaper>
        </Grid>

        {/* Right Section - 8 columns */}
        <Grid item xs={8}>
          <StyledPaper>
            {/* Header and Overview Section */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6" sx={{ color: blue[800], fontWeight: 'bold' }}>Overview</Typography>
              <Button variant="contained" color="secondary">View All Details</Button>
            </Box>
            
            {/* Widgets */}
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <StyledPaper>
                  <Typography variant="subtitle1">Total Sales</Typography>
                  <Typography variant="h4" sx={{ color: green[700] }}>$3,450</Typography>
                </StyledPaper>
              </Grid>
              <Grid item xs={4}>
                <StyledPaper>
                  <Typography variant="subtitle1">Cost</Typography>
                  <Typography variant="h4" sx={{ color: red[700] }}>$1,750</Typography>
                </StyledPaper>
              </Grid>
              <Grid item xs={4}>
                <StyledPaper>
                  <Typography variant="subtitle1">Revenue</Typography>
                  <Typography variant="h4" sx={{ color: blue[700] }}>$5,200</Typography>
                </StyledPaper>
              </Grid>
            </Grid>

            {/* Stock Market */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: blue[800] }}>Stock Market</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <StyledPaper>
                    <Typography>📈 Netflix - $5690.00</Typography>
                    <Typography>📉 Microsoft - $2690.00</Typography>
                    <Typography>📈 Tesla - $7690.00</Typography>
                  </StyledPaper>
                </Grid>
              </Grid>
            </Box>

            {/* Cash Flow */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: green[800] }}>Cash Flow</Typography>
              <StyledPaper>
                {/* Placeholder for Chart */}
                <Typography>📊 Chart Placeholder</Typography>
              </StyledPaper>
            </Box>

            {/* Latest Transactions */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: blue[800] }}>Latest Transactions</Typography>
              <StyledPaper>
                <Typography>Apple Inc. - $9789.00 📈</Typography>
                <Typography>Amazon - $6789.00 📈</Typography>
                <Typography>IBM - $1673.00 📉</Typography>
              </StyledPaper>
            </Box>
          </StyledPaper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StocksInfo;
