export namespace Brand {
  export const socialLinks = {
    facebook: "https://www.facebook.com/ingiatothcm",
    instagram: "",
    tiktok: "",
    linkedin: undefined,
    youtube: undefined,
    x: undefined,
    spotify: undefined,
  };

  export const socialUsernames = {
    facebook: "",
  };

  export const phonenumber = {
    label: "+65 87686844",
    uri: "tel://+65 87686844",
  };
  export const whatsapp = {
    label: "",
    uri: "",
    construct: ({ text }: { text: string }) =>
      Brand.whatsapp.uri + `?text=${encodeURIComponent(text)}`,
  };

  export const email = {
    label: "ingiatot.print@gmail.com",
    uri: "mailto:ingiatot.print@gmail.com",
  };

  export const location = {
    formattedAddress: "87/53 Trần Phú, Phường 4, Quận 5, Hồ Chí Minh",
    googleMapsUri: "",
  };

  export const text = {
    copyright: `© ${new Date().getFullYear()}`,
  };
}
