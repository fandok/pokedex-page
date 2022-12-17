import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import imgPokemon from "../../../public/assets/pokemon-logo.png";
import { NavigationInterface } from "./types";

const Navigation = ({ active }: NavigationInterface) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <Stack direction="row" spacing="40px" marginBottom="124px">
      <Image alt="pokemon-logo" src={imgPokemon} width={167} height={59} />
      <Typography
        onClick={() => {
          router.push("/");
        }}
        sx={{
          marginBlock: "auto !important",
          padding: "4px",
          fontSize: 16,
          lineHeight: "24px",
          cursor: "pointer",
          ...(active === "home"
            ? {
                color: "#E6AB09",
                borderBlockEnd: "1px solid #ECEDED",
                fontWeight: 700,
              }
            : {
                "&:hover": {
                  color: "#E6AB09",
                  borderBlockEnd: "1px solid #ECEDED",
                  fontWeight: 700,
                },
              }),
        }}
      >
        {t("home")}
      </Typography>
      <Typography
        onClick={() => {
          router.push("/type/1");
        }}
        sx={{
          marginBlock: "auto !important",
          padding: "4px",
          fontSize: 16,
          lineHeight: "24px",
          cursor: "pointer",
          ...(active === "type"
            ? {
                color: "#E6AB09",
                borderBlockEnd: "1px solid #ECEDED",
                fontWeight: 700,
              }
            : {
                "&:hover": {
                  color: "#E6AB09",
                  borderBlockEnd: "1px solid #ECEDED",
                  fontWeight: 700,
                },
              }),
        }}
      >
        {t("type")}
      </Typography>
    </Stack>
  );
};

export default Navigation;
