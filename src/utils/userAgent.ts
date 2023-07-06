// Return true if the user agent is a portable device
export const detectPortableDevice = (userAgent: string) => {
  const portableDeviceRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return portableDeviceRegex.test(userAgent);
};
