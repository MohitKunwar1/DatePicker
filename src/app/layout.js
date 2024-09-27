import { DatePickerProvider } from "./context/datePickerContext";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DatePickerProvider>
        {children}
        </DatePickerProvider>
      </body>
    </html>
  );
}
