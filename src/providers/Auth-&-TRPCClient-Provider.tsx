"use client"
import { SessionProvider } from "next-auth/react"
import { useState } from "react";
import { getSiteURL } from "@/lib/utils";

export default function AllProvider({ children }: { children: React.ReactNode }) {
	return (
		<SessionProvider>{children}</SessionProvider>
	)
}