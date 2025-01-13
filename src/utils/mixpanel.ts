import mixpanel from "mixpanel-browser";
import { env } from "process";
 
// Near entry of your product, init Mixpanel
console.log("mixpanel key", process.env.NEXT_PUBLIC_MIXPANEL_APP_KEY)
const MIX_KEY = process.env.NEXT_PUBLIC_MIXPANEL_APP_KEY ?? "";
console.log("mixpanel key", MIX_KEY)
mixpanel.init(MIX_KEY, {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});


export default mixpanel;