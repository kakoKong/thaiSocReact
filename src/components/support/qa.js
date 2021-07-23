import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Divider } from '@material-ui/core';

import { questions } from '../../data/support';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  detail:{
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightRegular,
  }
}));

export default function QA() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {questions.map((question) => (
        <>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Q: {question.q}</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography className={classes.detail}>
                A: {question.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </>
      ))}
    </div>
  );
}