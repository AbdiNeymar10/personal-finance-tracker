import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

// Create a new budget
export async function POST(req: NextRequest) {
  try {
    const { userId, categoryId, amount, period, startDate, endDate } = await req.json();
    const budget = await prisma.budget.create({
      data: {
        userId,
        categoryId,
        amount,
        period,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      },
    });
    return NextResponse.json(budget, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create budget', details: error }, { status: 500 });
  }
}

// Get all budgets for a user (optionally filter by category or period)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    if (!userId) return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
    const categoryId = searchParams.get('categoryId');
    const period = searchParams.get('period');
    const where: {
      userId: string;
      categoryId?: string;
      period?: string;
    } = { userId };
    if (categoryId) where.categoryId = categoryId;
    if (period) where.period = period;
    const budgets = await prisma.budget.findMany({
      where,
      include: { category: true },
      orderBy: { startDate: 'desc' },
    });
    return NextResponse.json(budgets);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch budgets', details: error }, { status: 500 });
  }
}
