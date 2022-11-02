/* eslint-disable */
import cocoNoir from "./assets/coco-noir.jpg";
import chanceChanel from "./assets/chance-chanel.jpg";
import missDior from "./assets/miss-dior.jpg";
import acquaDiGio from "./assets/acqua-di-gio.jpg";
import bleuDeChanel from "./assets/bleu-de-chanel.jpg";
import blackOpium from "./assets/black-opium.jpg";
import crystalNoir from "./assets/crystal-noir.jpg";
import laVieEstBelle from "./assets/la-vie-est-belle.jpg";
import si from "./assets/si.jpg";
import laNuitDeLHomme from "./assets/la-nuit-de-l'homme.jpg";
import sauvage from "./assets/sauvage-dior.jpg";
import eros from "./assets/versace-eros.jpg";

function getImages(props) {
  const imgString = props;
  let img;
  switch (imgString) {
    case "cocoNoir":
      img = cocoNoir;
      break;

    case "acquaDiGio":
      img = acquaDiGio;
      break;

    case "chanceChanel":
      img = chanceChanel;
      break;

    case "missDior":
      img = missDior;
      break;

    case "chanelBleu":
      img = bleuDeChanel;
      break;

    case "blackOpium":
      img = blackOpium;
      break;

    case "crystalNoir":
      img = crystalNoir;
      break;

    case "laVieEstBelle":
      img = laVieEstBelle;
      break;

    case "si":
      img = si;
      break;

    case "laNuitDeLHomme":
      img = laNuitDeLHomme;
      break;

    case "sauvage":
      img = sauvage;
      break;

    case "eros":
      img = eros;
      break;

    default:
      img = "No Image";
  }
  return img;
}

export default getImages;
