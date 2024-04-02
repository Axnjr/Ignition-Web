import { NextRequest, NextResponse } from "next/server";
import { EC2Client, RunInstancesCommand, DescribeAccountAttributesCommand } from "@aws-sdk/client-ec2";
import { Client } from 'ssh2';

export async function GET(req: NextRequest) {

}