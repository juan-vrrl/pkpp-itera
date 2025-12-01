import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getSession } from "@/lib/session"

export async function GET() {
  try {
    const programs = await prisma.program.findMany({
      orderBy: { dateStart: "desc" },
    })

    return NextResponse.json(programs)
  } catch (error) {
    console.error("Failed to fetch programs:", error)
    return NextResponse.json(
      { error: "Failed to fetch programs" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getSession()

    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { dateStart, dateEnd, activity } = body

    if (!dateStart || !dateEnd || !activity) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const program = await prisma.program.create({
      data: {
        dateStart: new Date(dateStart),
        dateEnd: new Date(dateEnd),
        activity,
      },
    })

    return NextResponse.json(program, { status: 201 })
  } catch (error) {
    console.error("Failed to create program:", error)
    return NextResponse.json(
      { error: "Failed to create program" },
      { status: 500 }
    )
  }
}
