import { theOfficeList } from "./the-office";
import { friendsList } from "./friends";
import { parksAndRecList } from "./parks-and-rec";
import { communityList } from "./community";
import { psychList } from "./psych";

export const showList = {
  theOffice: { name: "The Office", attribution: "NBC" },
  friends: { name: "Friends", attribution: "NBC" },
  parksAndRec: { name: "Parks and Rec", attribution: "NBC" },
  community: { name: "Community", attribution: "NBC" },
  psych: { name: "Psych", attribution: "USA" }
  // howIMetYourMother: 'How I Met Your Mother',
};

export const showListPaths = {
  theOffice: theOfficeList,
  friends: friendsList,
  parksAndRec: parksAndRecList,
  // howIMetYourMother: 'How I Met Your Mother',
  community: communityList,
  psych: psychList
};
