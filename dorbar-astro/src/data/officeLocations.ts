export interface OfficeLocation {
  city: string;
  address: string;
  phone: string;
  email: string;
}

export const officeLocations: OfficeLocation[] = [
  {
    city: 'New York',
    address: '450 Lexington Avenue, 42nd Floor, New York, NY 10017',
    phone: '(123) 456-789',
    email: 'info@example.com',
  },
  {
    city: 'Los Angeles',
    address: '1888 Century Park East, Suite 1900, Los Angeles, CA 90067',
    phone: '(123) 456-789',
    email: 'info@example.com',
  },
  {
    city: 'Chicago',
    address: '233 S Wacker Drive, Suite 8400, Chicago, IL 60606',
    phone: '(123) 456-789',
    email: 'info@example.com',
  },
];
