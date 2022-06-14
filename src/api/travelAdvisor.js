/* eslint-disable consistent-return */
import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
 try {
  const { data: { data } } = await axios.get(URL, {
   params: {
    bl_latitude: sw.lat,
    tr_latitude: ne.lat,
    bl_longitude: sw.lng,
    tr_longitude: ne.lng,
   },
   headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': 'e574f4250cmsh4809a3dcb3a3b79p1b6dc3jsn28ff997a205b',
   }
  });
  return data;
 }
 catch (error) {
  console.log(error);
 }
};
