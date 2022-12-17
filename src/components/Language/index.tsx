import {
  KeyboardArrowDownOutlined,
  LanguageOutlined,
} from "@mui/icons-material";
import { Box, MenuItem, Select } from "@mui/material";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";

const Language = () => {
  const { lang: language } = useTranslation();
  const [lang, setLang] = useState(language);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: "#F7F8F8",
        paddingBlock: "7px",
        paddingInline: "140px",
        height: 32,
      }}
    >
      <LanguageOutlined fontSize="small" htmlColor="#B3B6B8" />
      <Select
        onChange={(e) => {
          setLang(e.target.value);
          setLanguage(e.target.value);
        }}
        IconComponent={(props) => <KeyboardArrowDownOutlined {...props} />}
        sx={{
          height: 18,
          fontSize: 12,
          color: "#7B8082",
          boxShadow: "none",
          fontWeight: 400,
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
        }}
        value={lang}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="id">Indonesia</MenuItem>
      </Select>
    </Box>
  );
};

export default Language;
