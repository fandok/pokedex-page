import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  List,
  ListItem,
  Stack,
  Step,
  Stepper,
  Typography,
} from "@mui/material";
import useAxios from "axios-hooks";
import Image from "next/image";
import { POKEMON_TYPE_COLORS } from "../../constants";
import { PokemonDetailInterface, PokemonDetailResponse } from "./types";
import useTranslation from "next-translate/useTranslation";

const bgColor = [
  "#0571A6",
  "#E66D00",
  "#E6AB09",
  "#01B956",
  "#3C48CF",
  "#DE2C2C",
];

const evolutionBgColor = ["#01B956", "#E6AB09", "#E66D00", "#DE2C2C"];

const PokemonDetail = ({ isDetailPage, url }: PokemonDetailInterface) => {
  const [{ data }] = useAxios<PokemonDetailResponse>(url);
  const { t } = useTranslation("common");

  const abilities = data?.abilities || [];
  const name = data?.name || "";
  const height = data?.height || 0;
  const id = data?.id || 0;
  const types = data?.types || [];
  const weight = data?.weight || 0;
  const sprites = data?.sprites;
  const imageUrl = sprites?.other["official-artwork"].front_default || "";
  const stats = data?.stats || [];

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Box
          sx={{
            minWidth: "400px",
            minHeight: "400px",
          }}
        >
          <Image src={imageUrl} height={400} width={400} alt="pokemon-avatar" />
        </Box>
        <Box>
          <Typography
            fontSize="40px"
            lineHeight="60px"
            fontWeight={700}
            variant="h2"
            marginBottom="46px"
          >
            {name}
          </Typography>
          <Stack
            sx={{
              fontSize: "20px",
              lineHeight: "30px",
              color: "#42494D",
              marginBlockEnd: "20.4px",
            }}
            direction="row"
            spacing={2}
          >
            <Typography fontWeight={700}>{t("weight")} : </Typography>
            <Typography minWidth="183px">{weight}</Typography>
            <Typography fontWeight={700}>{t("height")} : </Typography>
            <Typography minWidth="183px">{height}</Typography>
          </Stack>
          <Stack
            sx={{
              fontSize: "20px",
              lineHeight: "30px",
              color: "#42494D",
              marginBlockEnd: "20.4px",
            }}
            direction="row"
            spacing={2}
          >
            <Typography marginRight="10px" fontWeight={700}>
              {t("abilities")} :{" "}
            </Typography>
            <Box>
              <List sx={{ marginBlockStart: "-18px" }}>
                {abilities.map((ability) => (
                  <ListItem
                    sx={{
                      display: "list-item",
                      listStyleType: "circle",
                      fontSize: "20px",
                      lineHeight: "30px",
                      color: "#42494D",
                    }}
                  >
                    <Typography>
                      {ability.ability.name || ""}{" "}
                      {ability.is_hidden && "(hidden)"}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Stack>
          <Stack
            sx={{
              fontSize: "20px",
              lineHeight: "30px",
              color: "#42494D",
              marginBlockEnd: "52px",
            }}
            direction="row"
            spacing={2}
          >
            <Typography marginRight="10px" fontWeight={700}>
              {t("pokemonType")} :
            </Typography>
            <Stack direction="row" spacing={1}>
              {types.map((type) => (
                <Chip
                  key={type.slot}
                  sx={{
                    fontSize: "20px",
                    lineHeight: "18px",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    padding: "7px 25px",
                    // @ts-ignore
                    backgroundColor: POKEMON_TYPE_COLORS[type.type.name],
                    borderRadius: "25px",
                  }}
                  label={type.type.name}
                />
              ))}
            </Stack>
          </Stack>
          {!isDetailPage && (
            <Button
              href={`/${id}`}
              sx={{
                backgroundColor: "#E6AB09",
                borderRadius: "14px",
                color: "#FFFFFF",
                padding: "10px 25px",
                textTransform: "none",
                fontSize: "20px",
                lineHeight: "30px",
                fontWeight: 700,
              }}
            >
              {t("detail")}
            </Button>
          )}
        </Box>
      </Stack>
      {isDetailPage && (
        <>
          <Box sx={{ marginBlockStart: "60px", marginBlockEnd: "45px" }}>
            <Typography
              sx={{
                fontSize: 20,
                lineHeight: "30px",
                fontWeight: 700,
                color: "#42494D",
                marginBlockEnd: "30px",
              }}
            >
              {t("other")} :
            </Typography>
            <Stack direction="row" spacing={2}>
              {[
                "back_default",
                "back_shiny",
                "front_default",
                "front_shiny",
              ].map((value) => (
                <Box
                  key={value}
                  sx={{
                    blockSize: "169.17px",
                    inlineSize: "169.17px",
                  }}
                >
                  <Image
                    // @ts-ignore
                    src={sprites?.[value] || ""}
                    width={169.17}
                    height={169.17}
                    alt={value || ""}
                  />
                </Box>
              ))}
            </Stack>
          </Box>
          <Box sx={{ marginBlockEnd: "20px" }}>
            <Typography
              sx={{
                fontSize: 20,
                lineHeight: "30px",
                fontWeight: 700,
                color: "#42494D",
                marginBlockEnd: "30px",
              }}
            >
              {t("stats")} :
            </Typography>
            <Stack direction="row" spacing={2}>
              {stats.map((stat, index) => (
                <Box
                  key={index}
                  sx={{
                    padding: "10px",
                    border: `25px solid ${bgColor[index]}`,
                    borderRadius: "100px",
                    blockSize: "169.17px",
                    inlineSize: "169.17px",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 50,
                      lineHeight: "60px",
                      color: bgColor[index],
                    }}
                  >
                    {stat.base_stat}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 20, lineHeight: "20px", color: "#42494D" }}
                  >
                    {stat.stat.name}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: 20,
                lineHeight: "30px",
                fontWeight: 700,
                color: "#42494D",
                marginBlockEnd: "20px",
              }}
            >
              {t("evolution")} :
            </Typography>
            <Stepper
              connector={
                <ArrowForward sx={{ fontSize: 50, marginBlockEnd: "8%" }} />
              }
            >
              {Array.from(Array(4)).map((_, index) => (
                <Step>
                  <Box
                    sx={{
                      padding: "38.75px 50px",
                      border: `10px solid ${evolutionBgColor[index]}`,
                      borderRadius: "100px",
                      blockSize: "197.5px",
                      inlineSize: "197.5px",
                      marginBlockEnd: "20px",
                    }}
                  >
                    Pokemon evolution state 1 image
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 20,
                      lineHeight: "30px",
                      color: "#42494D",
                      maxBlockSize: "197.5px",
                    }}
                  >
                    Pokemon evolution state 1 name
                  </Typography>
                </Step>
              ))}
            </Stepper>
          </Box>
        </>
      )}
    </>
  );
};

export default PokemonDetail;
