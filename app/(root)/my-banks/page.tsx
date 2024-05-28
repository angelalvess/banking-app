import BankCard from '@/components/BankCard'
import HeaderBox from '@/components/HeaderBox'
import { getAccounts } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/use.actions'
import { Account } from 'node-appwrite'
import React from 'react'

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser()
  const accounts = await getAccounts({ userId: loggedIn.$id })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <section className="flex ">
      <div className="my-banks">
        <HeaderBox
          title="My Banks Accounts"
          subtext="Effortlessly manage your banking activites."
        />
        <div className="space-y-4">
          <h2 className="header-2">Your cards</h2>
          <div className="flex flex-wrap gap-6">
            {accounts &&
              accounts.data.map((a: Account) => (
                <BankCard
                  key={accounts.id}
                  account={a}
                  userName={loggedIn?.firstName}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyBanks
