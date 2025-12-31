"use client";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="w-full min-h-screen px-36 py-6 flex justify-center items-center gap-3">
      <Button type="file-select" routeTo="/hi">
        Upload File
      </Button>
    </div>
  );
}
