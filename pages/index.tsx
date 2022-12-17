import { CloseRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Modal,
  Pagination,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import useAxios from "axios-hooks";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useRef, useState } from "react";

import imgLanding from "../public/assets/landing.png";
import imgLandingBg from "../public/assets/landingBg.png";
import Language from "../src/components/Language";
import Navigation from "../src/components/Navigation";
import PokemonDetail from "../src/components/PokemonDetail";
import { MAIN_API } from "../src/constants/api";
import { ListResponse } from "../types";

const bgColor = ["#E66D00", "#DE2C2C", "#01B956", "#E34C88"];

const DEFAULT_OFFSET = 9;

const Home = () => {
  const scrollRef = useRef(null);
  const [page, setPage] = useState(1);
  const { t } = useTranslation("home");
  const [showWelcome, setShowWelcome] = useState(true);
  const [open, setOpen] = useState("");
  const [{ data }] = useAxios<ListResponse>(
    `${MAIN_API}?limit=9&offset=${DEFAULT_OFFSET * (page - 1)}`
  );

  const list = data?.results || [];

  return (
    <>
      <Language />
      <Container>
        <Navigation active="home" />
        <Stack direction="row" justifyContent="center" spacing="78px">
          <Box sx={{ marginBlock: "auto" }}>
            <Typography
              data-testid="mainText"
              variant="h1"
              sx={{
                fontSize: 52,
                lineHeight: "78px",
                fontWeight: 700,
                color: "#42494D",
                marginBlockEnd: "16px",
              }}
            >
              {t("mainText")}
            </Typography>
            <Typography
              sx={{ marginBlockEnd: "32px" }}
              fontSize="20px"
              lineHeight="30px"
              color="#7B8082"
            >
              {t("mainDesc")}
            </Typography>
            <Button
              onClick={() => {
                // @ts-ignore
                scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
              }}
              sx={{
                backgroundColor: "#E6AB09",
                borderRadius: "14px",
                color: "#FFFFFF",
                padding: "13px 40.5px",
                textTransform: "none",
                fontSize: 20,
                lineHeight: "30px",
                fontWeight: 700,
              }}
            >
              {t("pokedex")}
            </Button>
          </Box>
          <Box>
            <Image alt="landing" src={imgLanding} width={534} height={631.5} />
          </Box>
        </Stack>
        <Box
          sx={{
            backgroundImage: `url(${imgLandingBg.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            padding: "80px",
            marginInline: "-64px",
          }}
        >
          <Typography
            fontWeight={700}
            lineHeight="60px"
            fontSize={40}
            textAlign="center"
            color="#42494D"
            sx={{ marginBlockEnd: "16px" }}
            ref={scrollRef}
          >
            PokèDex
          </Typography>
          <Typography
            fontSize={24}
            lineHeight="36px"
            textAlign="center"
            color="#42494D"
            sx={{ marginBlockEnd: "58px" }}
          >
            {t("generation")}
          </Typography>
          <Grid
            sx={{ marginBlockEnd: "58px" }}
            container
            columnSpacing={8}
            rowSpacing={4}
          >
            {list.map(({ name, url }, index) => (
              <Grid item key={index} xs={4}>
                <Card
                  onClick={() => {
                    setOpen(url);
                  }}
                  sx={{
                    minWidth: "325.5px",
                    paddingBlockEnd: "29.5px",
                    borderRadius: "25px",
                    cursor: "pointer",
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        backgroundColor: "#B3B6B8",
                        minWidth: "275px",
                        minHeight: "275px",
                        marginBottom: "10px",
                      }}
                    >
                      Pokemon Picture Placeholder
                    </Box>
                    <Typography
                      fontWeight={700}
                      fontSize="20px"
                      lineHeight="20px"
                      color="#B3B6B8"
                      marginBottom="10px"
                    >
                      #00{index + 1}
                    </Typography>
                    <Typography
                      fontWeight={700}
                      fontSize="40px"
                      lineHeight="60px"
                      color="#42494D"
                      marginBottom="10px"
                    >
                      {name}
                    </Typography>
                    {Array.from(Array(4)).map((_, chipIndex) => (
                      <Chip
                        key={chipIndex}
                        sx={{
                          fontSize: "20px",
                          lineHeight: "18px",
                          color: "#FFFFFF",
                          padding: "7px 25px",
                          backgroundColor: bgColor[chipIndex],
                        }}
                        label={`Type ${chipIndex + 1}`}
                      />
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Pagination
            onChange={(_, newPage) => {
              setPage(newPage);
            }}
            sx={{ display: "flex", justifyContent: "center" }}
            count={25}
            variant="outlined"
            shape="rounded"
          />
        </Box>
      </Container>
      <Modal
        open={Boolean(open)}
        onClose={() => {
          setOpen("");
        }}
      >
        <Box
          sx={{
            outline: 0,
            width: "1162px",
            padding: "40px",
            borderRadius: "24px",
            backgroundColor: "#FFFFFF",
            position: "absolute",
            left: 0,
            right: 0,
            top: "15%",
            margin: "auto",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <CloseRounded
              onClick={() => {
                setOpen("");
              }}
              sx={{ width: "24px", height: "24px", cursor: "pointer" }}
              htmlColor="#B3B6B8"
            />
          </Box>
          <PokemonDetail isDetailPage={false} url={open} />
        </Box>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={showWelcome}
        onClose={() => {
          setShowWelcome(false);
        }}
        autoHideDuration={3000}
        message="Welcome to Pokedex Page!"
        key="welcome-message"
      />
    </>
  );
};

export default Home;
