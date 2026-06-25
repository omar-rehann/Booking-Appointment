"use client"
import Swal from 'sweetalert2';
import { Button } from "@/components/ui/button"
import {
  Dialog, DialogClose, DialogContent, DialogDescription,
  DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import { format } from "date-fns"
import { ChevronDownIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select, SelectContent, SelectGroup, SelectItem,
  SelectLabel, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"

export default function Appointments({ doctorname }) {
  const { user } = useUser();
  const name = `${user?.firstName || ""} ${user?.lastName || ""}`;
  const [date, setDate] = useState();
  const [getnote, setnote] = useState("");
  const [time, setTime] = useState("");

  const insertdata = async () => {
  const data = {
    data: {
      DoctorName: doctorname,
      Date: date,
      Note: getnote,
      Time: time,
      UserName: name,
    },
  };

  try {
    const res = await fetch("http://localhost:1337/api/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    console.log("result =", result);
  } catch (error) {
  }
};
 

  return (
    <div className="appointment">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-100 p-2 cursor-pointer bg-blue-600">
            Take Appointment With Doctor
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Book Appointment</DialogTitle>
            <DialogDescription>
              Enter your details to book an appointment.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="namedoctor">
              <input
                type="text"
                placeholder={doctorname}
                disabled
                className="bg-gray-300 w-full p-2 mt-2 mb-2"
              />
            </div>

            <div className="note">
              <textarea
                onChange={(e) => setnote(e.target.value)}
                placeholder="Enter Note With Doctor Appointment"
                className="bg-gray-300 w-full rounded p-2 resize-none mt-2 mb-2"
              />
            </div>

            <div className="time mt-2 mb-3">
              <Select onValueChange={(value) => setTime(value)}>
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue placeholder="Select a Time Appointment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Time Appointment</SelectLabel>
                    <SelectItem value="9:00am">09:00 AM</SelectItem>
                    <SelectItem value="9:30am">09:30 AM</SelectItem>
                    <SelectItem value="10:00am">10:00 AM</SelectItem>
                    <SelectItem value="10:30am">10:30 AM</SelectItem>
                    <SelectItem value="11:00am">11:00 AM</SelectItem>
                    <SelectItem value="11:30am">11:30 AM</SelectItem>
                    <SelectItem value="12:00pm">12:00 PM</SelectItem>
                    <SelectItem value="12:30pm">12:30 PM</SelectItem>
                    <SelectItem value="1:00pm">01:00 PM</SelectItem>
                    <SelectItem value="1:30pm">01:30 PM</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="date w-full p-3 mt-2 mb-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    data-empty={!date}
                    className="w-full justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                  >
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-full" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    defaultMonth={date}
                    className="w-full"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
             <DialogClose >
<Button type="submit" onClick={insertdata}>
              Book Now
            </Button>            </DialogClose>
            
            
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}