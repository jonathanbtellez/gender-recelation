"use client"

import { getGender } from "@/service/gender-service";
import { Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function Home() {
  const router = useRouter();
  const [gender, setGender] = useState(null);

  useEffect(() => {
    const getGenderResponse = async () => {
      const { gender } = await getGender();
      setGender(gender.gender);
    }
    getGenderResponse();
  }, [])



  return (
    <Box
    sx={{
      width: '80%',
      height: '100dvh',
      margin: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          width: '100%',
          height: '400px',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          padding: 2,
        }}
      >
        <Grid size={12} >
          <Typography color="white" fontWeight={700} fontSize={20} textAlign={'center'}>
            Hola familia, es hora de revelar el secreto...
          </Typography>
        </Grid>
        <Grid size={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {gender && <CountdownCircleTimer
            isPlaying
            duration={9}
            colors={['#98D9F5', '#FFCEDE', '#98D9F5', '#FFCEDE']}
            colorsTime={[9, 6, 3, 0]}
            onComplete={() => {
              router.push(`/${gender}`);
            }}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>}
        </Grid>
      </Grid>
    </Box>
  )
}
