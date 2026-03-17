import React from "react";
import Accordian from "./Accordian";

const Faquestions = () => {
  return (
    <>
      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0">
          <Accordian
            question={"डिजिटल मार्केटिंग से मेरे business को क्या फायदा होगा?"}
            answer={
              "डिजिटल मार्केटिंग से आपको ज्यादा customers, ज्यादा leads और online visibility मिलती है जिससे आपका business तेजी से grow करता है।"
            }
          />
        </div>

        <div className="md:w-1/2">
          <Accordian
            question={"SEO में कितना समय लगता है result आने में?"}
            answer={
              "SEO एक long-term process है, इसमें आमतौर पर 2-3 महीने में अच्छे results दिखने लगते हैं, लेकिन long-term में बहुत strong growth मिलती है।"
            }
          />
        </div>
      </div>

      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0">
          <Accordian
            question={"क्या आप Google Ads और Facebook Ads दोनों चलाते हैं?"}
            answer={
              "हाँ, हम Google Ads और Meta (Facebook & Instagram) Ads दोनों manage करते हैं ताकि आपको maximum reach और best results मिलें।"
            }
          />
        </div>

        <div className="md:w-1/2">
          <Accordian
            question={"क्या मुझे तुरंत leads मिलना शुरू हो जाएँगी?"}
            answer={
              "Paid Ads से तुरंत leads आना शुरू हो सकती हैं, जबकि SEO और organic methods में थोड़ा समय लगता है लेकिन results long-term के लिए strong होते हैं।"
            }
          />
        </div>
      </div>

      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0">
          <Accordian
            question={"आपकी services की cost कितनी होती है?"}
            answer={
              "हमारी pricing आपके business की जरूरत के अनुसार होती है। आप हमसे contact करें, हम आपको best plan suggest करेंगे।"
            }
          />
        </div>

        <div className="md:w-1/2">
          <Accordian
            question={"क्या छोटे business भी digital marketing कर सकते हैं?"}
            answer={
              "बिल्कुल! Digital marketing छोटे business के लिए सबसे powerful तरीका है जिससे कम budget में भी ज्यादा customers तक पहुँचा जा सकता है।"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Faquestions;
