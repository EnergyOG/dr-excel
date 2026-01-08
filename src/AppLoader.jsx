import { FileSpreadsheet, Loader2 } from "lucide-react";

export const AppLoader = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <FileSpreadsheet className="text-green-600 animate-pulse" size={48} />
          <span className="text-3xl font-bold text-gray-900">DR.EXCEL</span>
        </div>
        <Loader2 className="w-12 h-12 animate-spin text-green-600 mx-auto mb-4" />
        <p className="text-lg text-gray-600">Loading resources...</p>
      </div>
    </div>
  );
};