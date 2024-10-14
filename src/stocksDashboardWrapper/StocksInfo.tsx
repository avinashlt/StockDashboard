import React from 'react';
import { Grid, Paper, Typography, Box, Button, Avatar, Divider } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { styled } from '@mui/system';
import { green, blue, red, yellow, grey } from '@mui/material/colors';
import { useStocks } from '../hooks/useStocks'; // Import the useStocks hook

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
  const { data: stocks, isLoading, error } = useStocks();

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error loading data</Typography>;
  }

  return (
    <Box sx={{ flexGrow: 1, padding: 2, backgroundColor: grey[200], minHeight: '100vh' }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <StyledPaper>
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

        <Grid item xs={8}>
          <StyledPaper>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6" sx={{ color: blue[800], fontWeight: 'bold' }}>Overview</Typography>
              <Button variant="contained" color="secondary">View All Details</Button>
            </Box>
            
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

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: blue[800] }}>Stock Market</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <StyledPaper>
                    {stocks?.map((stock: { id: number, name: string, price: number, change: string }) => (
                      <Typography key={stock.id}>
                        {stock.change === 'up' ? '📈' : '📉'} {stock.name} - ${stock.price.toFixed(2)}
                      </Typography>
                    ))}
                  </StyledPaper>
                </Grid>
              </Grid>
            </Box>
          </StyledPaper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StocksInfo;
