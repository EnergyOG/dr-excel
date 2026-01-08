//useBootstrapQuery.js
import { useQuery } from "@tanstack/react-query";
import { preloadAssets } from "./preloadAssets.js";

export const useBootstrapQuery = () => {
  return useQuery({
    queryKey: ["bootstrap"],
    queryFn: async () => {
      await preloadAssets([
        "./assets/bg-img.mp4",
        "./assets/employee-timesheet-tracker.jpg",
        "./assets/financial-management-system.jpg",
        "./assets/inventory-management-system.jpg",
        "./assets/Invoice&Quote-Generator.jpg",
        "./assets/project-cost-estimator.jpg",
        "./assets/sales-analytics-dashboard.jpg",
        "./assets/file-spreadsheet.svg"
      ]);
      return true;
    },
  });
};
