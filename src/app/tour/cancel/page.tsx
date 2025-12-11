"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

function CancelContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleCancel = async () => {
    if (!id) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/cancellation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (e) {
      setStatus('error');
    }
  };

  if (!id) {
    return <div className="text-center">Invalid cancellation link.</div>;
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Cancel Tour Booking</CardTitle>
        <CardDescription>Are you sure you want to cancel your tour?</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {status === 'idle' && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              If you cancel, your spot will be released to other families.
            </p>
            <Button onClick={handleCancel} variant="destructive" className="w-full">
              Yes, Cancel My Booking
            </Button>
          </div>
        )}
        {status === 'loading' && <p className="text-center">Processing cancellation...</p>}
        {status === 'success' && (
          <div className="text-center text-green-600 space-y-2">
            <p className="font-semibold">Your booking has been cancelled successfully.</p>
            <p className="text-sm">We have notified the admin. We hope to see you another time!</p>
          </div>
        )}
        {status === 'error' && (
          <div className="text-center text-red-600">
            <p>Something went wrong. Please try again or contact us directly.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function CancelPage() {
  return (
    <div className="container flex items-center justify-center min-h-[60vh] py-20">
      <Suspense fallback={<div>Loading...</div>}>
        <CancelContent />
      </Suspense>
    </div>
  );
}
