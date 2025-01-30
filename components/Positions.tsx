import { POSITION } from "@/utils/positions"
export type Position = {
  x: number
  y: number
  position: string
}

export type TeamFormation = {
  [key: string]: Position
}

const home_4_3_3_Formation: TeamFormation = {
  AT: POSITION.AT.home,
  ALD: POSITION.ALD.home,
  ALG: POSITION.ALG.home,
  MCD: POSITION.MCD.home,
  MCG: POSITION.MCG.home,
  MD: POSITION.MD.home,
  DG: POSITION.DG.home,
  DCG: POSITION.DCG.home,
  DCD: POSITION.DCD.home,
  DD: POSITION.DD.home,
  G: POSITION.G.home,
}

const away_4_3_3_Formation: TeamFormation = {
  // Formation 4-3-3

  AT: POSITION.AT.away,
  ALD: POSITION.ALD.away,
  ALG: POSITION.ALG.away,
  MCD: POSITION.MCD.away,
  MCG: { x: 850, y: 500, position: "MCG" },
  MC: { x: 750, y: 800, position: "MC" },
  DG: { x: 600, y: 250, position: "DG" },
  DCG: { x: 400, y: 600, position: "DC" },
  DCD: { x: 400, y: 1000, position: "DC" },
  DD: { x: 600, y: 1350, position: "DD" },
  G: POSITION.G.away,
}

export const home_4_4_2_Formation: TeamFormation = {
  messi: { x: 1375, y: 600, position: "AD" },
  alvarez: { x: 1375, y: 1000, position: "AG" },
  "di maria": { x: 1600, y: 1250, position: "MG" },
  "mac allister": { x: 1800, y: 1000, position: "MC" },
  fernandez: { x: 1800, y: 600, position: "MC" },
  "de paul": { x: 1600, y: 350, position: "MD" },
  DG: POSITION.DG.home,
  DCG: POSITION.DCG.home,
  DCD: POSITION.DCD.home,
  DD: POSITION.DD.home,
  G: POSITION.G.home,
}
export const away_4_4_2_Formation: TeamFormation = {
  ATG: POSITION.ATG.away,
  ATD: POSITION.ATD.away,
  MLG: POSITION.MLG.away,
  MDG: POSITION.MDG.away,
  MDD: POSITION.MDD.away,
  MLD: POSITION.MLD.away,
  DG: POSITION.DG.away,
  DCG: POSITION.DCG.away,
  DCD: POSITION.DCD.away,
  DD: POSITION.DD.away,
  G: POSITION.G.away,
}

export const team3Formation: TeamFormation = {
  // Formation 4-2-3-1
  AT: { x: 1375, y: 800, position: "AT" },
  MOC: { x: 1630, y: 800, position: "MOC" },
  MOG: { x: 1600, y: 1250, position: "MOG" },
  MOD: { x: 1600, y: 350, position: "MC" },
  MDD: { x: 1850, y: 600, position: "MDD" },
  MDG: { x: 1850, y: 1000, position: "MDG" },
  DG: { x: 2000, y: 1350, position: "DG" },
  DCG: { x: 2150, y: 600, position: "DC" },
  DCD: { x: 2150, y: 1000, position: "DC" },
  DD: { x: 2000, y: 250, position: "DD" },
  G: { x: 2460, y: 800, position: "G" },
}

const home_4_1_2_3_Formation: TeamFormation = {
  AT: POSITION.AT.home,
  ALD: POSITION.ALD.home,
  ALG: POSITION.ALG.home,
  MCD: POSITION.MCD.home,
  MD: POSITION.MD.home,
  MCG: POSITION.MCG.home,
  DG: POSITION.DG.home,
  DCG: POSITION.DCG.home,
  DCD: POSITION.DCD.home,
  DD: POSITION.DD.home,
  G: POSITION.G.home,
}
const away_4_1_2_3_Formation: TeamFormation = {
  AT: POSITION.AT.away,
  ALD: POSITION.ALD.away,
  ALG: POSITION.ALG.away,
  MCG: POSITION.MCG.away,
  MCD: POSITION.MCD.away,
  MD: POSITION.MD.away,
  DG: POSITION.DG.away,
  DCG: POSITION.DCG.away,
  DCD: POSITION.DCD.away,
  DD: POSITION.DD.away,
  G: POSITION.G.away,
}

export const formations = {
  home: {
    "4-3-3": home_4_3_3_Formation,
    "4-2-3-1": team3Formation,
    "4-4-2": home_4_4_2_Formation,
    "4-1-2-3": home_4_1_2_3_Formation,
  },
  away: {
    "4-3-3": away_4_3_3_Formation,
    "4-2-3-1": team3Formation,
    "4-4-2": away_4_4_2_Formation,
    "4-1-2-3": away_4_1_2_3_Formation,
  },
}
