"use client"

import Header from "@/components/Header"
import RecentTransactions from "@/components/RecentTransactions"
import Sidebar from "@/components/Sidebar"
import TopCards from "@/components/TopCards"
import './globals.css'
import WalletSetup from "@/components/WalletSetup"




const Home = () => {
  return (
    <div>
      <TopCards />

      <div className="p-4 grid md:grid-cols-2 grid-cols-1 gap-4 mx-10">
        <RecentTransactions />
        <WalletSetup />
      </div>
    </div>
  )
}

export default Home
