export interface SalonStatus {
  isOpen: boolean;
  statusText: 'OPEN NOW' | 'CLOSED';
  detailText: string;
  sydneyTimeDisplay: string;
  dayName: string;
}

export function getSydneyStatus(): SalonStatus {
  try {
    const now = new Date();

    // Format parts in Australia/Sydney
    const formatter = new Intl.DateTimeFormat('en-AU', {
      timeZone: 'Australia/Sydney',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });

    const parts = formatter.formatToParts(now);
    const day = parts.find((p) => p.type === 'weekday')?.value || 'Monday';
    const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10);
    const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);
    const currentMinutes = hour * 60 + minute;

    // Time display in 12h format
    const displayFormatter = new Intl.DateTimeFormat('en-AU', {
      timeZone: 'Australia/Sydney',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZoneName: 'short',
    });
    const sydneyTimeDisplay = displayFormatter.format(now);

    const isWeekend = day === 'Saturday' || day === 'Sunday';
    const openMinutes = 9 * 60; // 9:00 AM
    const closeMinutes = isWeekend ? 18 * 60 : 20 * 60; // 6:00 PM (18:00) or 8:00 PM (20:00)

    // At exactly closing time, show CLOSED
    const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

    let detailText = '';
    if (isOpen) {
      const closingTimeStr = isWeekend ? '6:00 PM' : '8:00 PM';
      detailText = `Closes today at ${closingTimeStr}`;
    } else {
      if (currentMinutes < openMinutes) {
        detailText = 'Opens today at 9:00 AM';
      } else {
        detailText = 'Opens tomorrow at 9:00 AM';
      }
    }

    return {
      isOpen,
      statusText: isOpen ? 'OPEN NOW' : 'CLOSED',
      detailText,
      sydneyTimeDisplay,
      dayName: day,
    };
  } catch (e) {
    console.error('Error determining Sydney status:', e);
    return {
      isOpen: false,
      statusText: 'CLOSED',
      detailText: 'Mon–Fri 9AM–8PM | Sat–Sun 9AM–6PM',
      sydneyTimeDisplay: '',
      dayName: '',
    };
  }
}
