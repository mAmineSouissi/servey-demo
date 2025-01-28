import { IconPlanet } from "@tabler/icons-react";
import React from "react";
import { Separator } from "../ui/separator";

export const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <IconPlanet
        className="text-primary-foreground text-black dark:text-white"
        height={72}
        width={72}
      />
      <h1 className="text-4xl font-bold leading-tight">Coming Soon 👀</h1>
      <p className="text-center text-muted-foreground">
        This page has not been created yet. <Separator />
        Stay tuned though!
      </p>
    </div>
  );
};
