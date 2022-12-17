import { Container } from "@mui/material";
import { useRouter } from "next/router";
import Language from "../src/components/Language";
import Navigation from "../src/components/Navigation";
import PokemonDetail from "../src/components/PokemonDetail";
import { MAIN_API } from "../src/constants/api";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Language />
      <Container sx={{ paddingBlockEnd: "90.96px" }}>
        <Navigation active="home" />
        <PokemonDetail isDetailPage url={`${MAIN_API}/${id}`} />
      </Container>
    </>
  );
};

export default Detail;
