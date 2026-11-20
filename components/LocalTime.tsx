"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

/**
 * Live clock in the site's timezone (Zug). Rendered only on the client, so the
 * server markup stays stable and the header never shifts while hydrating.
 */
export function LocalTime({ withCity = true }: { withCity?: boolean }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: site.timezone,
    });

    const update = () => setTime(formatter.format(new Date()));
    update();

    const interval = setInterval(update, 30_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="label tabular-nums">
      {withCity && <span className="hidden sm:inline">Zug&nbsp;</span>}
      <span className={time ? "opacity-100" : "opacity-0"}>{time ?? "--:--"}</span>
    </span>
  );
}
