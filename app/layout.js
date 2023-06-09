import Sidebar from '../components/Sidebar';
import './globals.css'
import Header from '@/components/Header';
import TopCards from '@/components/TopCards';
import RecentTransactions from '@/components/RecentTransactions';
import WalletSetup from '@/components/WalletSetup';



export const metadata = {
  title: 'PaySprint',
  description: 'Admin Panel',
} 

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
      <Sidebar>
        <div className='max-w-[1440px] mx-auto overflow-hidden min-h-screen'>
          <Header />
          {children}
        </div>
      </Sidebar>
      </body>
    </html>
  )
}

export default RootLayout
