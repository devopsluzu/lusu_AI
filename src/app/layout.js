import '@styles/globals.css';
import ConditionalNavbar from '@components/navbar/ConditionalNavbar';
import ConditionalFooter from '@components/footer/ConditionalFooter';
import { AuthContextProvider } from '@context/AuthContext';
// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <ConditionalNavbar/>
          {children}
          {/* <ConditionalFooter/> */}
        </AuthContextProvider>
      </body>
    </html>
  );
}
