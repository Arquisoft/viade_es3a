import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { List, Value, Name, Link, Image } from '@solid/react';

import Photo from './Photo.js';
import Paper from "@material-ui/core/Paper";

import styles from "./Profile.css";

export default ({ webId, fullName, imageSrc }) =>
      <Grid container
            spacing={16}
            direction="row"
            justify="flex-start"
            alignItems="center">
        <Grid item xs={12} md={2}>
          <Photo name={fullName} src={imageSrc}/>
        </Grid>
        
        <Grid>
            <div class="card bg-info text-white">
                <div class="card-body">
                    <h4 class="card-title" id="name">
                        <Value src={"user.name"} />
                    </h4>
                    
                    <Grid item xs={12} md={10}>
                        <Paper className={styles.header} elevation={1}>
                            <Typography variant="h5" component="h3">
                            {fullName}
                            </Typography>
                            <Typography variant="caption">
                            {webId}
                            </Typography>
                        </Paper>
                    </Grid>
                    <br></br>
                    <Link href={`[${webId}]`} className="btn btn-light">Profile</Link>
                    
                </div>
            </div>
        </Grid>
        
      </Grid>
