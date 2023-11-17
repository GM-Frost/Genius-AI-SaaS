"use client";

import React, { useEffect, useState } from "react";
import { Promodal } from "@/components/promodal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <Promodal />;
};
