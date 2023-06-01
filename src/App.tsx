import { AppBar, Box, Grid, Paper, TextField, Toolbar, Typography, } from '@mui/material'
import { Container, Stack } from '@mui/system'
import AutoModeIcon from '@mui/icons-material/AutoMode';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CalculateIcon from '@mui/icons-material/Calculate';
import AddIcon from '@mui/icons-material/Add';
import { Slider } from '@mui/material';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



function createData(
  name: string,
  calories: number,
  fat: string,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Barck obama', 1, '75015 Paris', 1, 4.0),
  createData('Maitre gims', 237, '75015 Paris', 2, 4.3),
  createData('Eclair', 262, '75015 Paris', 4, 6.0),
  createData('Cupcake', 305, '75015 Paris', 4, 4.3),
  createData('Salade', 356, '75015 Paris', 4, 3.9),
];


const App = () => {

  return (
    <>
      <AppBar position='static'>
        <Container maxWidth='xl' sx={{ backgroundColor: '#FFF' }}>
          <Toolbar disableGutters sx={{
            justifyContent: 'space-between',
            backgroundColor: '#FFF'
          }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#0F0F0F',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Stack direction="row" spacing={2} sx={{ flex: 1 }}>
              <Stack direction="row" component={'a'} spacing={1} justifyContent='center' alignItems={'center'}>
                <AutoModeIcon sx={{ color: "#000" }} />
                <Typography variant="subtitle1" color={'#000'}>Opérations</Typography>
              </Stack>
              <Stack direction="row" component={'a'} spacing={1} justifyContent='center' alignItems={'center'}>
                <CalendarMonthIcon sx={{ color: "#000" }} />
                <Typography variant="subtitle1" color={'#000'}>Tournée</Typography>
              </Stack>
              <Stack direction="row" component={'a'} spacing={1} justifyContent='center' alignItems={'center'}>
                <SupervisorAccountIcon sx={{ color: "#000" }} />
                <Typography variant="subtitle1" color={'#000'}>Portefeuille</Typography>
              </Stack>
              <Stack direction="row" component={'a'} spacing={1} justifyContent='center' alignItems={'center'}>
                <ContentCopyIcon sx={{ color: "#000" }} />
                <Typography variant="subtitle1" color={'#000'}>Documents</Typography>
              </Stack>
              <Stack direction="row" component={'a'} spacing={1} justifyContent='center' alignItems={'center'}>
                <TrendingUpIcon sx={{ color: "#000" }} />
                <Typography variant="subtitle1" color={'#000'}>Statistiques</Typography>
              </Stack>
            </Stack>
            <Stack direction={'row'} sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '1rem',
              paddingBottom: '1rem'
            }}>
              <TextField id="outlined-basic" label="Recherche" variant="outlined" />
              <Stack direction={'row'} spacing={1} sx={{
                marginLeft: '1rem'
              }}>
                <NotificationsNoneIcon sx={{ color: "#000" }} />
                <CalculateIcon sx={{ color: "#000" }} />
              </Stack>
            </Stack>
          </Toolbar>

        </Container>
      </AppBar>

      <Container maxWidth='xl'>
        <Grid container columnSpacing={2} sx={{ marginTop: '3rem' }}>
          {/* left */}
          <Grid xs={12} sm={3} sx={{ padding: '1%' }}>
            <Typography variant='h5' sx={{ marginBottom: '7%' }}> Objectif PDT</Typography>
            <Paper elevation={3} sx={{
              padding: '2% 5%',
              marginBottom: '7%'
            }}>
              <Typography variant="subtitle1" sx={{ marginBottom: '4%' }}> Suivi du PDT : tous clients</Typography>
              <Typography variant="h5" textAlign={'center'}> 35,2%</Typography>
              <Box component={'div'} sx={{ width: '100%', margin: '4% 0' }}>
                <Slider
                />
              </Box>
              <Typography variant="body2" sx={{ color: '#757575' }}>15 effectué sur 50 visites prévues ce mois-ci</Typography>

            </Paper>
            <Paper elevation={3} sx={{
              padding: '2% 5%',
              marginBottom: '7%'
            }}>
              <Typography variant="subtitle1" sx={{ marginBottom: '4%' }}> Objectif du plan de Tournée</Typography>
              <Typography variant="h5" textAlign={'center'}> 35,2%</Typography>
              <Box component={'div'} sx={{ width: '100%', margin: '4% 0' }}>
                <Slider
                />
              </Box>
              <Typography variant="body2" sx={{ color: '#757575' }}>15 effectué sur 50 visites prévues ce mois-ci</Typography>
            </Paper>
            <Typography variant='h5' sx={{ marginBottom: '7%' }}> Chiffre d'affaire</Typography>

            <Paper elevation={3} sx={{
              padding: '2% 5%',
              marginBottom: '7%'
            }}>
              <Typography variant='h5' sx={{ marginBottom: '7%' }}> CA cuml N</Typography>
              <Stack direction={'row'} spacing={2} sx={{
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginLeft: "4%"
              }}>
                <TrendingUpIcon sx={{ color: "#000" }} />
                <Typography variant='h4'>34,56K</Typography>
              </Stack>
            </Paper>
          </Grid>


          {/* center */}
          <Grid xs={12} sm={6} sx={{ padding: '1%' }}>
            <Typography variant='h5' sx={{ marginBottom: '7%' }}>Mes prochains RDV</Typography>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{
              marginTop : '5%'
            }}>
              <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4423.584737974402!2d2.2093735766517635!3d48.931028346701225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66419afc94c11%3A0x75aa41f8b8a24fc6!2s80%20Av.%20Gabriel%20P%C3%A9ri%2C%2095870%20Bezons!5e0!3m2!1sfr!2sfr!4v1685657509305!5m2!1sfr!2sfr" width="600" height="450" loading="lazy"></iframe>
            </Box>
          </Grid>



          {/* right */}
          <Grid xs={12} sm={3} sx={{ padding: '1%' }}>
            <Typography variant='h5' sx={{ marginBottom: '7%' }}>Taches</Typography>

            <Button variant='outlined' startIcon={<AddIcon />}>
              Ajouter une Tache
            </Button>
          </Grid>
        </Grid>
      </Container>

    </>
  )
}

export default App