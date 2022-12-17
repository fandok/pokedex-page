import {
  Box,
  Chip,
  Container,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import imgTypeBg from "../../public/assets/type1Bg.png";
import Language from "../../src/components/Language";
import Navigation from "../../src/components/Navigation";

const bgColor = ["#0779B0", "#DE2C2C"];

const Type = () => (
  <Box
    sx={{
      backgroundPositionY: "411px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundImage: `url(${imgTypeBg.src})`,
    }}
  >
    <Language />
    <Container sx={{ marginBlockEnd: "80px" }}>
      <Navigation active="type" />
      <Box
        sx={{
          display: "flex",
          gap: "57px",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 16,
              lineHeight: "24px",
              color: "#42494D",
            }}
          >
            Pokemon Type
          </Typography>
          <List>
            {Array.from(Array(4)).map((_, index) => (
              <ListItem key={index}>
                <Typography
                  sx={{
                    fontSize: 14,
                    lineHeight: "21px",
                    color: "#7B8082",
                    display: "list-item",
                    listStyleType: "circle",
                  }}
                >
                  Pokemon Type {index + 1}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "60px",
              color: "#42494D",
              marginBlockEnd: "24px",
            }}
          >
            Pokemon with Type 1
          </Typography>
          <Box
            sx={{
              borderRadius: "24px",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.08)",
            }}
          >
            {Array.from(Array(9)).map((_, index) => (
              <Fragment key={index}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "24px",
                    marginBlock: "24px",
                    marginInlineStart: "24px",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#B3B6B8",
                      blockSize: "100px",
                      inlineSize: "100px",
                    }}
                  >
                    Other Pokemon Sprites
                  </Box>
                  <Divider orientation="vertical" flexItem />
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 20,
                      lineHeight: "15px",
                      color: "#42494D",
                    }}
                  >
                    #00{index + 1}
                  </Typography>
                  <Divider orientation="vertical" flexItem />
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 20,
                      lineHeight: "15px",
                      color: "#42494D",
                    }}
                  >
                    Pokemon Name
                  </Typography>
                  <Divider orientation="vertical" flexItem />
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    {Array.from(Array(2)).map((_, chipIndex) => (
                      <Chip
                        key={chipIndex}
                        sx={{
                          fontWeight: 700,
                          fontSize: "12px",
                          lineHeight: "14px",
                          color: "#FFFFFF",
                          padding: "7px 25px",
                          backgroundColor: bgColor[chipIndex],
                          borderRadius: "25px",
                        }}
                        label={`Type ${chipIndex + 1}`}
                      />
                    ))}
                  </Box>
                </Box>
                <Divider />
              </Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Type;
