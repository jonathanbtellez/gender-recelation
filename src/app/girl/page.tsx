'use client'
import { Fade, Grid, Typography } from "@mui/material";
import confetti from "canvas-confetti";
import * as motion from "motion/react-client"
import { useEffect, useState } from "react";

export default function Girl() {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const dispatchConfeti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  useEffect(() => {
    dispatchConfeti()
    setTimeout(() => {
      dispatchConfeti()
      setIsTextVisible(true);
    }, 6000)
  }, [])

  const ball = {
    width: 100,
    height: 100,
    backgroundColor: "#FFCEDE",
    borderRadius: "50%",
  }

  return (
    <Grid
      container
      sx={{
        width: '80%',
        height: '100dvh',
        margin: 'auto',
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid size={12} height={'200px'}>
        <Grid size={12} height={'200px'} textAlign={'center'}>
          {isTextVisible &&
            (
              <Fade in={isTextVisible} timeout={1000}>
                <Typography color="white" fontWeight={700} fontSize={20}>
                  De estrellas y sueños llega envuelta en rosa… ¡es una niña!
                </Typography>
              </Fade>
            )}
        </Grid>

        <Grid size={12} justifyItems={'center'} >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 2 }}
            transition={{
              duration: 9,
              scale: { type: "spring", visualDuration: 5, bounce: 3 },
            }}
            style={ball}
          />
        </Grid>
      </Grid>

    </Grid>
  );
}