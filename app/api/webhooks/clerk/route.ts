// app/api/webhooks/clerk/route.ts
import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";

export async function GET() {
  return NextResponse.json({
    message: "Webhook endpoint is working!",
    timestamp: new Date().toISOString(),
    path: "/api/webhooks/clerk",
  });
}

export async function POST(request: Request) {
  console.log("🔥 Webhook POST request received!");

  try {
    const payload = await request.json();

    console.log("📦 Webhook received:", {
      type: payload.type,
      userId: payload.data?.id,
      emailVerified: payload.data?.email_addresses?.[0]?.verification?.status,
    });

    if (payload.type === "user.created") {
      const { id: userId } = payload.data;
      const emailStatus =
        payload.data?.email_addresses?.[0]?.verification?.status;

      console.log(
        `👤 Event: ${payload.type}, User: ${userId}, email status: ${emailStatus}`
      );

      if (emailStatus === "verified") {
        console.log("🏢 Attempting to add user to organization...");

        const defaultOrgId = "org_321D6H30SgAmqApyR3N5L8S7FgS";

        try {
          const clerk = await clerkClient();

          await clerk.organizations.createOrganizationMembership({
            organizationId: defaultOrgId,
            userId,
            role: "org:member",
          });

          console.log(
            `🎉 Successfully added user ${userId} to organization ${defaultOrgId}`
          );

          // REMOVE ALL THE METADATA UPDATE CODE - you don't need it anymore
        } catch (orgError) {
          console.error(`💥 Failed to add user to organization:`, orgError);

          if (
            orgError &&
            typeof orgError === "object" &&
            "status" in orgError
          ) {
            console.error(`💥 Error details:`, {
              status: (orgError as any).status,
              clerkTraceId: (orgError as any).clerkTraceId,
              errors: (orgError as any).errors,
            });
          }
        }
      } else {
        console.log(
          `📧 User email not verified yet, skipping organization assignment`
        );
      }
    } else {
      console.log(`ℹ️ Ignoring webhook type: ${payload.type}`);
    }

    return NextResponse.json({
      received: true,
      message: "Webhook processed successfully",
      type: payload.type,
    });
  } catch (error) {
    console.error("💥 Error processing webhook:", error);
    return NextResponse.json(
      {
        error: "Error processing webhook",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 400 }
    );
  }
}
