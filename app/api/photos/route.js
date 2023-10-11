import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import photos from './data.json';

export async function GET(request) {
  return NextResponse.json(photos);
}
