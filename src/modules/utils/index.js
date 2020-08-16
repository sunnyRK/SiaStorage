import { SkynetClient } from "skynet-js";

const client = new SkynetClient("https://siasky.net");

export const uploadContent = async (file) => {
  const { skylink } = await client.upload(file);
  return { skylink };
};

export const downloadContent = (skylink) => {
  client.download(skylink);
}

export const noop = () => {};