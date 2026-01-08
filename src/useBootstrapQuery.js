//useBootstrapQuery.js
import { useQuery } from "@tanstack/react-query";
import { preloadAssets } from "./preloadAssets.js";

export const useBootstrapQuery = () => {
  return useQuery({
    queryKey: ["bootstrap"],
    queryFn: async () => {
      await preloadAssets([
        "/bg-img.mp4",
        "/employee-timesheet-tracker.jpg",
        "/financial-management-system.jpg",
        "/inventory-management-system.jpg",
        "/Invoice&Quote-Generator.jpg",
        "/project-cost-estimator.jpg",
        "/sales-analytics-dashboard.jpg",
        "/file-spreadsheet.svg"
      ]);
      return true;
    },
  });
};
