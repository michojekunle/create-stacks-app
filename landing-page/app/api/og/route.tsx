import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Dynamic params
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Build Stacks Apps Faster";

    const hasDescription = searchParams.has("description");
    const description = hasDescription
      ? searchParams.get("description")?.slice(0, 150)
      : "Scaffold production-ready Stacks blockchain applications in seconds.";

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.05) 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        {/* Decorative Glows */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "-10%",
            width: "80%",
            height: "80%",
            background:
              "radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            right: "-10%",
            width: "80%",
            height: "80%",
            background:
              "radial-gradient(circle, rgba(255, 85, 0, 0.15) 0%, rgba(0,0,0,0) 70%)",
          }}
        />

        {/* Logo & Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "90px",
              height: "90px",
              border: "10px solid #FF5500",
              borderRadius: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "rotate(10deg)",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                backgroundColor: "#FF5500",
                borderRadius: "10px",
              }}
            />
          </div>
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 900,
              color: "white",
              letterSpacing: "-0.05em",
              margin: 0,
            }}
          >
            Create{" "}
            <span
              style={{
                color: "#FF5500",
                marginLeft: "16px",
                marginRight: "16px",
              }}
            >
              Stacks
            </span>{" "}
            App
          </h1>
        </div>

        {/* Dynamic Content */}
        <h2
          style={{
            fontSize: "48px",
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            margin: 0,
            marginBottom: "20px",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h2>

        <p
          style={{
            fontSize: "30px",
            fontWeight: 400,
            color: "#A1A1AA",
            maxWidth: "850px",
            textAlign: "center",
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          {description}
        </p>

        {/* CLI Command */}
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            background: "rgba(255,255,255,0.03)",
            border: "2px solid rgba(255,255,255,0.1)",
            padding: "24px 48px",
            borderRadius: "24px",
            color: "#D4D4D8",
            fontSize: "32px",
            fontFamily: "monospace",
            boxShadow: "0 20px 40px -10px rgba(255,85,0,0.1)",
          }}
        >
          <span style={{ color: "#FF5500", marginRight: "16px" }}>$</span>
          npx @devvmichael/create-stacks-app
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
