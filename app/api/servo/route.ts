import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function POST() {
  const trigger = await redis.set("servo_trigger", "1");
  console.log("trigger pressed! trigger status is: ", await redis.get("servo_trigger"));
  return NextResponse.json({ message: "Trigger activated" });
}

export async function GET() {
  const trigger = await redis.get("servo_trigger");

  if (trigger === "1") {
    console.log("trigger: ", trigger);
    await redis.set("servo_trigger", "0");
    return NextResponse.json({ status: "1" });
  }

  return NextResponse.json({ status: "0" });
}
