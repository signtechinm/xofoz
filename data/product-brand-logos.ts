export const productBrandLogos = [
  ["Tally Prime", "/partners/tally-prime.svg"],
  ["Microsoft", "/partners/microsoft.svg"],
  ["Cisco", "/partners/cisco.svg"],
  ["Fortinet", "/partners/fortinet.svg"],
  ["Sophos", "/partners/sophos.svg"],
  ["Acronis", "/partners/acronis.svg"],
  ["greytHR", "/partners/greythr.svg"],
  ["Matrix", "/partners/matrix.png"],
  ["TP-Link", "/partners/tp-link.png"],
  ["Vircom", "/partners/vircom.png"],
  ["Hikvision", "/partners/hikvision.svg"],
  ["Sangfor", "/partners/sangfor.png"],
  ["Bitdefender", "/partners/bitdefender.webp"],
] as const;

export const productBrandLogoByName = Object.fromEntries(productBrandLogos) as Record<string, string>;

const supplementalBrandLogos = [
  ["ESET", "/partners/eset.svg"],
  ["Aruba", "/partners/aruba.svg"],
  ["UniFi", "/partners/unifi.svg"],
  ["Synology", "/partners/synology.svg"],
  ["QNAP", "/partners/qnap.svg"],
  ["3CX", "/partners/3cx.svg"],
  ["ZKTeco", "/partners/zkteco.png"],
  ["Dahua", "/partners/dahua.png"],
  ["Mobatime", "/partners/mobatime.svg"],
  ["Logitech", "/partners/logitech.svg"],
  ["Bose", "/partners/bose.svg"],
  ["Bosch", "/partners/bosch.svg"],
  ["JBL", "/partners/jbl.svg"],
  ["Yealink", "/partners/yealink.png"],
  ["Grandstream", "/partners/grandstream.png"],
  ["Avaya", "/partners/avaya.svg"],
] as const;

export function resolveProductBrandLogo(brand: string) {
  const normalizedBrand = brand.toLowerCase().replace(/[^a-z0-9]+/g, " ");
  return [...productBrandLogos, ...supplementalBrandLogos].find(([name]) => {
    const normalizedName = name.toLowerCase().replace(/[^a-z0-9]+/g, " ");
    return normalizedBrand.includes(normalizedName);
  })?.[1];
}
