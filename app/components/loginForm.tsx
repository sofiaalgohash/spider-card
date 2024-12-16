"use client";

import React from "react";
import {
  Image,
  Button,
  Input,
  Checkbox,
  Link,
  Spacer,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";

export default function Component() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex w-full max-w flex-col gap-4 rounded-large px-8 pb-10 pt-6">
      <div className="flex justify-between items-top w-full">
        <Button
          fullWidth
          className="h-[40px] w-3/12 text-small font-semibold text-white bg-[#015D79] border-[#00A9BF]"
          radius="full"
          variant="bordered"
          size="lg"
        >
          生物認證
        </Button>
        <Image
          alt="Logo"
          className="h-[60px] w-[60px]"
          radius="lg"
          src="https://rfq-mw-card.s3.ap-northeast-3.amazonaws.com/LOGOSPIDER1.png"
        />
        <Button
          fullWidth
          className="h-[40px] w-3/12 text-small font-semibold text-white bg-[#015D79] border-[#00A9BF]"
          radius="full"
          variant="bordered"
          size="lg"
        >
          註冊
        </Button>
      </div>
      <form
        className="flex flex-col gap-4 text-medium font-semibold font-mono"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
          variant="bordered"
          classNames={{
            input: ["border-none"],
            // input tag inside innerWrapper
          }}
        />
        <Input
          endContent={
            <button type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <Icon
                  className="pointer-events-none text-2xl text-default-400"
                  icon="solar:eye-closed-linear"
                />
              ) : (
                <Icon
                  className="pointer-events-none text-2xl text-default-400"
                  icon="solar:eye-bold"
                />
              )}
            </button>
          }
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="Enter your password"
          type={isVisible ? "text" : "password"}
          variant="bordered"
        />
        <div className="flex justify-between items-top w-full">
          <Input labelRight=".org" placeholder="2FA" />
          <Spacer x={5} />
          <Button
            fullWidth
            className="h-[40px] w-4/12 text-small font-semibold text-white bg-[#015D79] border-[#00A9BF]"
            radius="full"
            variant="bordered"
            size="lg"
          >
            忘記密碼
          </Button>
        </div>
        <div className="flex justify-between items-top w-full">
          <Button
            fullWidth
            className="h-[40px] w-full text-medium font-semibold text-white bg-[#015D79] border-[#00A9BF]"
            radius="full"
            variant="bordered"
            size="lg"
            type="submit"
          >
            登入
          </Button>
          <Spacer x={5} />
          <Button
            fullWidth
            className="h-[40px] w-2/12 text-medium font-semibold text-white bg-[#015D79] border-[#00A9BF]"
            radius="full"
            variant="bordered"
            size="lg"
          >
            faceid
          </Button>
        </div>
      </form>
    </div>
  );
}
