"use client";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("791e3b43-a751-4ea9-b7a9-8acef71c8a96");
  }, []);

  return null;
};
