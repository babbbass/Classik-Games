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
  SUB0: POSITION.Substitute.home.SUB0,
  SUB1: POSITION.Substitute.home.SUB1,
  SUB2: POSITION.Substitute.home.SUB2,
  SUB3: POSITION.Substitute.home.SUB3,
}

const away_4_3_3_Formation: TeamFormation = {
  AT: POSITION.AT.away,
  ALD: POSITION.ALD.away,
  ALG: POSITION.ALG.away,
  MCD: POSITION.MCD.away,
  MCG: POSITION.MCG.away,
  MD: POSITION.MD.away,
  DG: POSITION.DG.away,
  DCG: POSITION.DCG.away,
  DCD: POSITION.DCD.away,
  DD: POSITION.DD.away,
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

export const away_4_2_3_1_Formation: TeamFormation = {
  AT: POSITION.AT.away,
  MOC: POSITION.MOC.away,
  MOG: POSITION.MOG.away,
  MOD: POSITION.MOD.away,
  MDD: POSITION.MDD.away,
  MDG: POSITION.MDG.away,
  DG: POSITION.DG.away,
  DCG: POSITION.DCG.away,
  DCD: POSITION.DCD.away,
  DD: POSITION.DD.away,
  G: POSITION.G.away,
  SUB0: POSITION.Substitute.away.SUB0,
  SUB1: POSITION.Substitute.away.SUB1,
  SUB2: POSITION.Substitute.away.SUB2,
  SUB3: POSITION.Substitute.away.SUB3,
  SUB4: POSITION.Substitute.away.SUB4,
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
  SUB0: { x: 160, y: 1450, position: "SUB" },
  SUB1: { x: 160, y: 1390, position: "SUB" },
  SUB2: { x: 160, y: 1330, position: "SUB" },
  SUB3: { x: 160, y: 1270, position: "SUB" },
  SUB4: { x: 160, y: 1210, position: "SUB" },
  SUB5: { x: 160, y: 1150, position: "SUB" },
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
  SUB0: { x: 2410, y: 1450, position: "SUB0" },
  SUB1: { x: 2410, y: 1390, position: "SUB1" },
  SUB2: { x: 2410, y: 1330, position: "SUB2" },
  SUB3: { x: 2410, y: 1270, position: "SUB3" },
  SUB4: { x: 2410, y: 1210, position: "SUB4" },
  SUB5: { x: 2410, y: 1150, position: "SUB5" },
  SUB6: { x: 2410, y: 1090, position: "SUB6" },
}

export const formations = {
  home: {
    "4-3-3": home_4_3_3_Formation,
    "4-2-3-1": away_4_2_3_1_Formation,
    "4-4-2": home_4_4_2_Formation,
    "4-1-2-3": home_4_1_2_3_Formation,
  },
  away: {
    "4-3-3": away_4_3_3_Formation,
    "4-2-3-1": away_4_2_3_1_Formation,
    "4-4-2": away_4_4_2_Formation,
    "4-1-2-3": away_4_1_2_3_Formation,
  },
}
