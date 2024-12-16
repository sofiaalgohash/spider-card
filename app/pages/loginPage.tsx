"use client";

import React, { useState } from "react";
import {
  Image,
  Button,
  Spacer,
  useDisclosure,
  Divider,
} from "@nextui-org/react";
import LoginForm from "../components/loginForm";
import LanguagePullDownMenu from "../components/languagePullDownMenu";
import "@/styles/globals.css";

export default function LoginPage() {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  return (
    <div className="flex h-dvh w-full">
      <Spacer x={6} />

      <div className="relative flex-none">
        {/* Main Image */}
        <Spacer y={2} />
        <Image
          className="h-[50px] w-[200px]"
          radius="lg"
          src="https://rfq-mw-card.s3.ap-northeast-3.amazonaws.com/spiderlogowhite.png"
        />
        <Spacer y={2} />

        <Button
          fullWidth
          className={`h-[40px] w-[100px] text-medium font-semibold text-white ${
            selectedButton === 1
              ? "bg-[var(--blue-50)] hover:bg-[var(--blue-100)] border-[var(--blue-200)]"
              : "hover:bg-[var(--grey-50)]"
          }`}
          radius="full"
          variant={selectedButton === 1 ? "ghost" : "light"}
          size="lg"
          onClick={() => setSelectedButton(1)}
        >
          資產託管
        </Button>

        <Spacer y={2} />

        <Button
          fullWidth
          className={`h-[40px] w-[100px] text-medium font-semibold text-white ${
            selectedButton === 2
              ? "bg-[var(--blue-50)] hover:bg-[var(--blue-100)] border-[var(--blue-200)]"
              : "hover:bg-[var(--grey-50)]"
          }`}
          radius="full"
          variant={selectedButton === 2 ? "ghost" : "light"}
          size="lg"
          onClick={() => setSelectedButton(2)}
        >
          資產卡
        </Button>

        <Spacer y={2} />

        <div className="flex justify-between">
          <Button
            fullWidth
            className={`h-[40px] w-[100px] text-medium font-semibold text-white ${
              selectedButton === 3
                ? "bg-[var(--blue-50)] hover:bg-[var(--blue-100)] border-[var(--blue-200)]"
                : "hover:bg-[var(--grey-50)]"
            }`}
            radius="full"
            variant={selectedButton === 3 ? "ghost" : "light"}
            size="lg"
            onClick={() => setSelectedButton(3)}
          >
            設定
          </Button>
          <Spacer x={10} />
          <LanguagePullDownMenu />
        </div>
        <Divider className="my-4" />
        <div className="flex justify-between items-top w-full">
          <Spacer x={2} />
          <Button
            fullWidth
            className="h-[30px] w-[25px] text-small font-semibold text-white border-[#00A9BF] hover:bg-[var(--grey-50)]"
            radius="full"
            variant="bordered"
            size="lg"
            type="submit"
          >
            人工智能
          </Button>
          <Spacer x={8} />
          <Button
            fullWidth
            className="h-[30px] w-[25px] text-small font-semibold text-white border-[#00A9BF] hover:bg-[var(--grey-50)]"
            radius="full"
            variant="bordered"
            size="lg"
          >
            新聞推送
          </Button>
          <Spacer x={2} />
        </div>
      </div>

      <div className="w-full flex-1 flex-col p-4">
        <main className="mt-4 w-full overflow-visible">
          <div className="flex h-[90%] w-full flex-col gap-4 rounded-medium border-small border-[var(--blue-200)] bg-[var(--blue-50)]">
            <LoginForm />
          </div>
        </main>
      </div>
    </div>
  );
}
