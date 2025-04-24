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
        width: '100vw',
        height: '100vh'
      }}
      display={'grid'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Grid
        container
        spacing={2}
        sx={{
          width: '80vw',
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
        <Grid size={{
          xs: 12,
          md: 6
        }} >
          <Typography color="white" fontWeight={700} fontSize={20}>
            Hola familia, es hora de revelar el secreto...
          </Typography>
        </Grid>
        <Grid size={{
          xs: 12,
          md: 6
        }} alignItems={'center'} justifyItems={'center'}>
          {gender && <CountdownCircleTimer
            isPlaying
            duration={15}
            colors={['#98D9F5', '#FFCEDE','#98D9F5', '#FFCEDE']}
            colorsTime={[15, 10, 5, 0]}
            onComplete={()=> {
              router.push( `/${gender}`);
            }}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>}
        </Grid>
      </Grid>
    </Box>
  )
}
