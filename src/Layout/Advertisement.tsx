import AdvertisementCard from "../components/Molecule/AdvertisementCard";
import { advertisements } from "../constants/Advertisement";

const Advertisement = () => {
  return (
    <div className="advertisement">
      {advertisements.map((element, index) => (
        <AdvertisementCard key={index} {...element} />
      ))}
    </div>
  );
};

export default Advertisement;
