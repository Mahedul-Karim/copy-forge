import React from "react";
import Box from "@mui/material/Box";
import Container from "../ui/Container";
import { Grid, Typography } from "@mui/material";
import Image from "../ui/Image";

const Trusted = () => {
  return (
    <Box
      sx={{
        paddingBlock: {
          xxs: "45px",
          md: "64px",
        },
        backgroundColor: "background.paper",
      }}
    >
      <Container>
        <Typography
          component={"h2"}
          sx={{
            textAlign: "center",
            fontSize: {
              xs: "18px",
              xxs: "16px",
            },
            fontWeight: 500,
            color: "text.secondary",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              width: "40px",
              height: "2px",
              backgroundImage: "linear-gradient(90deg, #FFD65A 30%, #FFB84C)",
              bottom: "-12px",
              left: "50%",
              transform: "translateX(-50%)",
            },
          }}
        >
          Trusted By Industry leaders
        </Typography>
        <Box
          sx={{
            marginTop: "40px",
            maxWidth: "600px",
            marginInline: "auto",
          }}
        >
          <Grid
            container
            columns={6}
            spacing={2}
            sx={{ justifyContent: "center" }}
          >
            <Grid
              sx={{
                backgroundColor: "background.default",
                width: {
                  xs: "80px",
                  xxs: "70px",
                },
                height: {
                  xs: "80px",
                  xxs: "70px",
                },
                borderRadius: "100%",
                border: "1px solid",
                borderColor: "divider",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="/trusted1.png"
                sx={{
                  width: { xs: "40px", xxs: "35px" },
                  objectFit: "contain",
                  height: { xs: "40px", xxs: "35px" },
                }}
              />
            </Grid>
            <Grid
              sx={{
                backgroundColor: "background.default",
                width: {
                  xs: "80px",
                  xxs: "70px",
                },
                height: {
                  xs: "80px",
                  xxs: "70px",
                },
                borderRadius: "100%",
                border: "1px solid",
                borderColor: "divider",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="/trusted2.png"
                sx={{
                  width: { xs: "40px", xxs: "35px" },
                  objectFit: "contain",
                  height: { xs: "40px", xxs: "35px" },
                }}
              />
            </Grid>
            <Grid
              sx={{
                backgroundColor: "background.default",
                width: {
                  xs: "80px",
                  xxs: "70px",
                },
                height: {
                  xs: "80px",
                  xxs: "70px",
                },
                borderRadius: "100%",
                border: "1px solid",
                borderColor: "divider",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="/trusted3.png"
                sx={{
                  width: { xs: "40px", xxs: "35px" },
                  objectFit: "contain",
                  height: { xs: "40px", xxs: "35px" },
                }}
              />
            </Grid>
            <Grid
              sx={{
                backgroundColor: "background.default",
                width: {
                  xs: "80px",
                  xxs: "70px",
                },
                height: {
                  xs: "80px",
                  xxs: "70px",
                },
                borderRadius: "100%",
                border: "1px solid",
                borderColor: "divider",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="/trusted4.png"
                sx={{
                  width: { xs: "40px", xxs: "35px" },
                  objectFit: "contain",
                  height: { xs: "40px", xxs: "35px" },
                }}
              />
            </Grid>
            <Grid
              sx={{
                backgroundColor: "background.default",
                width: {
                  xs: "80px",
                  xxs: "70px",
                },
                height: {
                  xs: "80px",
                  xxs: "70px",
                },
                borderRadius: "100%",
                border: "1px solid",
                borderColor: "divider",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="/trusted5.png"
                sx={{
                  width: { xs: "40px", xxs: "35px" },
                  objectFit: "contain",
                  height: { xs: "40px", xxs: "35px" },
                }}
              />
            </Grid>
            <Grid
              sx={{
                backgroundColor: "background.default",
                width: {
                  xs: "80px",
                  xxs: "70px",
                },
                height: {
                  xs: "80px",
                  xxs: "70px",
                },
                borderRadius: "100%",
                border: "1px solid",
                borderColor: "divider",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="/trusted6.png"
                sx={{
                  width: { xs: "40px", xxs: "35px" },
                  objectFit: "contain",
                  height: { xs: "40px", xxs: "35px" },
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <Grid
            container
            columns={3}
            spacing={4}
            sx={{ justifyContent: "center" }}
          >
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Typography
                component={"h3"}
                sx={{
                  fontSize: {
                    xs: "20px",
                    xxs: "18px",
                  },
                  fontWeight: 700,
                }}
              >
                10,000+
              </Typography>
              <Typography
                component={"p"}
                sx={{
                  color: "text.secondary",
                  textAlign: "center",
                  fontSize: {
                    xs: "16px",
                    xxs: "14px",
                  },
                }}
              >
                Happy blogger, marketer and agencies.
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Typography
                component={"h3"}
                sx={{
                  fontSize: {
                    xs: "20px",
                    xxs: "18px",
                  },
                  fontWeight: 700,
                }}
              >
                4.9/5
              </Typography>
              <Typography
                component={"p"}
                sx={{
                  color: "text.secondary",
                  textAlign: "center",
                  fontSize: {
                    xs: "16px",
                    xxs: "14px",
                  },
                }}
              >
                Satisfaction rating from 1000+ reviews <br /> on TrustPilot.
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Typography
                component={"h3"}
                sx={{
                  fontSize: {
                    xs: "20px",
                    xxs: "18px",
                  },
                  fontWeight: 700,
                }}
              >
                2,00,000+ hr
              </Typography>
              <Typography
                component={"p"}
                sx={{
                  color: "text.secondary",
                  textAlign: "center",
                  fontSize: {
                    xs: "16px",
                    xxs: "14px",
                  },
                }}
              >
                $50 million+ saved in content writing.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Trusted;
