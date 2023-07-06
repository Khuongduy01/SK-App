import { fetchSelectAddress } from "../api";

const getSelectAddress = async () => {
  try {
    const { data } = await fetchSelectAddress();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getSelectAddress;
