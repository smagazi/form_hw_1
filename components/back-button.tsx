import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BackButton() {
  return (
    <Button asChild className="absolute left-0 top-0 h-16 w-16 mt-4 ml-4">
      <Link href="http://localhost:3000/"> ← Back </Link>
    </Button>
  );
}
