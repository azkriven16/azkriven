export type projectsType = {
  text: string;
  href: string;
  imgLight: string;
  imgDark: string;
  source: string;
  description: string;
  createdAt: string;
  tech?: techType[];
};

export type techType = {
  text: string;
  href: string;
};
