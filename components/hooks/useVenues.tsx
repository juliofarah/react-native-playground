import { useState, useEffect, useCallback } from "react";
import axios, { AxiosResponse } from "axios";

interface FoursquareResponse {
  meta: {
    code: number;
    requestId: string;
  };
  response: {
    venues: Venue[];
  };
}

interface Venue {
  id: string;
  name: string;
  location: Location;
  categories: Category[];
  venuePage: VenuePage;
}

interface Category {
  id: string;
  name: string;
  pluralName: string;
  shortName: string;
  icon: Icon;
  primary: boolean;
}

interface Icon {
  prefix: string;
  suffix: string;
}

interface Location {
  address: string;
  crossStreet: string;
  lat: number;
  lng: number;
  labeledLatLngs: LabeledLatLng[];
  distance: number;
  postalCode: string;
  cc: string;
  city: string;
  state: string;
  country: string;
  formattedAddress: string[];
}

interface LabeledLatLng {
  label: string;
  lat: number;
  lng: number;
}

interface VenuePage {
  id: string;
}

export default () => {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState<unknown | undefined>(undefined);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response: AxiosResponse<FoursquareResponse> = await axios.get(
          "https://api.foursquare.com/v2/venues/explore",
          {
            params: {
              client_id: "",
              client_secret: "",
              query: "supermarket",
              near: "Vancouver",
              v: "20180323",
              limit: 1
            }
          }
        );

        setVenues(response.data.response.venues);
      } catch (e) {
        console.log(JSON.stringify(e));
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVenues();
  }, []);

  return [venues, isLoading, error];
};
