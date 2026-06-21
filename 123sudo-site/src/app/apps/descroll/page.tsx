import type { Metadata } from "next";
import { DescrollLanding } from "@/components/descroll/DescrollLanding";

export const metadata: Metadata = {
  title: "deScroll — Reclaim Your Focus",
  description:
    "A minimalist Android launcher with app blocking, focus tools, usage insights, notification control, and scroll tracking.",
};

export default function DescrollPage() {
  return <DescrollLanding />;
}
