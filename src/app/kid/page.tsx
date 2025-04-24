'use client'
import { Fade, Grid, Typography } from "@mui/material";
import * as motion from "motion/react-client"
import { useEffect, useState } from "react";
import confetti from 'canvas-confetti';

export default function Kid() {
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
    backgroundColor: "#98D9F5",
    borderRadius: "50%",
  }

  return (
    <Grid
      sx={{
        width: '80vw',
        height: '100vh',
        margin: 'auto'
      }}
      display={'grid'}
      alignItems={'center'}
      justifyContent={'center'}
      container
    >

      <Grid size={12} justifyItems={'center'} >

        <Grid size={12} height={'200px'}>
          {isTextVisible &&
            (
              <Fade in={isTextVisible} timeout={1000}>
                <Typography color="white" fontWeight={700} fontSize={20}>
                  De estrellas y sueños llega envuelto en azul… ¡es un niño!
                </Typography>
              </Fade>
            )}
        </Grid>

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
  );
}