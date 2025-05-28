import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Camera, Loader, Upload } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useServer } from "@/hooks/useServer";
import { updateUser } from "@/store/slice/user";
import { useToast } from "@/hooks/useToast";

const ProfileInfo = () => {
  const { user } = useSelector((state) => state.user);
  const { success, error } = useToast();

  const [avatar, setAvatar] = useState("");

  const fallbackName = user?.fullName?.split(" ");

  const dispatch = useDispatch();

  const { mutate, isPending } = useServer({
    onSuccess: (data) => {
      success(data?.message);
      dispatch(updateUser({ user: data?.user }));
      setAvatar("");
    },
    onError: (err) => {
      error(err.message);
    },
  });

  const uploadImage = () => {
    const formData = new FormData();

    formData.append("avatar", avatar);

    const options = {
      method: "PATCH",
      data: formData,
    };

    mutate({ endpoint: "user", options });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-6">
      <div className="size-[150px] relative shrink-0">
        <Avatar className="rounded-4xl w-full h-full">
          <AvatarImage
            src={avatar ? URL.createObjectURL(avatar) : user?.avatar?.url}
          />
          <AvatarFallback className="w-full h-full rounded-4xl">
            {fallbackName?.[0]?.[0] + fallbackName?.at(-1)?.at(0)}
          </AvatarFallback>
        </Avatar>
        <div className="absolute right-0 bottom-0">
          <Input
            type={"file"}
            id="profile-image"
            className="hidden"
            onChange={(e) => {
              setAvatar(e.target.files[0]);
            }}
          />
          <Label
            htmlFor="profile-image"
            className={
              "size-7 rounded-full flex items-center justify-center cursor-pointer bg-primary text-[#333333] hover:bg-hover"
            }
          >
            <Camera size={18} />
          </Label>
        </div>
        {avatar && (
          <div className="absolute right-0 top-0">
            <Button
              className="px-0 py-0 has-[>svg]:px-0 size-7 rounded-full bg-primary flex items-center justify-center"
              onClick={uploadImage}
              disabled={isPending}
            >
              {isPending ? (
                <Loader size={18} className="animate-spin" />
              ) : (
                <Upload size={18} />
              )}
            </Button>
          </div>
        )}
      </div>
      <div className="sm:self-end space-y-0.5">
        <h2 className="text-text-primary text-xl sm:text-2xl font-semibold">
          {user?.fullName}
        </h2>
        <p className="text-text-secondary text-sm sm:text-base">
          {user?.email}
        </p>
        <p className="text-text-secondary text-sm sm:text-base">
          {user?.country}
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
