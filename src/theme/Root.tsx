import React, {useEffect} from 'react';

export default function Root({children}) {

  useEffect(() => {

    function handleCopy() {

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "code_copy", {
          event_category: "developer_engagement",
        });
      }

    }

    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("copy", handleCopy);
    };

  }, []);

  return <>{children}</>;
}