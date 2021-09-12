import SpeedSvg from "../assets/icons/speed.svg";
import UpSvg from "../assets/icons/up.svg";
import StrenghtSvg from "../assets/icons/strenght.svg";
import GasolineSvg from "../assets/icons/gas.svg";
import EletricSvg from "../assets/icons/energy.svg";
import HybridSvg from "../assets/icons/leaf.svg";
import GearSvg from "../assets/icons/gear.svg";
import UserSvg from "../assets/icons/user.svg";
import CarSvg from "../assets/icons/car.svg";

export function getAcessoryIcon(type: string) {
  switch (type) {
    case "speed":
      return SpeedSvg;
    case "acceleration":
      return UpSvg;
    case "turning_diameter":
      return StrenghtSvg;
    case "gasoline_motor":
      return GasolineSvg;
    case "hybrid":
      return HybridSvg;
    case "electric":
      return EletricSvg;
    case "exchange":
      return GearSvg;
    case "seats":
      return UserSvg;

    default:
      return CarSvg;
  }
}
