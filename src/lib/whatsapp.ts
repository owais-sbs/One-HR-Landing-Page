export const WHATSAPP_NUMBER = '919652301382';
export const WHATSAPP_DISPLAY = '+91 96523 01382';

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildContactWhatsAppMessage(data: {
  name: string;
  email: string;
  company?: string;
  services?: string[];
  message: string;
}) {
  const lines = [
    'Hello One HR,',
    '',
    'I would like to get in touch with the following details:',
    '',
    `Name: ${data.name.trim()}`,
    `Email: ${data.email.trim()}`,
  ];

  if (data.company?.trim()) {
    lines.push(`Company: ${data.company.trim()}`);
  }

  if (data.services && data.services.length > 0) {
    lines.push(`Services: ${data.services.join(', ')}`);
  }

  lines.push('', `Message: ${data.message.trim()}`);

  return lines.join('\n');
}
