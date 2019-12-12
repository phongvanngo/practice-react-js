import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

class GridDemo extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={5}>
          <Grid item xs={12}>12sédfsdfdsfsdfsfgoajeiooiwlkweklfjkewljfklwejkflwejklfjkwelljédfsdfdsfsdfsfgoajeiooiwlkweklfjkewljfklwejkflwejklfjkwelljédfsdfdsfsdfsfgoajeiooiwlkweklfjkewljfklwejkédfsdfdsfsdfsfgoajeiooiwlkweklfjkewljfklwejkflwejklfjkwelljédfsdfdsfsdfsfgoajeiooiwlkweklfjkewljfklwejkflwejklfjkwelljédfsdfdsfsdfsfgoajeiooiwlkweklfjkewljfklwejkflwejklfjkwelljédfsdfdsfsdfsfgoajeiooiwlkweklfjkewljfklwejkflwejklfjkwelljflwejklfjkwelljfjkwljklwjrklw
          </Grid>
          <Grid item xs={6}>6 sédfsdfdsfsdfsfgoajeiooiwlkweklfjkewljfklwejkflwejklfjkwelljfjkwljklwjrklw
          </Grid>
          <Grid item xs={6}>6 sédfsdfdsfsdfsfgoajeiooiwlkweklfjkewljfklwejkflwejklfjkwelljfjkwljklwjrklw
          </Grid>
          <Grid item xs={3}>
            <Typography noWrap
              variant="body1"
              style={{ wordBreak: 'break-word' }}
            >
             3 sédfsdfdsfsdfsfgoajeiooiwlkwekdfdsfsdfsdsdflfjkewljfklwejkflwejklfjkwelljfjkwljklwjrklw
            </Typography>
            
          </Grid >
          <Grid item xs={3}style={{ wordBreak: 'break-word' }}>3 sédfsdfdsfsdfsfgoajeiooiwlkweklfjkewljfklwejkflwejklfjkwelljfjkwljklwjrklw
          </Grid>
          <Grid item xs={3}style={{ wordBreak: 'break-word' }}>3 sédfsdfdsfsdfsfgoajeiooiwlkweklfjkewljfklwejkflwejklfjkwelljfjkwljklwjrklw
          </Grid>
          <Grid item xs={3}style={{ wordBreak: 'break-word' }}>3 sédfsdfdsfsdfsfgoajeiooiwlkweklfjkewljfklwejkflwejklfjkwelljfjkwljklwjrklw
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default GridDemo;