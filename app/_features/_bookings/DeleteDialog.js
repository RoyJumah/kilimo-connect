import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { BiLoader } from "react-icons/bi";
import { Button } from "@/components/ui/button";
export default function DeleteDialog({
  open,
  onOpenChange,
  handleDeleteBooking,
  deleting,
  bookingId, // Add this line
}) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogTitle>Delete booking</AlertDialogTitle>

        <AlertDialogDescription>
          Are you sure you want to delete this booking permanently? This action
          cannot be undone.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <Button onClick={() => onOpenChange(false)}>Continue</Button>
          <Button
            variant="destructive"
            onClick={() => {
              onOpenChange(false);
              handleDeleteBooking(bookingId); // Modify this line
            }}
          >
            {deleting ? (
              <div className="flex items-center justify-center gap-4 font-semibold">
                <BiLoader className="animate-spin" />
                Deleting booking...
              </div>
            ) : (
              "Delete Booking"
            )}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
