exports.rankSwitch = rank => {
  switch (rank) {
    case 1:
      return "copper-4";
    case 2:
      return "copper-3";
    case 3:
      return "copper-2";
    case 4:
      return "copper-1";
    case 5:
      return "bronze-4";
    case 6:
      return "bronze-3";
    case 7:
      return "bronze-2";
    case 8:
      return "bronze-1";
    case 9:
      return "silver-4";
    case 10:
      return "silver-3";
    case 11:
      return "silver-2";
    case 12:
      return "silver-1";
    case 13:
      return "gold-4";
    case 14:
      return "gold-3";
    case 15:
      return "gold-2";
    case 16:
      return "gold-1";
    case 17:
      return "platinum-3";
    case 18:
      return "platinum-2";
    case 19:
      return "platinum-1";
    case 20:
      return "diamond";
    default:
      return "unranked";
  }
};
