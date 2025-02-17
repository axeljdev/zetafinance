"use client";

import { useEffect } from "react";

export default function Axeptio() {
  useEffect(() => {
    const script = document.createElement("script");

    const AXEPTIO_CLIENT_ID = process.env.NEXT_PUBLIC_AXEPTIO_CLIENT_ID;
    const AXEPTIO_VERSION = process.env.NEXT_PUBLIC_AXEPTIO_VERSION;

    script.innerHTML = `
    window.axeptioSettings = {
  clientId: "${AXEPTIO_CLIENT_ID}",
  cookiesVersion: "${AXEPTIO_VERSION}"  ,
  googleConsentMode: {
    default: {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500
    }
  }
};
 
(function(d, s) {
  var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
  e.async = true; e.src = "//static.axept.io/sdk.js";
  t.parentNode.insertBefore(e, t);
})(document, "script");
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
