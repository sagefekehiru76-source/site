// "Add to calendar" file for the demo invitation.
import { demoWeddingDate } from '../../config';

export function GET() {
  const start = demoWeddingDate.replace(/[-:]/g, '').slice(0, 15); // 20270612T160000 (floating local time)
  const end = start.slice(0, 9) + '235900';
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Wifu//Demo//EN',
    'BEGIN:VEVENT',
    'UID:demo-mira-daniel@wifu',
    'DTSTAMP:20260101T000000Z',
    `DTSTART:${start}`,
    `DTEND:${end}`,
    'SUMMARY:Mira & Daniel — wedding (demo)',
    'LOCATION:Old Mill\\, Lake Garda',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
  return new Response(ics, { headers: { 'Content-Type': 'text/calendar; charset=utf-8' } });
}
