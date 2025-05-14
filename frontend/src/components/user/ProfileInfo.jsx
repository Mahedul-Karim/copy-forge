import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Camera } from "lucide-react";
import { Button } from "../ui/button";

const ProfileInfo = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-6">
      <div className="size-[150px] relative shrink-0">
        <Avatar className="rounded-4xl w-full h-auto">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="absolute right-0 bottom-0">
          <Input type={"file"} id="profile-image" className="hidden" />
          <Label
            htmlFor="profile-image"
            className={
              "size-7 rounded-full flex items-center justify-center cursor-pointer bg-primary text-[#333333] hover:bg-hover"
            }
          >
            <Camera size={18} />
          </Label>
        </div>
        {/* <div className="absolute right-0 top-0">
          <Button className="px-0 py-0 has-[>svg]:px-0 size-7 rounded-full bg-primary flex items-center justify-center">
            <Upload size={18} />
          </Button>
        </div> */}
      </div>
      <div className="sm:self-end space-y-0.5">
        <h2 className="text-text-primary text-xl sm:text-2xl font-semibold">
          John Doe
        </h2>
        <p className="text-text-secondary text-sm sm:text-base">
          test@gmail.com
        </p>
        <p className="text-text-secondary text-sm sm:text-base">
          United Arab Emirates
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
