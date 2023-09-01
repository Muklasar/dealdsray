import axios from "axios";

export const uploadImage = async (image, token) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/uploadimages`,
    { image },
    {
      headers: {
        authtoken: token,
      },
    }
  );
};

export const removeImage = async (public_id, token) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/removeimage`,
    {public_id},
    {
      headers: {
        authtoken: token,
      },
    }
  );
};
