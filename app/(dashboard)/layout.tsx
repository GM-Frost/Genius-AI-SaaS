import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

import React from "react";
import { getApiLimitCount } from "@/lib/api-limit";
import Footer from "@/components/footer";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar apiLimitCount={apiLimitCount} />
      </div>
      <Footer />
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default layout;
