"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ClockSystem() {
  const [status, setStatus] = useState<"in" | "out" | null>(null);
  const [timestamp, setTimestamp] = useState<string | null>(null);

  const handleClock = (type: "in" | "out") => {
    setStatus(type);
    setTimestamp(new Date().toLocaleString());
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-10 shadow-xl border border-gray-200">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Employee Time Tracking
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6 text-center">
        <p className="text-lg font-medium">
          Status:{" "}
          <span
            className={
              status === "in"
                ? "text-green-600"
                : status === "out"
                ? "text-red-600"
                : "text-gray-500"
            }
          >
            {status ? (status === "in" ? "Clocked In" : "Clocked Out") : "Not Clocked In"}
          </span>
        </p>

        {timestamp && (
          <p className="text-sm text-gray-500">Last action: {timestamp}</p>
        )}

        <div className="flex justify-center gap-4">
          <Button
            onClick={() => handleClock("in")}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white"
          >
            Clock In
          </Button>

          <Button
            onClick={() => handleClock("out")}
            variant="destructive"
            className="px-6 py-2"
          >
            Clock Out
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
