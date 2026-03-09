import { sendGAEvent } from "@next/third-parties/google";

type GAEventName =
    | "file_download"
    | "external_link_click"
    | "button_view"
    | "download_error";

export const trackEvent = (
    eventName: GAEventName,
    eventParams?: Record<string, string | number | boolean>
) => {
    try {
        const gaId = process.env.NEXT_PUBLIC_GA_ID;

        if (gaId) {
            sendGAEvent("event", eventName, eventParams || {});
        }

        if (process.env.NODE_ENV !== "production") {
            console.log(`[GA4 Track]: ${eventName}`, eventParams || {});

            if (!gaId) {
                console.warn(
                    "[GA4 Warning]: NEXT_PUBLIC_GA_ID is not defined. Events are logged but will NOT be sent to Google Analytics."
                );
            }
        }
    } catch (error) {
        console.error("Failed to send GA4 event", error);
    }
};

export const trackFileDownload = (platform: string, format: string) => {
    trackEvent("file_download", {
        platform_name: platform,
        file_format: format,
    });
};

export const trackExternalLink = (url: string) => {
    trackEvent("external_link_click", {
        link_url: url,
    });
};

export const trackButtonView = (buttonName: string) => {
    trackEvent("button_view", {
        button_name: buttonName,
    });
};

export const trackDownloadError = (platform: string, url: string) => {
    trackEvent("download_error", {
        platform_name: platform,
        link_url: url,
    });
};
