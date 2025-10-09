import { useEffect, useState } from "react";

export default function GDPRConsent() {
  const [visible, setVisible] = useState(false); // Show consent banner
  const [accepted, setAccepted] = useState(null); // true/false/null
  const [showIcon, setShowIcon] = useState(false); // Show cookie icon

  useEffect(() => {
    const consent = localStorage.getItem("gdprConsent");
    if (consent === "true" || consent === "false") {
      setAccepted(consent === "true");
      setShowIcon(true); // show cookie icon if previously chosen
    } else {
      setVisible(true); // no previous choice
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprConsent", "true");
    setAccepted(true);
    setVisible(false);
    setShowIcon(true);
  };

  const handleReject = () => {
    localStorage.setItem("gdprConsent", "false");
    setAccepted(false);
    setVisible(false);
    setShowIcon(true);
  };

  const handleIconClick = () => {
    // Reopen consent banner
    setVisible(true);
    setShowIcon(false);
  };

  return (
    <>
      {/* Cookie Banner */}
      {visible && (
        <div className="fixed bottom-4 left-4 right-4 md:bottom-6 text-center md:right-6 md:left-auto max-w-full md:max-w-xs p-4 rounded-lg 
                         text-gray-900 shadow-lg z-50 
                      bg-gray-900 dark:text-gray-100 transition-colors">
          <p className="text-sm mb-2 text-center text-white">
            We use cookies to improve your experience.{" "}
          </p>
          <p className="mb-3">
            <a
              href="/privacy-policy"
              className="underline text-yellow-500 hover:text-yellow-700 dark:text-yellow-500 dark:hover:text-yellow-700"
            >
              See our Privacy Policy
            </a>

          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={handleReject}
              className="bg-yellow-500 text-white px-4 py-2 rounded text-sm hover:bg-yellow-700 dark:hover:bg-yellow-700 transition"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="bg-gray-100 text-gray-900 px-4 py-2 rounded text-sm 
                         hover:bg-gray-200 transition 
                         dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {/* Cookie Icon in Red Circle (smaller size) */}
      {showIcon && !visible && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40">
          <button
            onClick={handleIconClick}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-500 shadow-lg border border-white 
                       flex items-center justify-center hover:scale-105 transition cursor-pointer
                       dark:border-gray-800"
            title="Cookie Preferences"
          >
            <img
              src="/revisit.svg" // Use your cookie icon
              alt="Cookie Icon"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            />
          </button>
        </div>
      )}
    </>
  );
}
