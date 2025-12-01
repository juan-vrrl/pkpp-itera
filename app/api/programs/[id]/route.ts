import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getSession } from "@/lib/session"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const program = await prisma.program.findUnique({
      where: { id },
    })

    if (!program) {
      return NextResponse.json({ error: "Program not found" }, { status: 404 })
    }

    return NextResponse.json(program)
  } catch (error) {
    console.error("Failed to fetch program:", error)
    return NextResponse.json(
      { error: "Failed to fetch program" },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getSession()

    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params
    const body = await request.json()
    const { dateStart, dateEnd, activity } = body

    if (!dateStart || !dateEnd || !activity) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const program = await prisma.program.update({
      where: { id },
      data: {
        dateStart: new Date(dateStart),
        dateEnd: new Date(dateEnd),
        activity,
      },
    })

    return NextResponse.json(program)
  } catch (error) {
    console.error("Failed to update program:", error)
    return NextResponse.json(
      { error: "Failed to update program" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getSession()

    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params

    await prisma.program.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to delete program:", error)
    return NextResponse.json(
      { error: "Failed to delete program" },
      { status: 500 }
    )
  }
}
